export default function CTA() {
  return (
    <section id="contact" className="relative z-10 mx-auto max-w-7xl px-6 py-24">
      <div className="rounded-3xl border border-white/10 bg-gradient-to-tr from-fuchsia-500/10 via-violet-500/10 to-sky-500/10 p-8 backdrop-blur-xl">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h3 className="text-2xl font-bold text-white sm:text-3xl">Let’s build your content engine</h3>
            <p className="mt-2 max-w-xl text-white/70">
              Share a few details and we’ll get back within 24 hours. Limited monthly slots to keep quality high.
            </p>
          </div>
          <div className="w-full max-w-md">
            <form onSubmit={(e) => e.preventDefault()} className="grid gap-3 sm:grid-cols-2">
              <input required placeholder="Your name" className="col-span-2 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-fuchsia-400" />
              <input required type="email" placeholder="Email" className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-fuchsia-400" />
              <input placeholder="Company" className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-fuchsia-400" />
              <select className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:ring-2 focus:ring-fuchsia-400">
                <option className="text-slate-900">Podcasting</option>
                <option className="text-slate-900">Content Services</option>
                <option className="text-slate-900">Production</option>
              </select>
              <textarea placeholder="What are you trying to achieve?" className="col-span-2 h-28 resize-none rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-fuchsia-400" />
              <button className="col-span-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 hover:brightness-95">Send</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
