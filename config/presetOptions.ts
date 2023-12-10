import type { Options } from "@docusaurus/preset-classic";
import type { Options as ThemeOptions } from "@docusaurus/theme-classic";
import type { Options as DocsPluginOptions } from "@docusaurus/plugin-content-docs";
import type { Options as BlogPluginOptions } from "@docusaurus/plugin-content-blog";
import type { PluginOptions as SiteMapPluginOptions } from "@docusaurus/plugin-sitemap";

export const classicPresetOptions: Options = {
  pages: false,
  theme: <ThemeOptions>{
    customCss: "./src/css/custom.css",
  },
  // https://docusaurus.io/docs/next/api/plugins/@docusaurus/plugin-content-docs#configuration
  docs: <DocsPluginOptions>{
    routeBasePath: "/",
    sidebarPath: "./sidebars.ts",
    showLastUpdateTime: true,
    editUrl: "https://github.com/stavros-k/docs/tree/master/",
  },
  // https://docusaurus.io/docs/next/api/plugins/@docusaurus/plugin-content-blog#configuration
  blog: <BlogPluginOptions>{
    blogTitle: "Stavros' Blog",
    blogSidebarCount: "ALL",
    showReadingTime: true,
    routeBasePath: "/blog",
    editUrl: "https://github.com/stavros-k/docs/tree/master/",
  },
  // https://docusaurus.io/docs/next/api/plugins/@docusaurus/plugin-sitemap#configuration
  sitemap: <SiteMapPluginOptions>{
    priority: 1,
    filename: "sitemap.xml",
    changefreq: "weekly",
  },
};
