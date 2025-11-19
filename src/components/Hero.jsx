import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative h-[90vh] min-h-[620px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/70 to-slate-950/95"></div>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-end px-6 pb-20">
        <div className="max-w-3xl">
          <p className="pointer-events-auto inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
            Independent studio crafting content for Gen Z brands
          </p>
          <h1 className="mt-5 text-4xl font-bold leading-tight text-white sm:text-6xl">
            Figuring Out Media
            <span className="block bg-gradient-to-r from-fuchsia-400 via-violet-300 to-sky-400 bg-clip-text text-transparent">with Nimesh Chavda</span>
          </h1>
          <p className="mt-4 max-w-2xl text-base text-white/70 sm:text-lg">
            We run creator-led podcasts, spin up brand YouTube channels, and produce scroll-stopping content end to end.
          </p>
          <div className="pointer-events-auto mt-8 flex flex-wrap items-center gap-3">
            <a href="#contact" className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:brightness-95">
              Start a project
            </a>
            <a href="#services" className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10">
              What we do
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
