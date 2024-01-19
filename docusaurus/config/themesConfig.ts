import type { ThemeConfig } from "@docusaurus/preset-classic";
import { themes } from "prism-react-renderer";
import { zoomConfig } from "./zoomPlugin";
import { sideLinks } from "./navbar";

export const themesConfig: ThemeConfig = {
  zoom: zoomConfig,
  prism: {
    theme: themes.github,
    darkTheme: themes.dracula,
  },
  docs: {
    sidebar: {
      autoCollapseCategories: true,
      hideable: true,
    },
  },
  navbar: {
    title: "Stavros' Docs",
    logo: {
      alt: "Dinosaur Logo",
      src: "./img/logo.svg",
    },
    items: sideLinks,
  },
};
