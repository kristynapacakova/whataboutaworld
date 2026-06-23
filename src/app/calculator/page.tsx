import { useTranslations } from "next-intl";

export default function CalculatorPage() {
  const t = useTranslations("calculator");

  const items = [
    t("flights"),
    t("accommodation"),
    t("transport"),
    t("baggage"),
    t("activities"),
  ];

  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="mb-4 text-2xl font-bold tracking-tight">{t("title")}</h1>
      <p className="mb-8 text-zinc-600">
        {t("description")}
      </p>

      <div className="flex flex-col gap-4 rounded-2xl border border-black/10 p-6">
        {items.map((label) => (
          <label key={label} className="flex flex-col gap-1 text-sm">
            {label}
            <input
              type="number"
              disabled
              placeholder="0 Kč"
              className="rounded-lg border border-black/10 px-3 py-2 disabled:opacity-50"
            />
          </label>
        ))}

        <div className="mt-2 flex justify-between border-t border-black/10 pt-4 font-semibold">
          <span>{t("total")}</span>
          <span>0 Kč</span>
        </div>

        <p className="text-xs text-zinc-500">{t("comingSoon")}</p>
      </div>
    </div>
  );
}
