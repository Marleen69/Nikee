import { Link } from 'react-router-dom';
import useCart from '../hooks/useCart';
import formatPrice from '../utils/formatPrice';

export default function CartDrawer() {
  const { items, isOpen, closeCart, totalPrice, updateQty, removeItem } = useCart();

  return (
    <div
      className={`fixed inset-0 z-50 transition ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
      aria-hidden={!isOpen}
    >
      <div
        className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition ${isOpen ? 'opacity-100' : 'opacity-0'}`}
        onClick={closeCart}
      />
      <aside
        className={`absolute right-0 top-0 h-full w-full max-w-md transform bg-[#0b0b0f] shadow-2xl transition ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Корзина"
      >
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <h3 className="text-lg font-semibold">Корзина</h3>
          <button aria-label="Закрыть корзину" onClick={closeCart} className="text-white/60 hover:text-neon">
            Закрыть
          </button>
        </div>
        <div className="flex h-[calc(100%-160px)] flex-col gap-4 overflow-y-auto px-5 py-4">
          {items.length === 0 && <p className="text-white/60">Пока пусто</p>}
          {items.map(item => (
            <div
              key={`${item.id}-${item.size}`}
              className="flex gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-3"
            >
              <img src={item.image} alt={item.name} className="h-20 w-20 rounded-lg object-cover" />
              <div className="flex flex-1 flex-col justify-between">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-xs text-white/50">Размер: {item.size}</p>
                  </div>
                  <button
                    aria-label={`Удалить ${item.name}`}
                    onClick={() => removeItem(item.id, item.size)}
                    className="text-white/40 hover:text-neon"
                  >
                    ✕
                  </button>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <button
                      aria-label="Уменьшить количество"
                      onClick={() => updateQty(item.id, item.size, Math.max(1, item.qty - 1))}
                      className="h-8 w-8 rounded-full border border-white/15 text-white hover:border-neon"
                    >
                      -
                    </button>
                    <span className="w-6 text-center">{item.qty}</span>
                    <button
                      aria-label="Увеличить количество"
                      onClick={() => updateQty(item.id, item.size, item.qty + 1)}
                      className="h-8 w-8 rounded-full border border-white/15 text-white hover:border-neon"
                    >
                      +
                    </button>
                  </div>
                  <p className="font-semibold text-neon">{formatPrice(item.price * item.qty)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between border-t border-white/10 px-5 py-4">
          <div>
            <p className="text-sm text-white/60">Итого</p>
            <p className="text-xl font-bold text-neon">{formatPrice(totalPrice)}</p>
          </div>
          <Link
            to="/checkout"
            onClick={closeCart}
            className="rounded-full bg-neon px-4 py-2 text-sm font-semibold text-black hover:shadow-[0_0_25px_#00eaff]"
          >
            Оформить
          </Link>
        </div>
      </aside>
    </div>
  );
}

