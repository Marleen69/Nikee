import { Link, NavLink } from 'react-router-dom';
import useCart from '../hooks/useCart';

const nav = [
  { to: '/', label: 'Главная' },
  { to: '/shoes', label: 'Кроссовки' },
  { to: '/apparel', label: 'Одежда' },
  { to: '/jackets', label: 'Куртки' }
];

export default function Header() {
  const { totalCount, toggleCart } = useCart();
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/70 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="text-xl font-black tracking-tight text-white">
          NIKEE
        </Link>
        <nav className="hidden gap-6 text-xs uppercase tracking-[0.12em] text-white/70 sm:flex">
          {nav.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `relative pb-1 transition hover:text-neon ${isActive ? 'text-neon' : ''}`
              }
            >
              {item.label}
              <span className="absolute left-0 -bottom-[3px] h-[2px] w-full origin-left scale-x-0 bg-neon transition duration-200 group-hover:scale-x-100" />
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            to="/cart"
            className="hidden rounded-full border border-white/15 px-3 py-1 text-xs font-semibold text-white transition hover:border-neon hover:text-neon sm:inline-flex"
          >
            Корзина
          </Link>
          <button
            aria-label="Открыть корзину"
            onClick={toggleCart}
            className="relative rounded-full border border-white/20 px-3 py-1 text-xs font-semibold text-white transition hover:border-neon hover:text-neon"
          >
            Cart
            <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-neon text-[11px] font-bold text-black">
              {totalCount}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}

