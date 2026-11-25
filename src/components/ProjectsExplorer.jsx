"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import ProjectCard from "./ProjectCard";

export default function ProjectsExplorer({ projects, categories }) {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter((p) => {
      const matchesCategory = category === "All" || p.category === category;
      const matchesQuery =
        !q || [p.title, p.description, ...p.tags].join(" ").toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [projects, category, query]);

  function resetFilters() {
    setCategory("All");
    setQuery("");
  }

  return (
    <>
      {/* controls */}
      <div className="mt-12 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
          {categories.map((c) => {
            const active = c === category;
            return (
              <button
                key={c}
                type="button"
                onClick={() => setCategory(c)}
                aria-pressed={active}
                className={`border px-4 py-2 font-mono text-xs tracking-[0.2em] transition ${
                  active
                    ? "border-violet-glow bg-violet-glow text-star"
                    : "border-white/15 text-muted hover:border-cyan-glow hover:text-cyan-glow"
                }`}
              >
                {c.toUpperCase()}
              </button>
            );
          })}
        </div>

        <label className="relative block md:w-72">
          <span className="sr-only">Search projects</span>
          <Search size={16} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search missions..."
            className="w-full border border-white/15 bg-space-950/60 py-2.5 pl-10 pr-3 font-mono text-sm text-star outline-none transition placeholder:text-muted/60 focus:border-cyan-glow"
          />
        </label>
      </div>

      {/* result count */}
      <p className="mt-6 font-mono text-xs tracking-[0.2em] text-muted" aria-live="polite">
        {visible.length} / {projects.length} MISSIONS
      </p>

      {/* grid or empty state */}
      {visible.length > 0 ? (
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <div className="mt-6 border border-dashed border-white/15 p-12 text-center">
          <p className="font-mono text-sm tracking-[0.2em] text-muted">NO_SIGNAL_FOUND</p>
          <button
            type="button"
            onClick={resetFilters}
            className="mt-4 font-mono text-xs tracking-[0.2em] text-cyan-glow hover:text-star"
          >
            RESET_FILTERS
          </button>
        </div>
      )}
    </>
  );
}