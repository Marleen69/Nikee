import ProductCard from './ProductCard';
import SearchBar from './SearchBar';
import CategoryFilter from './CategoryFilter';
import PriceFilter from './PriceFilter';

export default function ProductList({ products, filters, setFilters, loading, showFilters = true }) {
  const handlePriceChange = partial => setFilters(prev => ({ ...prev, ...partial }));

  return (
    <section className="space-y-6">
      {showFilters && (
        <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:flex-row sm:items-center sm:justify-between">
          <SearchBar value={filters.q} onChange={q => setFilters(prev => ({ ...prev, q }))} />
          <CategoryFilter value={filters.type} onChange={type => setFilters(prev => ({ ...prev, type }))} />
          <PriceFilter min={filters.min} max={filters.max} onChange={handlePriceChange} />
        </div>
      )}

      {loading ? (
        <p className="text-white/60">Загрузка каталога…</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map(p => (
            <ProductCard key={`${p.id}-${p.image}`} product={p} />
          ))}
        </div>
      )}
      {!loading && products.length === 0 && <p className="text-white/60">Товары не найдены.</p>}
    </section>
  );
}

