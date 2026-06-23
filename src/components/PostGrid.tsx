import Link from "next/link";
import PlaceholderImage from "./PlaceholderImage";
import { getAllPosts } from "@/lib/blog";

export default function PostGrid() {
  const posts = getAllPosts("en").slice(0, 6);

  if (posts.length === 0) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <article key={post.slug} className="group flex flex-col gap-3">
          <Link href={`/blog/${post.slug}`} className="block">
            <PlaceholderImage />
          </Link>
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-accent">
            {post.destination}
          </p>
          <h3 className="font-serif text-lg leading-snug text-foreground transition-colors group-hover:text-accent-green">
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </h3>
        </article>
      ))}
    </div>
  );
}
