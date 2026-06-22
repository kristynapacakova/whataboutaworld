import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import PostGrid from "@/components/PostGrid";
import AboutSection from "@/components/AboutSection";

export default function HomePage() {
  const t = useTranslations("home");

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <section className="flex flex-col items-center gap-5 pb-16 text-center">
        <h1 className="max-w-2xl font-serif text-4xl leading-tight sm:text-5xl">
          {t("tagline")}
        </h1>
        <p className="max-w-xl text-zinc-600">
          {t("description")}
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-2">
          <Link
            href="/assistant"
            className="border border-black px-6 py-3 text-xs font-medium uppercase tracking-[0.15em] transition-colors hover:bg-black hover:text-white"
          >
            {t("ctaAssistant")}
          </Link>
          <Link
            href="/blog"
            className="px-6 py-3 text-xs font-medium uppercase tracking-[0.15em] underline-offset-4 hover:underline"
          >
            {t("ctaBlog")}
          </Link>
        </div>
      </section>

      <PostGrid />

      <div className="mt-20">
        <AboutSection />
      </div>
    </div>
  );
}
