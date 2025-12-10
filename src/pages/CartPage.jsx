import { Link } from 'react-router-dom';
import useCart from '../hooks/useCart';
import formatPrice from '../utils/formatPrice';

export default function CartPage() {
  const { items, totalPrice, updateQty, removeItem, clear } = useCart();

  return (
    <div className="mx-auto max-w-5xl space-y-6 px-4 py-10 sm:px-6">
      <header className="flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-white/50">Корзина</p>
          <h1 className="text-3xl font-bold">Ваш заказ</h1>
        </div>
        {items.length > 0 && (
          <button onClick={clear} className="text-sm text-white/50 hover:text-neon">
            Очистить
          </button>
        )}
      </header>

      {items.length === 0 && <p className="text-white/60">Корзина пустая.</p>}

      <div className="space-y-3">
        {items.map(item => (
          <div key={`${item.id}-${item.size}`} className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:flex-row">
            <img src={item.image} alt={item.name} className="h-28 w-28 rounded-xl object-cover" />
            <div className="flex flex-1 flex-col gap-2">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <p className="text-lg font-semibold">{item.name}</p>
                  <p className="text-sm text-white/50">Размер: {item.size}</p>
                </div>
                <button
                  aria-label="Удалить позицию"
                  onClick={() => removeItem(item.id, item.size)}
                  className="text-white/50 hover:text-neon"
                >
                  Удалить
                </button>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQty(item.id, item.size, Math.max(1, item.qty - 1))}
                    className="h-9 w-9 rounded-full border border-white/20 text-white hover:border-neon"
                  >
                    -
                  </button>
                  <span className="w-8 text-center font-semibold">{item.qty}</span>
                  <button
                    onClick={() => updateQty(item.id, item.size, item.qty + 1)}
                    className="h-9 w-9 rounded-full border border-white/20 text-white hover:border-neon"
                  >
                    +
                  </button>
                </div>
                <p className="text-lg font-bold text-neon">{formatPrice(item.price * item.qty)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {items.length > 0 && (
        <div className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-white/50">Итого</p>
            <p className="text-2xl font-bold text-neon">{formatPrice(totalPrice)}</p>
          </div>
          <div className="flex gap-3">
            <Link
              to="/checkout"
              className="rounded-full bg-neon px-6 py-3 text-sm font-semibold text-black hover:shadow-[0_0_25px_#00eaff]"
            >
              Перейти к оплате
            </Link>
            <Link
              to="/shoes"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:border-neon hover:text-neon"
            >
              Добавить товары
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

