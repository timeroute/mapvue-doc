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
        {
          text: "通用组件",
          children: [
            "/zh/components/common/vmarker.md",
            "/zh/components/common/vpopup.md",
            "/zh/components/common/vfog.md",
            "/zh/components/common/vsprite.md",
            "/zh/components/common/vfeaturestate.md",
          ],
        },
        {
          text: "控件组件",
          children: [
            "/zh/components/controls/vattributioncontrol.md",
            "/zh/components/controls/vnavigationcontrol.md",
            "/zh/components/controls/vscalecontrol.md",
          ],
        },
        {
          text: "图层组件",
          children: [
            "/zh/components/layers/vbackgroundlayer.md",
            "/zh/components/layers/vfilllayer.md",
            "/zh/components/layers/vfillextrusionlayer.md",
            "/zh/components/layers/vcirclelayer.md",
            "/zh/components/layers/vlinelayer.md",
            "/zh/components/layers/vsymbollayer.md",
            "/zh/components/layers/vheatmaplayer.md",
            "/zh/components/layers/vhillshadelayer.md",
            "/zh/components/layers/vrasterlayer.md",
          ],
        },
        {
          text: "数据源组件",
          children: [
            "/zh/components/sources/vcanvassource.md",
            "/zh/components/sources/vgeosource.md",
            "/zh/components/sources/vimagesource.md",
            "/zh/components/sources/vvideosource.md",
            "/zh/components/sources/vvectorsource.md",
            "/zh/components/sources/vrastersource.md",
            "/zh/components/sources/vrasterdemsource.md",
          ],
        },
      ],
    },
  ],
};
