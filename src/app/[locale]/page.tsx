import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function HomePage() {
  const t = useTranslations("home");

  const features = [
    {
      title: t("featureAssistantTitle"),
      text: t("featureAssistantText"),
      href: "/asistent" as const,
    },
    {
      title: t("featureCalculatorTitle"),
      text: t("featureCalculatorText"),
      href: "/kalkulacka" as const,
    },
    {
      title: t("featureBlogTitle"),
      text: t("featureBlogText"),
      href: "/blog" as const,
    },
  ];

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <section className="flex flex-col gap-6">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          {t("title")}
        </h1>
        <p className="text-xl text-zinc-600 dark:text-zinc-400">
          {t("tagline")}
        </p>
        <p className="max-w-2xl text-zinc-600 dark:text-zinc-400">
          {t("description")}
        </p>
        <div className="flex flex-wrap gap-4 pt-2">
          <Link
            href="/asistent"
            className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-zinc-700"
          >
            {t("ctaAssistant")}
          </Link>
          <Link
            href="/blog"
            className="rounded-full border border-black/10 px-6 py-3 text-sm font-medium transition-colors hover:bg-black/5 dark:border-white/10 dark:hover:bg-white/5"
          >
            {t("ctaBlog")}
          </Link>
        </div>
      </section>

      <section className="mt-20">
        <h2 className="mb-8 text-2xl font-semibold">{t("featuresTitle")}</h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {features.map((feature) => (
            <Link
              key={feature.href}
              href={feature.href}
              className="rounded-2xl border border-black/10 p-6 transition-colors hover:bg-black/5 dark:border-white/10 dark:hover:bg-white/5"
            >
              <h3 className="mb-2 font-semibold">{feature.title}</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                {feature.text}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
