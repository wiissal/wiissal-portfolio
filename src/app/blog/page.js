import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getAllPosts } from "../../lib/blog";
import SocialLinks from "../../components/SocialLinks";

export const metadata = {
  title: "Blog | Wissal Ouboujemaa",
  description: "Notes on building web and mobile apps: decisions, bugs and lessons learned.",
};

function formatDate(date) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
}

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="mx-auto min-h-svh max-w-3xl px-6 pt-36 pb-24">
      <header>
        <p className="font-mono text-xs tracking-[0.2em]">
          <span className="text-cyan-glow">HOME</span>
          <span className="mx-2 text-muted">/</span>
          <span className="text-muted">BLOG</span>
        </p>
        <h1 className="mt-3 font-display text-3xl font-bold tracking-widest md:text-4xl">TRANSMISSIONS</h1>
        <p className="mt-4 text-muted">
          Notes on what I build: the decisions, the bugs and what I learn along the way.
        </p>
      </header>

      {posts.length === 0 ? (
        <div className="mt-12 rounded-3xl border border-white/10 bg-space-800/50 p-8 text-center">
          <p className="text-muted">The first articles are on their way.</p>
          <SocialLinks className="mt-4 justify-center" />
        </div>
      ) : (
        <ul className="mt-12 space-y-4">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block rounded-2xl border border-white/10 bg-space-800/40 p-6 transition hover:-translate-y-0.5 hover:border-violet-glow/50"
              >
                <p className="font-mono text-xs text-muted">
                  <time dateTime={post.date}>{formatDate(post.date)}</time> · {post.readingTime} min read
                  {post.draft && <span className="ml-2 text-nebula">DRAFT</span>}
                </p>
                <h2 className="mt-2 flex items-start justify-between gap-4 text-xl font-semibold text-star">
                  {post.title}
                  <ArrowUpRight size={18} className="mt-1 shrink-0 text-muted transition group-hover:text-cyan-glow" />
                </h2>
                <p className="mt-2 text-sm text-muted">{post.summary}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <li key={tag} className="rounded-full border border-white/10 px-3 py-0.5 text-xs text-muted">
                      {tag}
                    </li>
                  ))}
                </ul>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}