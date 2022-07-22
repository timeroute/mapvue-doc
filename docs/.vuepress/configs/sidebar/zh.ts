import type { SidebarConfig } from "vuepress";

export const sidebarZh: SidebarConfig = {
  "/zh/guide/": [
    {
      text: "指南",
      children: ["/zh/guide/README.md", "/zh/guide/getting-started.md"],
    },
  ],
  "/zh/components/": [
    {
      text: "组件",
      children: [
        "/zh/components/README.md",
        "/zh/components/vmap.md",
        "/zh/components/vfilllayer.md",
        "/zh/components/vrasterlayer.md",
      ],
    },
  ],
};
