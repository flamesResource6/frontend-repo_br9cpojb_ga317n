import { Mic2, Clapperboard, Youtube } from 'lucide-react'

const services = [
  {
    icon: Mic2,
    title: 'Podcasting',
    description:
      'Creator-to-founder conversations hosted by Nimesh. We handle research, booking, recording, editing, and distribution.',
    bullets: ['Remote + studio setups', 'Narrative and clip strategy', 'Spotify, Apple, YouTube'],
  },
  {
    icon: Youtube,
    title: 'Content Services',
    description:
      'We help brands incubate and grow their own YouTube channels with a creator-native playbook.',
    bullets: ['Channel strategy + positioning', 'Formats that fit your brand', 'Monthly content calendars'],
  },
  {
    icon: Clapperboard,
    title: 'Production',
    description:
      'From pre to post — scripting, shoots, edits, motion, and packaging that resonates with Gen Z.',
    bullets: ['Agile crews, high output', 'Shorts + long-form ready', 'Thumbnails, titles, metadata'],
  },
]

export default function Services() {
  return (
    <section id="services" className="relative z-10 mx-auto max-w-7xl px-6 py-24">
      <div className="mb-10">
        <p className="text-sm font-semibold tracking-widest text-fuchsia-300/80">SERVICES</p>
        <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">Built for modern brands</h2>
        <p className="mt-3 max-w-2xl text-white/60">
          Three pillars, one outcome: a content engine that compounds.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {services.map((s) => (
          <div
            key={s.title}
            className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition shadow-[0_0_0_0_rgba(0,0,0,0)] hover:shadow-[0_10px_40px_-10px_rgba(168,85,247,0.35)]"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-gradient-to-tr from-fuchsia-500 via-violet-500 to-sky-500 p-2 text-white shadow-lg shadow-fuchsia-500/30">
                <s.icon size={20} />
              </div>
              <h3 className="text-lg font-semibold text-white">{s.title}</h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-white/70">{s.description}</p>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {s.bullets.map((b) => (
                <li key={b} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400"></span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
