"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

export default function AssistantPage() {
  const t = useTranslations("assistant");
  const [input, setInput] = useState("");

  const messages = [{ role: "assistant" as const, text: t("placeholderMessage") }];

  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="mb-4 text-2xl font-bold tracking-tight">{t("title")}</h1>
      <p className="mb-2 text-zinc-600">
        {t("description")}
      </p>
      <p className="mb-8 text-sm text-zinc-500">{t("emailGateNotice")}</p>

      <div className="flex flex-col gap-4 rounded-2xl border border-black/10 p-6">
        <div className="flex flex-col gap-3">
          {messages.map((message, i) => (
            <div
              key={i}
              className="max-w-[80%] rounded-xl bg-black/5 px-4 py-3 text-sm"
            >
              {message.text}
            </div>
          ))}
        </div>

        <form
          className="flex gap-2"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={t("inputPlaceholder")}
            className="flex-1 rounded-full border border-black/10 px-4 py-2 text-sm"
          />
          <button
            type="submit"
            disabled
            className="rounded-full bg-foreground px-5 py-2 text-sm font-medium text-background disabled:opacity-50"
          >
            {t("send")}
          </button>
        </form>
      </div>
    </div>
  );
}
