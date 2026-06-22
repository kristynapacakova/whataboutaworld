import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";

const contentDir = path.join(process.cwd(), "src/content/blog");

export type PostMeta = {
  slug: string;
  title: string;
  excerpt: string;
  metaDescription: string;
  date: string;
  destination: string;
  coverImage: string;
};

export type Post = PostMeta & {
  contentHtml: string;
};

function localeDir(locale: string) {
  return path.join(contentDir, locale);
}

export function getAllSlugs(locale: string): string[] {
  const dir = localeDir(locale);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

export function getAllPosts(locale: string): PostMeta[] {
  return getAllSlugs(locale)
    .map((slug) => getPostMeta(locale, slug))
    .filter((post): post is PostMeta => post !== null)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

function readFile(locale: string, slug: string) {
  const filePath = path.join(localeDir(locale), `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  return fs.readFileSync(filePath, "utf8");
}

export function getPostMeta(locale: string, slug: string): PostMeta | null {
  const raw = readFile(locale, slug);
  if (!raw) return null;
  const { data } = matter(raw);
  return {
    slug,
    title: data.title ?? slug,
    excerpt: data.excerpt ?? "",
    metaDescription: data.metaDescription ?? data.excerpt ?? "",
    date: data.date ?? "",
    destination: data.destination ?? "",
    coverImage: data.coverImage ?? "",
  };
}

export async function getPost(locale: string, slug: string): Promise<Post | null> {
  const raw = readFile(locale, slug);
  if (!raw) return null;
  const { data, content } = matter(raw);
  const processed = await remark().use(remarkHtml).process(content);

  return {
    slug,
    title: data.title ?? slug,
    excerpt: data.excerpt ?? "",
    metaDescription: data.metaDescription ?? data.excerpt ?? "",
    date: data.date ?? "",
    destination: data.destination ?? "",
    coverImage: data.coverImage ?? "",
    contentHtml: processed.toString(),
  };
}
