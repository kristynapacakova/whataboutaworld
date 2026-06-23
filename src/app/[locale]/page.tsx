import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import PostGrid from "@/components/PostGrid";
import AboutSection from "@/components/AboutSection";
import Reveal from "@/components/Reveal";

export default function HomePage() {
  const t = useTranslations("home");

  return (
    <div className="overflow-hidden">
      <section className="relative mx-auto flex max-w-6xl flex-col items-center gap-5 px-6 pb-20 pt-12 text-center">
        <div
          aria-hidden
          className="absolute -top-24 left-1/2 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-accent-soft/30 blur-3xl sm:h-96 sm:w-96"
        />
        <p className="font-script text-3xl text-accent sm:text-4xl">
          what about a world
        </p>
        <h1 className="max-w-2xl font-serif text-4xl leading-tight sm:text-5xl">
          {t("tagline")}
        </h1>
        <p className="max-w-xl text-foreground/70">
          {t("description")}
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-2">
          <Link
            href="/assistant"
            className="rounded-full bg-accent px-6 py-3 text-xs font-medium uppercase tracking-[0.15em] text-white transition-colors hover:bg-accent-green"
          >
            {t("ctaAssistant")}
          </Link>
          <Link
            href="/blog"
            className="rounded-full border border-accent/30 px-6 py-3 text-xs font-medium uppercase tracking-[0.15em] transition-colors hover:bg-accent/10"
          >
            {t("ctaBlog")}
          </Link>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 pb-16">
        <Reveal>
          <PostGrid />
        </Reveal>

        <Reveal delay={100} className="mt-20">
          <AboutSection />
        </Reveal>
      </div>
    </div>
  );
}
