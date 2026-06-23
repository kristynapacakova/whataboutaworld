import { useTranslations } from "next-intl";
import Link from "next/link";
import PlaceholderImage from "./PlaceholderImage";
import SocialIcons from "./SocialIcons";

export default function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20">
      <SocialIcons className="mb-3 justify-center" />
      <div className="mb-2 text-center text-xs font-medium uppercase tracking-[0.2em] text-foreground/40">
        {t("instagramHandle")}
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <PlaceholderImage key={i} aspect="aspect-square" rounded="" />
        ))}
      </div>

      <div className="border-t border-accent-soft">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-8 text-xs font-medium uppercase tracking-[0.15em] text-foreground/60 sm:flex-row sm:justify-between">
          <nav className="flex gap-6">
            <Link href="/blog">{t("destinations")}</Link>
            <Link href="/blog">{t("about")}</Link>
            <Link href="/blog">{t("blog")}</Link>
            <Link href="/blog">{t("shop")}</Link>
          </nav>
          <nav className="flex gap-6 normal-case tracking-normal">
            <Link href="/blog">{t("privacy")}</Link>
            <Link href="/blog">{t("terms")}</Link>
          </nav>
        </div>
        <div className="border-t border-accent-soft/60 px-6 py-4 text-center text-xs text-foreground/40">
          © {year} What About A World — {t("rights")}
        </div>
      </div>
    </footer>
  );
}
