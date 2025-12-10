const options = [
  { label: 'Все', value: 'all' },
  { label: 'Кроссовки', value: 'shoes' },
  { label: 'Одежда', value: 'apparel' },
  { label: 'Куртки', value: 'jackets' }
];

export default function CategoryFilter({ value, onChange }) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map(opt => (
        <button
          key={opt.value}
          aria-label={`Фильтр ${opt.label}`}
          onClick={() => onChange(opt.value)}
          className={`rounded-full border px-3 py-2 text-xs font-semibold transition ${
            value === opt.value
              ? 'border-neon text-neon'
              : 'border-white/15 text-white hover:border-neon/60 hover:text-neon'
          }`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}

