import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import PlaceholderImage from "./PlaceholderImage";

const slugs = ["rome", "bali", "lisbon", "tokyo", "santorini", "mexico"] as const;

export default function PostGrid() {
  const t = useTranslations("home.posts");

  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
      {slugs.map((slug) => (
        <article key={slug} className="flex flex-col gap-4">
          <Link href="/blog">
            <PlaceholderImage />
          </Link>
          <h3 className="font-sans text-base font-semibold uppercase tracking-wide">
            {t(`${slug}.title`)}
          </h3>
          <Link
            href="/blog"
            className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500 underline-offset-4 hover:underline"
          >
            {t("readMore")}
          </Link>
        </article>
      ))}
    </div>
  );
}
