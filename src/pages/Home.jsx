import Hero from '../components/Hero';
import ProductList from '../components/ProductList';
import MotionFade from '../components/MotionFade';
import useProducts from '../hooks/useProducts';

export default function Home() {
  const { products, filters, setFilters, loading } = useProducts('all');
  const featured = products.slice(0, 6);

  return (
    <div className="space-y-12">
      <Hero />
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <MotionFade>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-2xl font-bold">Рекомендуем</h2>
            <p className="text-sm text-white/50">Неоновые акценты и воздух</p>
          </div>
        </MotionFade>
        <ProductList products={featured} filters={filters} setFilters={setFilters} loading={loading} />
      </section>
    </div>
  );
}

