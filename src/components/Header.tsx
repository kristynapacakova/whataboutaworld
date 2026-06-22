import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Header() {
  const t = useTranslations("nav");

  return (
    <header className="border-b border-black/10 dark:border-white/10">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          What About A World
        </Link>
        <div className="flex gap-6 text-sm font-medium">
          <Link href="/blog">{t("blog")}</Link>
          <Link href="/kalkulacka">{t("calculator")}</Link>
          <Link href="/asistent">{t("assistant")}</Link>
        </div>
      </nav>
    </header>
  );
}
