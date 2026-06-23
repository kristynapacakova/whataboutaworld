import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import PlaceholderImage from "@/components/PlaceholderImage";
import { getAllPosts } from "@/lib/blog";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("blog");
  return {
    title: `${t("title")} | What About A World`,
    description: t("metaDescription"),
  };
}

export default async function BlogPage() {
  const posts = getAllPosts("en");
  const t = await getTranslations("blog");

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-12">
        <h1 className="mb-4 font-serif text-3xl">{t("title")}</h1>
        {posts.length === 0 && <p className="text-zinc-600">{t("empty")}</p>}
      </div>

      {posts.length > 0 && (
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.slug} className="flex flex-col gap-4">
              <Link href={`/blog/${post.slug}`}>
                <PlaceholderImage />
              </Link>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
                {post.destination}
              </p>
              <h3 className="font-sans text-base font-semibold uppercase tracking-wide">
                {post.title}
              </h3>
              <p className="text-sm text-zinc-600">{post.excerpt}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500 underline-offset-4 hover:underline"
              >
                Read the post
              </Link>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
