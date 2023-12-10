import type { PluginConfig } from "@docusaurus/types";

export const localSearch: PluginConfig = [
  // https://github.com/easyops-cn/docusaurus-search-local?tab=readme-ov-file#theme-options
  require.resolve("@easyops-cn/docusaurus-search-local"),
  {
    docsRouteBasePath: "/",
    indexBlog: false,
    hashed: true,
  },
];
