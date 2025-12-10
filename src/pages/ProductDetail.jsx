import { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import useProducts from '../hooks/useProducts';
import useCart from '../hooks/useCart';
import formatPrice from '../utils/formatPrice';
import ProductCard from '../components/ProductCard';
import MotionFade from '../components/MotionFade';

export default function ProductDetail() {
  const { id } = useParams();
  const { allProducts, loading } = useProducts();
  const product = useMemo(() => allProducts.find(p => p.id === id), [allProducts, id]);
  const { addItem } = useCart();
  const [size, setSize] = useState(product?.sizes?.[0] || 'M');
  const [qty, setQty] = useState(1);

  if (loading) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <p className="text-white/60">Загрузка…</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <p className="text-white/60">Товар не найден.</p>
      </div>
    );
  }

  const recommended = allProducts.filter(p => p.type === product.type && p.id !== product.id).slice(0, 3);

  return (
    <div className="mx-auto max-w-6xl space-y-10 px-4 py-10 sm:px-6">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-3">
          <img src={product.image} alt={product.name} className="w-full rounded-2xl border border-white/10 object-cover" />
          <div className="grid grid-cols-4 gap-3">
            {product.gallery?.map(src => (
              <img
                key={src}
                src={src}
                alt="Доп фото"
                className="h-20 w-full rounded-xl border border-white/10 object-cover"
              />
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-white/50">{product.category}</p>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-lg font-semibold text-neon">{formatPrice(product.price)}</p>
          <p className="text-white/70">{product.description}</p>

          <div className="space-y-2">
            <p className="text-sm text-white/60">Размер</p>
            <div className="flex flex-wrap gap-2">
              {product.sizes?.map(s => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`rounded-full px-3 py-2 text-sm transition ${
                    size === s ? 'bg-neon text-black' : 'border border-white/20 text-white hover:border-neon'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              aria-label="Меньше"
              onClick={() => setQty(q => Math.max(1, q - 1))}
              className="h-10 w-10 rounded-full border border-white/20 text-white hover:border-neon"
            >
              -
            </button>
            <span className="w-8 text-center text-lg font-semibold">{qty}</span>
            <button
              aria-label="Больше"
              onClick={() => setQty(q => q + 1)}
              className="h-10 w-10 rounded-full border border-white/20 text-white hover:border-neon"
            >
              +
            </button>
          </div>

          <div className="flex gap-3">
            <button
              aria-label="Добавить в корзину"
              onClick={() => addItem(product, qty, size)}
              className="flex-1 rounded-full bg-neon px-6 py-3 font-semibold text-black hover:shadow-[0_0_25px_#00eaff]"
            >
              Добавить
            </button>
            <button className="flex-1 rounded-full border border-white/20 px-6 py-3 font-semibold text-white hover:border-neon hover:text-neon">
              Избранное
            </button>
          </div>
        </div>
      </div>

      {recommended.length > 0 && (
        <section className="space-y-4">
          <MotionFade>
            <h2 className="text-2xl font-bold">Рекомендуем</h2>
          </MotionFade>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {recommended.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

