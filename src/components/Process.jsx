export default function Process() {
  const steps = [
    {
      tag: '01',
      title: 'Figure it out',
      text: 'We align on your audience, positioning and the content thesis. Clear inputs, clear outputs.'
    },
    {
      tag: '02',
      title: 'Build the engine',
      text: 'Formats, calendars, talent, and workflows. We set up a repeatable system for consistent output.'
    },
    {
      tag: '03',
      title: 'Ship and iterate',
      text: 'Record, produce, publish, analyze. Tight feedback loops to compound what works.'
    }
  ]

  return (
    <section id="process" className="relative z-10 mx-auto max-w-7xl px-6 py-24">
      <div className="mb-10">
        <p className="text-sm font-semibold tracking-widest text-violet-300/80">PROCESS</p>
        <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">How we work</h2>
        <p className="mt-3 max-w-2xl text-white/60">A clean, no-drama flow tuned for speed and quality.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {steps.map((s) => (
          <div key={s.tag} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-white/10 text-xs font-bold text-white/80">{s.tag}</span>
            <h3 className="mt-4 text-lg font-semibold text-white">{s.title}</h3>
            <p className="mt-2 text-sm text-white/70">{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
