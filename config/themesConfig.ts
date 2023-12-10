import type { ThemeConfig } from "@docusaurus/preset-classic";
import { themes } from "prism-react-renderer";
import { zoomConfig } from "./zoomPlugin";

export const themesConfig: ThemeConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} Stavros' Docs, Built with Docusaurus.`,
  docs: {
    sidebar: {
      autoCollapseCategories: true,
      hideable: true,
    },
  },
  ...zoomConfig,
  prism: {
    theme: themes.github,
    darkTheme: themes.dracula,
  },
  navbar: {
    title: "Stavros' Docs",
    logo: {
      alt: "Dinosaur Logo",
      src: "./img/logo.svg",
    },
    items: [
      {
        type: "doc",
        docId: "index",
        position: "left",
        label: "Documentation",
        to: "/",
      },
      {
        docId: "blog",
        label: "Blog",
        position: "left",
        to: "/blog",
      },
      {
        href: "https://github.com/stavros-k/docs",
        label: "GitHub",
        position: "right",
      },
    ],
  },
  footer: {
    style: "dark",
    links: [
      {
        title: "Docs",
        items: [
          {
            label: "Documentation",
            to: "/",
          },
        ],
      },
      {
        title: "Social",
        items: [
          {
            label: "GitHub",
            href: "https://github.com/stavros-k/docs",
          },
          {
          label: "Twitter",
            href: "https://twitter.com/stavroskois",
          },
        ],
      },
      {
        title: "More",
        items: [
          {
            label: "Blog",
            to: "/blog",
          },
        ],
      },
    ],
  },

};
