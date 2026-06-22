import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "cs"],
  defaultLocale: "en",
  pathnames: {
    "/": "/",
    "/blog": "/blog",
    "/calculator": {
      en: "/calculator",
      cs: "/kalkulacka",
    },
    "/assistant": {
      en: "/assistant",
      cs: "/asistent",
    },
  },
});
