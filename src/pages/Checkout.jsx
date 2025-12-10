export default function Checkout() {
  return (
    <div className="mx-auto max-w-4xl space-y-6 px-4 py-10 sm:px-6">
      <header className="space-y-2">
        <p className="text-sm uppercase tracking-[0.3em] text-white/50">Checkout</p>
        <h1 className="text-3xl font-bold">Оформление заказа</h1>
        <p className="text-white/60">Макет платежа: добавьте форму или интеграцию Stripe позже.</p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
          <h3 className="text-lg font-semibold">Данные покупателя</h3>
          <label className="space-y-2 text-sm text-white/70">
            <span>Имя и фамилия</span>
            <input className="w-full rounded-lg border border-white/15 bg-white/[0.05] px-3 py-2 text-white" placeholder="Иван Иванов" />
          </label>
          <label className="space-y-2 text-sm text-white/70">
            <span>Email</span>
            <input className="w-full rounded-lg border border-white/15 bg-white/[0.05] px-3 py-2 text-white" placeholder="you@example.com" />
          </label>
          <label className="space-y-2 text-sm text-white/70">
            <span>Телефон</span>
            <input className="w-full rounded-lg border border-white/15 bg-white/[0.05] px-3 py-2 text-white" placeholder="+7" />
          </label>
        </div>

        <div className="space-y-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
          <h3 className="text-lg font-semibold">Доставка</h3>
          <label className="space-y-2 text-sm text-white/70">
            <span>Адрес</span>
            <input className="w-full rounded-lg border border-white/15 bg-white/[0.05] px-3 py-2 text-white" placeholder="Город, улица, дом" />
          </label>
          <label className="space-y-2 text-sm text-white/70">
            <span>Комментарий</span>
            <textarea className="w-full rounded-lg border border-white/15 bg-white/[0.05] px-3 py-2 text-white" rows="3" placeholder="Подъезд, этаж и т.п." />
          </label>
          <button className="w-full rounded-full bg-neon px-6 py-3 font-semibold text-black hover:shadow-[0_0_25px_#00eaff]">
            Оплатить (макет)
          </button>
        </div>
      </div>
    </div>
  );
}

