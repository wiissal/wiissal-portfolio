import { Mail, MapPin, Briefcase } from "lucide-react";
import ContactForm from "../../components/ContactForm";

export const metadata = {
  title: "Contact | Wissal Ouboujemaa",
  description: "Get in touch for jobs, freelance projects or collaborations.",
};

const channels = [
  { icon: Mail, label: "Email", value: "YOUR_EMAIL", href: "mailto:YOUR_EMAIL" },
  { icon: Briefcase, label: "LinkedIn", value: "Let's connect", href: "YOUR_LINKEDIN_URL" },
  { icon: MapPin, label: "Location", value: "Agadir, Morocco · Remote worldwide" },
];

export default function ContactPage() {
  return (
    <main className="mx-auto min-h-screen max-w-6xl px-6 pt-36 pb-24">
      {/* centered header */}
      <header className="text-center">
        <p className="font-mono text-xs tracking-[0.2em]">
          <span className="text-cyan-glow">HOME</span>
          <span className="mx-2 text-muted">/</span>
          <span className="text-muted">CONTACT</span>
        </p>
        <h1 className="mt-4 font-display text-4xl font-bold tracking-widest md:text-5xl">SAY HELLO</h1>
        <p className="mt-4 text-muted">Get in touch! I&apos;ll respond within 24 hours.</p>
      </header>

      <div className="mt-16 grid items-start gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-14">
        {/* info card */}
        <aside className="rounded-3xl border border-white/10 bg-space-800/50 p-8 backdrop-blur-sm md:p-10">
          <h2 className="text-2xl font-semibold leading-snug md:text-3xl">
            Have a project in mind? Let&apos;s talk!
          </h2>
          <p className="mt-4 text-sm text-muted">
            Questions, opportunities or a project to discuss: send a message and I&apos;ll get back to you.
          </p>

          <ul className="mt-10 space-y-6">
            {channels.map(({ icon: Icon, label, value, href }) => (
              <li key={label} className="flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/5 text-cyan-glow">
                  <Icon size={18} />
                </span>
                <div>
                  <p className="text-xs text-muted">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="font-medium text-star transition hover:text-cyan-glow"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="font-medium text-star">{value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </aside>

        {/* form */}
        <ContactForm />
      </div>
    </main>
  );
}