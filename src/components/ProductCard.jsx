import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import useCart from '../hooks/useCart';
import formatPrice from '../utils/formatPrice';

export default function ProductCard({ product }) {
  const { addItem } = useCart();
  if (!product) return null;

  return (
    <motion.article
      whileHover={{ y: -6, scale: 1.02 }}
      className="group flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-4 hover:border-neon"
    >
      <Link to={`/product/${product.id}`} className="hover-target">
        <div className="relative overflow-hidden rounded-xl bg-black">
          <motion.img
            src={product.image}
            alt={product.name}
            className="h-52 w-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 180 }}
          />
          <span className="absolute left-3 top-3 rounded-full bg-neon px-2 py-1 text-[11px] font-bold text-black">
            {product.tag || 'New'}
          </span>
        </div>
      </Link>
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <h3 className="text-lg font-semibold text-white">{product.name}</h3>
          <p className="text-sm text-white/60">{product.category}</p>
        </div>
        <p className="text-lg font-bold text-neon">{formatPrice(product.price)}</p>
      </div>
      <div className="flex gap-2">
        <Link
          to={`/product/${product.id}`}
          className="flex-1 rounded-full border border-white/20 px-3 py-2 text-center text-sm text-white transition hover:border-neon hover:text-neon"
        >
          Подробнее
        </Link>
        <button
          aria-label={`Добавить ${product.name} в корзину`}
          onClick={() => addItem(product)}
          className="flex-1 rounded-full bg-neon px-3 py-2 text-sm font-semibold text-black transition hover:shadow-[0_0_18px_#00eaff]"
        >
          В корзину
        </button>
      </div>
    </motion.article>
  );
}

