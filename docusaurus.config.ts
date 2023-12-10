// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import type { Config } from "@docusaurus/types";
import { presetOptions } from "./config/presetOptions";
import { themesConfig } from "./config/themesConfig";
import { localSearch } from "./config/themes";
import { imageZoom } from "./config/plugins";

const config: Config = {
  title: "Stavros' Docs",
  tagline: "Dinosaurs are cool",
  url: "https://kois.cc/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  favicon: "img/favicon.ico",
  organizationName: "stavros-k",
  projectName: "docs",
  themeConfig: themesConfig,
  presets: [
    [
      "classic",
      presetOptions,
    ],
  ],
  themes: [
    localSearch,
  ],
  plugins: [
    imageZoom,
  ],
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
};

export default config;
