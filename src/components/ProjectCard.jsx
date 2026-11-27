import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({ project }) {
  const { title, category, description, problem, solution, tags, github, live, image, team } = project;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-space-900/80 transition duration-500 hover:-translate-y-1.5 hover:border-violet-glow/60 hover:shadow-[0_20px_50px_rgba(123,63,228,0.3)]">
      {/* image */}
      <div className="relative h-52 overflow-hidden bg-space-950">
        <Image
          src={image}
          alt=""
          aria-hidden="true"
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="scale-110 object-cover opacity-40 blur-2xl"
        />
        <Image
          src={image}
          alt={`${title} screenshot`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-contain p-3 transition duration-700 group-hover:scale-105"
        />
        <span className="absolute bottom-3 left-3 border border-white/20 bg-space-950/70 px-2.5 py-1 font-mono text-[10px] tracking-[0.2em] text-cyan-glow backdrop-blur-sm">
          {category.toUpperCase()}
        </span>
      </div>

      {/* content */}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-3">
          <h3 className="font-display text-base font-bold tracking-wider text-star">{title.toUpperCase()}</h3>
          {team && <span className="font-mono text-[10px] tracking-[0.2em] text-nebula">TEAM</span>}
        </div>

        <p className="mt-2 line-clamp-2 text-sm text-muted">{description}</p>

        <dl className="mt-4 space-y-2 border-l border-violet-glow/40 pl-3 font-mono text-xs leading-relaxed">
          <div className="grid grid-cols-[5.5rem_1fr] gap-2">
            <dt className="text-cyan-glow">PROBLEM:</dt>
            <dd className="line-clamp-2 text-star/90">{problem}</dd>
          </div>
          <div className="grid grid-cols-[5.5rem_1fr] gap-2">
            <dt className="text-cyan-glow">SOLUTION:</dt>
            <dd className="line-clamp-2 text-star/90">{solution}</dd>
          </div>
        </dl>

        <ul className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li key={tag} className="border border-white/10 px-2 py-0.5 font-mono text-[10px] tracking-wider text-muted">
              {tag.toUpperCase()}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex gap-5 pt-5 font-mono text-[11px] tracking-[0.2em]">
          {live && (
            <a href={live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-cyan-glow transition hover:text-star">
              LIVE_DEMO <ArrowUpRight size={13} />
            </a>
          )}
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-muted transition hover:text-star">
              SOURCE_CODE <ArrowUpRight size={13} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}