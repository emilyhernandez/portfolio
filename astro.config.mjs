import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: 'https://hernandez.fi',
  i18n: {
    locales: ["en", "fi"],
    defaultLocale: "en",
  },

  vite: {
    plugins: [tailwindcss()]
  }
});