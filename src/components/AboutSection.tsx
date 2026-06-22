import { useTranslations } from "next-intl";
import PlaceholderImage from "./PlaceholderImage";

export default function AboutSection() {
  const t = useTranslations("about");
  const countries = t.raw("countries") as string[];

  return (
    <section className="grid grid-cols-1 items-center gap-10 border-y border-black/10 py-16 sm:grid-cols-2">
      <PlaceholderImage aspect="aspect-square" />
      <div>
        <p className="font-script text-4xl leading-none sm:text-5xl">
          {t("greeting")}
        </p>
        <p className="mt-6 max-w-md text-zinc-600">
          {t("body")}
        </p>

        <p className="mt-8 text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
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
    </section>
  );
}
