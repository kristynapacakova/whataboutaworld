import { useTranslations } from "next-intl";
import PlaceholderImage from "./PlaceholderImage";

export default function AboutSection() {
  const t = useTranslations("about");
  const countries = t.raw("countries") as string[];

  return (
    <section className="grid grid-cols-1 items-center gap-10 border-t border-accent-soft py-16 sm:grid-cols-2">
      <div>
        <p className="font-script text-4xl leading-none text-accent-green sm:text-5xl">
          {t("greeting")}
        </p>
        <p className="mt-6 max-w-md text-foreground/70">
          {t("body")}
        </p>

        <p className="mt-8 text-xs font-medium uppercase tracking-[0.2em] text-accent">
          {t("favoritesTitle")}
        </p>
        <ol className="mt-3 flex flex-col gap-1 font-serif text-lg">
          {countries.map((country, i) => (
            <li key={country}>
              {i + 1}. {country}
            </li>
          ))}
        </ol>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <PlaceholderImage aspect="aspect-[3/4]" className="translate-y-6" />
        <PlaceholderImage aspect="aspect-[3/4]" />
      </div>
    </section>
  );
}
