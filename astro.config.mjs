// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import cloudflare from "@astrojs/cloudflare";
import astroIcon from "astro-icon"; // 👈 Add this line


// https://astro.build/config
export default defineConfig({
  site: "https://t1grid.com",
  integrations: [
    mdx(),
    sitemap(),
    astroIcon(), // 👈 Add this line to the integrations array
  ],
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
});
