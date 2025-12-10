import ProductList from '../components/ProductList';
import useProducts from '../hooks/useProducts';
import MotionFade from '../components/MotionFade';

export default function Shoes() {
  const { products, filters, setFilters, loading } = useProducts('shoes');

  return (
    <div className="mx-auto max-w-6xl space-y-6 px-4 py-10 sm:px-6">
      <MotionFade>
        <header className="flex flex-col gap-2">
          <p className="text-sm uppercase tracking-[0.3em] text-white/50">Каталог</p>
          <h1 className="text-3xl font-bold">Кроссовки</h1>
          <p className="text-white/60">Air, Zoom, React — выбирай свой темп.</p>
        </header>
      </MotionFade>
      <ProductList products={products} filters={filters} setFilters={setFilters} loading={loading} />
    </div>
  );
}

