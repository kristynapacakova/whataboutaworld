import { useTranslations } from "next-intl";

export default function BlogPage() {
  const t = useTranslations("blog");

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="mb-6 text-3xl font-bold tracking-tight">{t("title")}</h1>
      <p className="text-zinc-600 dark:text-zinc-400">{t("empty")}</p>
    </div>
  );
}
