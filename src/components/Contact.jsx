import { Mail, Github, Linkedin } from 'lucide-react'

export default function Contact() {
  const items = [
    { icon: Mail, label: 'Email', href: 'mailto:tushar@example.com' },
    { icon: Github, label: 'GitHub', href: 'https://github.com/' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/' },
  ]

  const openTo = ['Collaborations', 'Freelance backend work', 'Building tools for traders']

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Let’s build something together.</h2>
          <p className="text-slate-300/90 mt-2">Reach out if this resonates.</p>

          <div className="mt-6 flex items-center justify-center gap-3 flex-wrap">
            {items.map(({ icon: Icon, label, href }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-200 hover:bg-white/10">
                <Icon size={16} /> {label}
              </a>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-center gap-2 flex-wrap">
            {openTo.map((o) => (
              <span key={o} className="px-2.5 py-1 rounded-full text-xs bg-white/10 border border-white/10 text-slate-200">{o}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
