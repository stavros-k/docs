import type { Options } from "@docusaurus/preset-classic";

export const classicPresetOptions: Options = {
  docs: {
    routeBasePath: "/docs",
    sidebarPath: "./sidebars.ts",
    editUrl: "https://github.com/stavros-k/docs/tree/master/",
  },
  // blog: false,
  blog: {
    showReadingTime: true,
    editUrl: "https://github.com/stavros-k/docs/tree/master/"
  },
  theme: {
    customCss: "./src/css/custom.css",
  },
  sitemap: {
    changefreq: "weekly",
    priority: 0.5,
    filename: 'sitemap.xml',
  }
};
