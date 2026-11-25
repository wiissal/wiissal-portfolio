import { Mail, MapPin, Briefcase } from "lucide-react";
import ContactForm from "../../components/ContactForm";

export const metadata = {
  title: "Contact | Wissal Ouboujemaa",
  description :  "Get in touch for jobs, freelance projects or collaborations.",
};

const channels = [
  {
    icon: Mail,
    label: "DIRECT_LINE",
    value: "wissaloa1@gmail.com",
    href: "mailto:wissaloa1@gmail.com",
    note: "Response time: < 24h",
  },
  {
    icon: MapPin,
    label: "BASE_OF_OPERATIONS",
    value: "Agadir, Morocco",
    note: "Remote worldwide",
  },
  {
    icon: Briefcase,
    label: "PROFESSIONAL_NETWORK",
    value: "LinkedIn",
    href: "YOUR_LINKEDIN_URL",
    note: "Let's connect",
  },
];
export default function ContactPage() {
  return (
    <main className="mx-auto min-h-screen max-w-7xl px-6 pt-32 pb-24">
      <div className="grid gap-16 lg:grid-cols-2">
        {/* left: intro + channels */}
        <div>
          <p className="font-mono text-sm tracking-[0.3em] text-cyan-glow">OPEN_TRANSMISSION</p>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-widest md:text-5xl">
            LET&apos;S BUILD SOMETHING
          </h1>
          <p className="mt-6 max-w-md text-muted">
            Have a project, a job opportunity or an idea? Send a signal. I&apos;ll get back to you within 24h.
          </p>

          <ul className="mt-12 space-y-8">
            {channels.map(({ icon: Icon, label, value, href, note }) => (
              <li key={label} className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-white/15 bg-space-950/60 text-cyan-glow">
                  <Icon size={20} />
                </span>
                <div>
                  <p className="font-mono text-xs tracking-[0.2em] text-muted">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="mt-1 block text-star transition hover:text-cyan-glow"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="mt-1 text-star">{value}</p>
                  )}
                  <p className="mt-1 text-sm text-muted/70">{note}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* right: form */}
        <div className="border border-white/10 bg-space-900/60 p-6 backdrop-blur-sm md:p-10">
          <ContactForm />
        </div>
      </div>
    </main>
  );
}