export default function PriceFilter({ min, max, onChange }) {
  return (
    <div className="flex flex-wrap items-center gap-3 text-sm text-white/70">
      <label className="flex items-center gap-2">
        <span className="text-white/50">От</span>
        <input
          aria-label="Мин цена"
          type="number"
          value={min ?? ''}
          onChange={e => onChange({ min: e.target.value ? Number(e.target.value) : null })}
          className="w-24 rounded-md border border-white/15 bg-white/[0.05] px-2 py-1 text-white focus:border-neon focus:outline-none"
        />
      </label>
      <label className="flex items-center gap-2">
        <span className="text-white/50">До</span>
        <input
          aria-label="Макс цена"
          type="number"
          value={max ?? ''}
          onChange={e => onChange({ max: e.target.value ? Number(e.target.value) : null })}
          className="w-24 rounded-md border border-white/15 bg-white/[0.05] px-2 py-1 text-white focus:border-neon focus:outline-none"
        />
      </label>
    </div>
  );
}

