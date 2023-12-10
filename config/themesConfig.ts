import type { ThemeConfig } from "@docusaurus/preset-classic";
import { themes } from "prism-react-renderer";

export const themesConfig: ThemeConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} Stavros' Docs, Built with Docusaurus.`,
  docs: {
    sidebar: {
      autoCollapseCategories: true,
      hideable: true,
    },
  },
  zoom: {
    selector: ".markdown :not(em) > img",
    config: {
      // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
      margin: 100,
      background: {
        light: "rgb(255, 255, 255)",
        dark: "rgb(50, 50, 50)",
      },
    },
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
        to: "/docs",
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
            to: "/docs",
          },
        ],
      },
      {
        title: "Community",
        items: [
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
          {
            label: "GitHub",
            href: "https://github.com/stavros-k/docs",
          },
        ],
      },
    ],
  },
  prism: {
    theme: themes.github,
    darkTheme: themes.dracula,
  },
};
