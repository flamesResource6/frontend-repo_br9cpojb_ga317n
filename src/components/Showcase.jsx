export default function Showcase() {
  return (
    <section id="showcase" className="relative z-10 mx-auto max-w-7xl px-6 py-24">
      <div className="mb-10">
        <p className="text-sm font-semibold tracking-widest text-sky-300/80">WORK</p>
        <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">Recent highlights</h2>
        <p className="mt-3 max-w-2xl text-white/60">
          A peek into the kind of energy and outcomes we ship.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-xl"
          >
            <div className="aspect-video w-full overflow-hidden rounded-xl bg-gradient-to-tr from-fuchsia-500/30 via-violet-500/30 to-sky-500/30">
              <div className="h-full w-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.2),transparent_60%)]"></div>
            </div>
            <div className="p-3">
              <p className="text-sm font-semibold text-white">Project {i}</p>
              <p className="text-xs text-white/60">Shorts, long-form, thumbnails, go-to-market</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
