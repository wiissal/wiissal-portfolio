import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import gfm from "remark-gfm";
import html from "remark-html";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");
const SLUG_RE = /^[a-z0-9-]+$/;
const isDev = process.env.NODE_ENV === "development";

function readingTime(text) {
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200)); // ~200 words per minute
}

function readFile(slug) {
  const file = path.join(BLOG_DIR, `${slug}.md`);
  if (!fs.existsSync(file)) return null;
  return matter(fs.readFileSync(file, "utf8"));
}

export function getAllPosts() {
  if (!fs.existsSync(BLOG_DIR)) return [];

  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const { data, content } = readFile(slug);
      return {
        slug,
        title: data.title,
        date: data.date,
        summary: data.summary,
        tags: data.tags ?? [],
        draft: data.draft ?? false,
        pinned: data.pinned ?? false,
        readingTime: readingTime(content),
      };
    })
    .filter((post) => !post.draft || isDev)
  .sort((a, b) => Number(b.pinned) - Number(a.pinned) || new Date(b.date) - new Date(a.date));}

export async function getPost(slug) {
  if (!SLUG_RE.test(slug)) return null; // blocks "../" path tricks

  const parsed = readFile(slug);
  if (!parsed) return null;

  const { data, content } = parsed;
  if (data.draft && !isDev) return null;

  const processed = await remark().use(gfm).use(html).process(content);

  return {
    slug,
    title: data.title,
    date: data.date,
    summary: data.summary,
    tags: data.tags ?? [],
    readingTime: readingTime(content),
    html: processed.toString(),
  };
}
