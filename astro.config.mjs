import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
// import starlightBlog from "starlight-blog";
import starlightLinksValidator from "starlight-links-validator";

// https://astro.build/config
export default defineConfig({
  site: "https://docs.kois.cc",
  trailingSlash: "ignore",
  outDir: "./build",
  compressHTML: true,
  output: "static",
  build: {
    format: "directory",
  },
  devToolbar: {
    enabled: true,
  },
  integrations: [
    // starlightBlog({
    //   title: "Blog",
    //   authors: {
    //     "stavros-k": {
    //       name: "Stavros Kois",
    //       avatar: "https://avatars.githubusercontent.com/u/1144241?v=4",
    //       url: "https://github.com/stavros-k",
    //       picture: "https://github.com/stavros-k.png",
    //     },
    //   },
    // }),
    starlight({
      // Starlight Blog
      // TODO:
      // components: {
      //   MarkdownContent: "starlight-blog/overrides/MarkdownContent.astro",
      //   Sidebar: "starlight-blog/overrides/Sidebar.astro",
      //   ThemeSelect: "starlight-blog/overrides/ThemeSelect.astro",
      // },
      plugins: [
        starlightLinksValidator({
          // TODO: Check this later
          errorOnRelativeLinks: false,
        }),
      ],
      // General
      title: "Stavros' Docs",
      description: "A documentation site built with Astro",
      tagline: "A documentation site built with Astro",
      titleDelimiter: " | ",
      tableOfContents: {
        maxHeadingLevel: 3,
        minHeadingLevel: 2,
      },
      editLink: {
        baseUrl: "https://github.com/stavros-k/docs/edit/master/",
      },
      pagefind: true,
      lastUpdated: true,
      pagination: true,
      social: {
        github: "https://github.com/stavros-k",
        openCollective: "https://opencollective.com/stavros-k",
        linkedin: "https://www.linkedin.com/in/stavros-k-kois/",
        "x.com": "https://x.com/stavroskois",
      },
      sidebar: [
        {
          label: "Networking",
          autogenerate: { directory: "/networking", collapsed: true },
        },
        {
          label: "Operating Systems",
          autogenerate: { directory: "/operating-systems", collapsed: true },
        },
        {
          label: "Software",
          autogenerate: { directory: "/software", collapsed: true },
        },
        {
          label: "Virtualization",
          autogenerate: { directory: "/virtualization", collapsed: true },
        },
        {
          label: "Windows",
          autogenerate: { directory: "/windows", collapsed: true },
        },
        {
          label: "Home Automation",
          autogenerate: { directory: "/home-automation", collapsed: true },
        },
      ],
    }),
  ],
});
