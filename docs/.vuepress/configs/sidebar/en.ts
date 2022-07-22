import type { SidebarConfig } from "vuepress";

export const sidebarEn: SidebarConfig = {
  "/guide/": [
    {
      text: "Guide",
      children: ["/guide/README.md", "/guide/getting-started.md"],
    },
  ],
  "/components/": [
    {
      text: "Components",
      children: [
        "/components/README.md",
        "/components/vmap.md",
        "/components/vfilllayer.md",
        "/components/vrasterlayer.md",
      ],
    },
  ],
};
