import type { ThemeConfig } from "@docusaurus/preset-classic";
import { docsLinks, moreLinks, socialLinks } from "./footer";
import { themes } from "prism-react-renderer";
import { zoomConfig } from "./zoomPlugin";
import { sideLinks } from "./navbar";

export const themesConfig: ThemeConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} Stavros' Docs, Built with Docusaurus.`,
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
  footer: {
    style: "dark",
    links: [
      docsLinks,
      socialLinks,
      moreLinks,
    ],
  },
};
