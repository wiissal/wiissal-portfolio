import ContactForm from "../../components/ContactForm";
import SocialLinks from "../../components/SocialLinks";

export const metadata = {
  title: "Contact | Wissal Ouboujemaa",
  description: "Get in touch for jobs, freelance projects or collaborations.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto flex min-h-svh max-w-2xl flex-col justify-center px-6 pt-28 pb-10">
      <header className="text-center">
        <p className="font-mono text-xs tracking-[0.2em]">
          <span className="text-cyan-glow">HOME</span>
          <span className="mx-2 text-muted">/</span>
          <span className="text-muted">CONTACT</span>
        </p>
        <h1 className="mt-3 font-display text-3xl font-bold tracking-widest md:text-4xl">SAY HELLO</h1>
        <p className="mt-3 text-muted">Get in touch! I&apos;ll respond within 24 hours.</p>
      </header>

      <div className="mt-8">
        <ContactForm />
      </div>

      <div className="mt-8 text-center">
        <p className="text-xs text-muted">Or reach me directly</p>
        <SocialLinks className="mt-3" justify-center />
        <p className="mt-3 text-xs text-muted/70">Agadir, Morocco · Remote worldwide</p>
      </div>
    </main>
  );
}