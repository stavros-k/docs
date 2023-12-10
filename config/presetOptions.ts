import type { Options } from "@docusaurus/preset-classic";

import type {PluginOptions } from "@docusaurus/plugin-sitemap";

export const classicPresetOptions: Options = {
  pages: false,
  docs: {
    routeBasePath: "/",
    sidebarPath: "./sidebars.ts",
    showLastUpdateTime: true,
    editUrl: "https://github.com/stavros-k/docs/tree/master/",
  },
  blog: {
    showReadingTime: true,
    routeBasePath: "/blog",
    editUrl: "https://github.com/stavros-k/docs/tree/master/"
  },
  theme: {
    customCss: "./src/css/custom.css",
  },
  sitemap: <PluginOptions> {
    priority: 1,
    filename: "sitemap.xml",
    changefreq: 'weekly',
  }
}
