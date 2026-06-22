"use client";

import { useLocale } from "next-intl";
import { useParams } from "next/navigation";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

const labels: Record<string, string> = {
  en: "EN",
  cs: "CZ",
};

export default function LocaleSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const params = useParams();
  const router = useRouter();

  return (
    <div className="flex gap-2 text-sm font-medium">
      {routing.locales.map((loc) => (
        <button
          key={loc}
          onClick={() =>
            router.replace(
              // @ts-expect-error -- pathname may contain dynamic params for the blog detail route
              { pathname, params },
              { locale: loc }
            )
          }
          className={loc === locale ? "underline" : "text-zinc-500"}
        >
          {labels[loc]}
        </button>
      ))}
    </div>
  );
}
