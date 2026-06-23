import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import PostGrid from "@/components/PostGrid";
import DestinationCircles from "@/components/DestinationCircles";
import AboutSection from "@/components/AboutSection";
import PlaceholderImage from "@/components/PlaceholderImage";
import Reveal from "@/components/Reveal";

export default function HomePage() {
  const t = useTranslations("home");

  return (
    <div>
      <section className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-6 pb-12 pt-12 text-center">
        <h1 className="max-w-2xl font-serif text-4xl leading-tight sm:text-5xl">
          {t("tagline")}
        </h1>
        <p className="max-w-xl text-foreground/70">{t("description")}</p>
        <div className="flex flex-wrap justify-center gap-4 pt-2">
          <Link
            href="/assistant"
            className="bg-accent-green px-6 py-3 text-xs font-medium uppercase tracking-[0.15em] text-white transition-colors hover:bg-accent"
          >
            {t("ctaAssistant")}
          </Link>
          <Link
            href="/blog"
            className="border border-accent-green px-6 py-3 text-xs font-medium uppercase tracking-[0.15em] text-accent-green transition-colors hover:bg-accent-soft"
          >
            {t("ctaBlog")}
          </Link>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 px-6 sm:grid-cols-4">
        <PlaceholderImage aspect="aspect-[3/4]" className="hidden sm:block" />
        <PlaceholderImage aspect="aspect-[3/4]" />
        <PlaceholderImage aspect="aspect-[3/4]" />
        <PlaceholderImage aspect="aspect-[3/4]" className="hidden sm:block" />
      </div>

      <div className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <h2 className="mb-10 text-center text-xs font-medium uppercase tracking-[0.3em] text-accent">
            {t("exploreByDestination")}
          </h2>
          <DestinationCircles />
        </Reveal>

        <Reveal delay={100} className="mt-24">
          <h2 className="mb-10 text-center text-xs font-medium uppercase tracking-[0.3em] text-accent">
            {t("latestTravels")}
          </h2>
          <PostGrid />
        </Reveal>

        <Reveal delay={100} className="mt-24">
          <AboutSection />
        </Reveal>
      </div>
    </div>
  );
}
