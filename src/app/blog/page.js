import Link from "next/link";
import SocialLinks from "../../components/SocialLinks";

export const metadata = {
  title: "Blog | Wissal Ouboujemaa",
  description: "Articles on building web and mobile apps: coming soon.",
  robots: { index: false, follow: true },
};

const upcoming = [
  "Building Moroccan Gastronomy in public with Next.js 16",
  "From bootcamp to full-stack: lessons from my first real projects",
  "React Native + Node.js: shipping a booking app end to end",
];

export default function BlogPage() {
  return (
    <main className="mx-auto flex min-h-svh max-w-2xl flex-col justify-center px-6 pt-28 pb-16 text-center">
      <p className="font-mono text-xs tracking-[0.2em]">
        <span className="text-cyan-glow">HOME</span>
        <span className="mx-2 text-muted">/</span>
        <span className="text-muted">BLOG</span>
      </p>
      <h1 className="mt-3 font-display text-3xl font-bold tracking-widest md:text-4xl">
        TRANSMISSIONS INCOMING
      </h1>
      <p className="mt-4 text-muted">
        I&apos;m writing about what I build: the decisions, the bugs and what I learn along the way.
        The first articles are on their way.
      </p>

      <div className="mt-10 rounded-3xl border border-white/10 bg-space-800/50 p-6 text-left backdrop-blur-sm md:p-8">
        <p className="font-mono text-xs tracking-[0.2em] text-cyan-glow">IN_THE_WORKS</p>
        <ul className="mt-4 space-y-3">
          {upcoming.map((title) => (
            <li key={title} className="flex items-start gap-3 text-star/90">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-glow" />
              {title}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10">
        <p className="text-sm text-muted">Follow along in the meantime</p>
        <SocialLinks className="mt-3" />
      </div>

      <Link href="/projects" className="mt-10 text-sm text-cyan-glow transition hover:text-star">
        Explore my projects →
      </Link>
    </main>
  );
}