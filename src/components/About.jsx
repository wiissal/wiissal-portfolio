import { Monitor, Smartphone, Server } from "lucide-react";
import { services } from "../data/services";
import { projects } from "../data/projects";

const icons = { web: Monitor, mobile: Smartphone, backend: Server };

export default function About() {
  const stats = [
    { value: `${projects.length}`, label: "Projects shipped" },
    { value: "3", label: "Platforms: web, mobile, API" },
    { value: "5", label: "Languages spoken" },
  ];

  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
        {/* intro */}
        <div>
          <p className="font-mono text-xs tracking-[0.3em] text-cyan-glow">ABOUT_ME</p>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight tracking-widest md:text-4xl">
            BUILDING FOR WEB, MOBILE &amp; BEYOND
          </h2>
          <p className="mt-6 text-muted">
            I&apos;m Wissal, a full-stack &amp; mobile developer based in Morocco. After a career change into tech,
            I graduated from the SIMPLON full-stack bootcamp and now build fast, accessible apps, from the
            database all the way to the last animation.
          </p>

          <dl className="mt-10 grid grid-cols-3 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl border border-white/10 bg-space-800/40 p-4">
                <dt className="text-xs text-muted">{s.label}</dt>
                <dd className="mt-1 font-display text-2xl font-bold text-star">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* services */}
        <ul className="grid gap-4">
          {services.map(({ key, title, description, stack }) => {
            const Icon = icons[key];
            return (
              <li
                key={key}
                className="rounded-2xl border border-white/10 bg-space-800/40 p-6 transition hover:border-violet-glow/50"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/5 text-cyan-glow">
                    <Icon size={20} />
                  </span>
                  <div>
                    <h3 className="font-semibold text-star">{title}</h3>
                    <p className="mt-1 text-sm text-muted">{description}</p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {stack.map((tech) => (
                        <li key={tech} className="rounded-full border border-white/10 px-3 py-1 text-xs text-muted">
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}