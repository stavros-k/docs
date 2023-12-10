import type { NavbarItem } from "@docusaurus/theme-common";

export const sideLinks: NavbarItem[] = [
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
];
