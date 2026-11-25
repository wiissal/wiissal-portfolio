import ProjectsExplorer from "../../components/ProjectsExplorer";
import { projects, categories } from "../../data/projects";

export const metadata = {
  title: "Projects | Wissal Ouboujemaa",
};

export default function ProjectsPage() {
  return (
    <main className="mx-auto min-h-screen max-w-7xl px-6 pt-32 pb-24">
      <p className="font-mono text-sm tracking-[0.3em] text-cyan-glow">MISSION_ARCHIVE</p>
      <h1 className="mt-3 font-display text-4xl font-bold tracking-widest md:text-5xl">PROJECTS</h1>
      <p className="mt-4 max-w-xl text-muted">
        Every mission I&apos;ve launched: web, mobile and backend.
      </p>

      <ProjectsExplorer projects={projects} categories={categories} />
    </main>
  );
}
