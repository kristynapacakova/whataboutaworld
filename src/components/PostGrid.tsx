import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import PlaceholderImage from "./PlaceholderImage";
import { getAllPosts } from "@/lib/blog";

export default function PostGrid() {
  const locale = useLocale();
  const t = useTranslations("home.posts");
  const posts = getAllPosts(locale).slice(0, 6);

  if (posts.length === 0) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <article key={post.slug} className="group flex flex-col gap-4">
          <Link
            href={{ pathname: "/blog/[slug]", params: { slug: post.slug } }}
            className="block overflow-hidden rounded-3xl"
          >
            <PlaceholderImage />
          </Link>
          <h3 className="font-sans text-base font-semibold uppercase tracking-wide transition-colors group-hover:text-accent">
            {post.title}
          </h3>
          <Link
            href={{ pathname: "/blog/[slug]", params: { slug: post.slug } }}
            className="text-xs font-medium uppercase tracking-[0.2em] text-accent underline-offset-4 hover:underline"
          >
            {t("readMore")}
          </Link>
        </article>
      ))}
    </div>
  );
}
