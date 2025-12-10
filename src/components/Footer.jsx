export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} NIKEE. All rights reserved.</p>
        <div className="flex gap-4 text-white/60">
          <a href="#!" className="hover:text-neon" aria-label="Политика конфиденциальности">
            Политика
          </a>
          <a href="#!" className="hover:text-neon" aria-label="Условия использования">
            Условия
          </a>
        </div>
      </div>
    </footer>
  );
}

