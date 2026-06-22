import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/10 py-6 dark:border-white/10">
      <div className="mx-auto max-w-5xl px-6 text-sm text-zinc-500">
        © {year} What About A World — {t("rights")}
      </div>
    </footer>
  );
}
