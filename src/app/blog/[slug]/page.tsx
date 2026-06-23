import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PlaceholderImage from "@/components/PlaceholderImage";
import { getAllSlugs, getPost } from "@/lib/blog";

export function generateStaticParams() {
  return getAllSlugs("en").map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost("en", slug);

  if (!post) {
    return {};
  }

  const title = `${post.title} | What About A World`;

  return {
    title,
    description: post.metaDescription,
    openGraph: {
      title,
      description: post.metaDescription,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: post.metaDescription,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost("en", slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <p className="mb-4 text-center text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
        {post.destination}
      </p>
      <h1 className="mb-8 text-center font-serif text-2xl sm:text-3xl">
        {post.title}
      </h1>

      <PlaceholderImage aspect="aspect-[16/9]" className="mb-10" />

      <div
        className="prose prose-zinc max-w-none prose-headings:font-serif prose-a:text-zinc-900"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </article>
  );
}
