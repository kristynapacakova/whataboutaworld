import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import PlaceholderImage from "@/components/PlaceholderImage";
import { getAllPosts } from "@/lib/blog";

export default async function BlogPage() {
  const locale = await getLocale();
  const posts = getAllPosts(locale);
  const t = await getTranslations("blog");

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-12">
        <h1 className="mb-4 font-serif text-4xl">{t("title")}</h1>
        {posts.length === 0 && <p className="text-zinc-600">{t("empty")}</p>}
      </div>

      {posts.length > 0 && (
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.slug} className="flex flex-col gap-4">
              <Link href={{ pathname: "/blog/[slug]", params: { slug: post.slug } }}>
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
                href={{ pathname: "/blog/[slug]", params: { slug: post.slug } }}
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
