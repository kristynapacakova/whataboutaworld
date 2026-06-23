import Link from "next/link";
import PlaceholderImage from "./PlaceholderImage";
import { getAllPosts } from "@/lib/blog";

export default function DestinationCircles() {
  const posts = getAllPosts("en").slice(0, 6);

  if (posts.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-wrap justify-center gap-x-10 gap-y-8">
      {posts.map((post) => (
        <Link
          key={post.slug}
          href={`/blog/${post.slug}`}
          className="group flex flex-col items-center gap-3"
        >
          <PlaceholderImage
            aspect="aspect-square"
            rounded="rounded-full"
            className="w-24 transition-shadow duration-300 group-hover:shadow-lg"
          />
          <span className="text-xs font-medium uppercase tracking-[0.15em] text-foreground/70 transition-colors group-hover:text-accent-green">
            {post.destination.split(",")[0]}
          </span>
        </Link>
      ))}
    </div>
  );
}
