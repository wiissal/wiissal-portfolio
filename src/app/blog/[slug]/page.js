import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { getAllPosts, getPost } from "../../../lib/blog";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return { title: "Article not found" };
  return {
    title: `${post.title} | Wissal Ouboujemaa`,
    description: post.summary,
    openGraph: { title: post.title, description: post.summary, type: "article", publishedTime: post.date },
  };
}

function formatDate(date) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  return (
    <main className="mx-auto min-h-svh max-w-3xl px-6 pt-36 pb-24">
      <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-muted transition hover:text-cyan-glow">
        <ArrowLeft size={16} /> All articles
      </Link>

      <header className="mt-8 border-b border-white/10 pb-8">
        <p className="font-mono text-xs text-muted">
          <time dateTime={post.date}>{formatDate(post.date)}</time> · {post.readingTime} min read
        </p>
        <h1 className="mt-3 text-balance text-3xl font-bold leading-tight md:text-4xl">{post.title}</h1>
        <p className="mt-4 text-lg text-muted">{post.summary}</p>
      </header>

      <article
        className="prose prose-invert mt-10 max-w-none prose-headings:text-star prose-a:text-cyan-glow prose-code:text-cyan-glow prose-pre:border prose-pre:border-white/10 prose-pre:bg-space-950"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </main>
  );
}