import type { PluginConfig } from "@docusaurus/types";

export const imageZoom: PluginConfig = [
  require.resolve("docusaurus-plugin-image-zoom"),
  {},
];

// https://github.com/francoischalifour/medium-zoom?tab=readme-ov-file#options
export const zoomConfig = {
  selector: ".markdown :not(em) > img",
  config: {
    margin: 100,
    scrollOffset: 40,
    background: {
      light: "rgb(255, 255, 255)",
      dark: "rgb(50, 50, 50)",
    },
  },
};
