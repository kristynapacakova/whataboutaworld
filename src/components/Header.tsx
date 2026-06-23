"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import SocialIcons from "./SocialIcons";

export default function Header() {
  const t = useTranslations("nav");
  const [shopOpen, setShopOpen] = useState(false);

  return (
    <header className="border-b border-accent-soft">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-6">
        <Link href="/" className="font-corinthia text-3xl sm:text-4xl">
          what about a world
        </Link>

        <nav className="flex w-full items-center justify-center gap-x-6 gap-y-2 text-xs font-medium tracking-[0.15em] uppercase sm:text-sm">
          <Link href="/blog">{t("destinations")}</Link>
          <Link href="/blog">{t("blog")}</Link>
          <Link href="/assistant">{t("assistant")}</Link>
          <Link href="/calculator">{t("calculator")}</Link>

          <div
            className="relative"
            onMouseEnter={() => setShopOpen(true)}
            onMouseLeave={() => setShopOpen(false)}
          >
            <button className="uppercase tracking-[0.15em]">
              {t("shop")}
            </button>
            {shopOpen && (
              <div className="absolute left-1/2 top-full z-10 w-56 -translate-x-1/2 border border-accent-soft bg-card py-3 normal-case tracking-normal shadow-sm">
                <Link
                  href="/blog"
                  className="block px-5 py-2 text-sm hover:bg-black/5"
                >
                  {t("shopChecklists")}
                </Link>
                <Link
                  href="/blog"
                  className="block px-5 py-2 text-sm hover:bg-black/5"
                >
                  {t("shopGiftGuide")}
                </Link>
                <Link
                  href="/blog"
                  className="block px-5 py-2 text-sm hover:bg-black/5"
                >
                  {t("shopMapPins")}
                </Link>
              </div>
            )}
          </div>

          <Link href="/blog">{t("about")}</Link>
        </nav>

        <div className="flex w-full items-center justify-end text-sm">
          <div className="flex items-center gap-5">
            <SocialIcons />
            <label className="flex items-center gap-2 text-foreground/40">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                className="h-4 w-4"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <input
                type="search"
                placeholder={t("search")}
                className="w-32 bg-transparent text-xs outline-none placeholder:text-foreground/40 sm:w-48"
              />
            </label>
          </div>
        </div>
      </div>
    </header>
  );
}
