import type { Config } from "@docusaurus/types";
import { classicPresetOptions } from "./config/presetOptions";
import { themesConfig } from "./config/themesConfig";
import { localSearch } from "./config/localSearchTheme";
import { imageZoom } from "./config/zoomPlugin";

const config: Config = {
  title: "Stavros' Docs",
  tagline: "Dinosaurs are cool",
  url: "https://docs.kois.cc/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  onDuplicateRoutes: "throw",
  favicon: "img/favicon.ico",
  organizationName: "stavros-k",
  projectName: "docs",
  themeConfig: themesConfig,
  presets: [
    [
      '@docusaurus/preset-classic',
      classicPresetOptions,
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
