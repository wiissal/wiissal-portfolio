import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({ project }) {
  const { title, category, description, problem, solution, tags, github, live, image, team } = project;

  return (
    <article className="group flex flex-col overflow-hidden border border-white/10 bg-space-800/40 backdrop-blur-sm transition duration-500 hover:-translate-y-1 hover:border-violet-glow/60 hover:shadow-[0_0_40px_rgba(123,63,228,0.25)]">
            {/* image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-space-950">
        {/* blurred background fill */}
        <Image
          src={image}
          alt=""
          aria-hidden="true"
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="scale-110 object-cover opacity-40 blur-2xl"
        />
        {/* full image, nothing cropped */}
        <Image
          src={image}
          alt={`${title} screenshot`}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-contain p-4 transition duration-700 group-hover:scale-105"
        />
        <span className="absolute bottom-4 left-4 border border-white/20 bg-space-950/70 px-3 py-1 font-mono text-[11px] tracking-[0.2em] text-cyan-glow backdrop-blur-sm">
          {category.toUpperCase()}
        </span>
      </div>

      {/* content */}
      <div className="flex flex-1 flex-col p-6 md:p-8">
        <div className="flex items-center gap-3">
          <h3 className="font-display text-xl font-bold tracking-wider text-star">{title.toUpperCase()}</h3>
          {team && (
            <span className="font-mono text-[10px] tracking-[0.2em] text-nebula">TEAM_PROJECT</span>
          )}
        </div>

        <p className="mt-3 text-muted">{description}</p>

        <dl className="mt-6 space-y-3 border-l border-white/10 pl-4 font-mono text-sm">
          <div className="grid grid-cols-[4.5rem_1fr] gap-2">
            <dt className="text-muted">PROB:</dt>
            <dd className="text-star/90">{problem}</dd>
          </div>
          <div className="grid grid-cols-[4.5rem_1fr] gap-2">
            <dt className="text-muted">SOLN:</dt>
            <dd className="text-star/90">{solution}</dd>
          </div>
        </dl>

        <ul className="mt-6 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li key={tag} className="border border-white/10 px-2.5 py-1 font-mono text-[11px] tracking-wider text-muted">
              {tag.toUpperCase()}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex gap-6 pt-6 font-mono text-xs tracking-[0.2em]">
          {live && (
            <a href={live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-cyan-glow transition hover:text-star">
              LIVE_DEMO <ArrowUpRight size={14} />
            </a>
          )}
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-muted transition hover:text-star">
              SOURCE_CODE <ArrowUpRight size={14} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}