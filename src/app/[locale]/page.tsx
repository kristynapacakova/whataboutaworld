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
        <svg
          aria-hidden
          viewBox="0 0 600 200"
          className="absolute top-4 left-1/2 -z-10 w-[36rem] -translate-x-1/2 text-accent/40"
        >
          <path
            d="M20 160 Q 300 -20 580 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="6 8"
            strokeLinecap="round"
          />
          <circle cx="580" cy="100" r="4" fill="currentColor" />
        </svg>

        <p className="postmark inline-block -rotate-2 rounded-sm px-4 py-2 font-script text-3xl text-accent sm:text-4xl">
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
            className="border-2 border-accent bg-accent px-6 py-3 text-xs font-medium uppercase tracking-[0.15em] text-card transition-colors hover:bg-transparent hover:text-accent"
          >
            {t("ctaAssistant")}
          </Link>
          <Link
            href="/blog"
            className="postmark px-6 py-3 text-xs font-medium uppercase tracking-[0.15em] text-accent transition-colors hover:bg-accent/10"
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
