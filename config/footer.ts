import type { FooterLinkItem } from "@docusaurus/theme-common";

export const socialLinks: FooterLinkItem = {
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
};

export const docsLinks: FooterLinkItem = {
  title: "Docs",
  items: [
    {
      label: "Documentation",
      to: "/",
    },
  ],
};

export const moreLinks: FooterLinkItem = {
  title: "More",
  items: [
    {
      label: "Blog",
      to: "/blog",
    },
  ],
};
