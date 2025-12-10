import { useEffect, useMemo, useState } from 'react';

const defaultFilters = {
  type: 'all',
  q: '',
  min: null,
  max: null
};

export default function useProducts(initialType = 'all') {
  const [raw, setRaw] = useState([]);
  const [filters, setFilters] = useState({ ...defaultFilters, type: initialType });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('/data/products.json')
      .then(r => r.json())
      .then(setRaw)
      .catch(() => setRaw([]))
      .finally(() => setLoading(false));
  }, []);

  const products = useMemo(() => {
    return raw.filter(p => {
      const matchType = filters.type === 'all' || p.type === filters.type;
      const matchQ = filters.q
        ? p.name.toLowerCase().includes(filters.q.toLowerCase()) ||
          p.category.toLowerCase().includes(filters.q.toLowerCase())
        : true;
      const matchMin = filters.min ? p.price >= filters.min : true;
      const matchMax = filters.max ? p.price <= filters.max : true;
      return matchType && matchQ && matchMin && matchMax;
    });
  }, [raw, filters]);

  return { products, filters, setFilters, loading, allProducts: raw };
}

