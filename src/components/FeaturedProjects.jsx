import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <section id="work" className="mx-auto max-w-7xl px-6 py-24">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="font-mono text-xs tracking-[0.3em] text-cyan-glow">SELECTED_WORK</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-widest md:text-4xl">FEATURED PROJECTS</h2>
          <p className="mt-3 max-w-xl text-muted">A few recent projects across web, mobile and backend.</p>
        </div>
        <Link
          href="/projects"
          className="group inline-flex items-center gap-2 rounded-xl border border-white/15 px-5 py-2.5 text-sm transition hover:border-cyan-glow hover:text-cyan-glow"
        >
          View all projects
          <ArrowRight size={16} className="transition group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featured.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}