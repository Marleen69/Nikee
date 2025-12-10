export default function SearchBar({ value, onChange }) {
  return (
    <label className="flex flex-1 items-center gap-3 rounded-full border border-white/15 bg-white/[0.03] px-4 py-2 text-sm text-white/80">
      <span className="text-white/50">Поиск</span>
      <input
        aria-label="Поиск товаров"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder="Название или категория"
        className="w-full bg-transparent text-white placeholder:text-white/40 focus:outline-none"
        type="search"
      />
    </label>
  );
}

