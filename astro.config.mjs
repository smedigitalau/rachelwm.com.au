import tailwindcss from "@tailwindcss/vite";
// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import icon from "astro-icon";

import db from "@astrojs/db";

import node from "@astrojs/node";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    react(),
    icon({
      include: {
        mdi: [
          "phone",
          "web",
          "email",
          "external-link",
          "arrow-right",
          "handshake-outline",
          "ticket",
          "linkedin",
          "check-circle",
          "ticket-confirmation",
        ],
        heroicons: ["arrow-long-right"],
      },
    }),
    db(),
  ],

  experimental: {
    responsiveImages: true,
  },

  adapter: node({
    mode: "standalone",
  }),
});

