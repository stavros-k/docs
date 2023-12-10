import type { Options } from "@docusaurus/preset-classic";

export const presetOptions: Options = {
  docs: {
    routeBasePath: "/docs",
    sidebarPath: "./sidebars.ts",
    editUrl: "https://github.com/stavros-k/docs/tree/master/",
  },
  blog: false,
  // blog: {
  //   showReadingTime: true,
  //   editUrl: "https://github.com/stavros-k/docs/tree/master/"
  // },
  theme: {
    customCss: "./src/css/custom.css",
  },
};
