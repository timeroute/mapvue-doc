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
        {
          text: "Common Components",
          children: [
            "/components/common/vmarker.md",
            "/components/common/vpopup.md",
            "/components/common/vfog.md",
            "/components/common/vsprite.md",
          ],
        },
        {
          text: "Control Components",
          children: [
            "/components/controls/vattributioncontrol.md",
            "/components/controls/vnavigationcontrol.md",
            "/components/controls/vscalecontrol.md",
          ],
        },
        {
          text: "Layer Components",
          children: [
            "/components/layers/vbackgroundlayer.md",
            "/components/layers/vfilllayer.md",
            "/components/layers/vfillextrusionlayer.md",
            "/components/layers/vcirclelayer.md",
            "/components/layers/vlinelayer.md",
            "/components/layers/vsymbollayer.md",
            "/components/layers/vheatmaplayer.md",
            "/components/layers/vhillshadelayer.md",
            "/components/layers/vrasterlayer.md",
          ],
        },
        {
          text: "Source Components",
          children: [
            "/components/sources/vcanvassource.md",
            "/components/sources/vgeosource.md",
            "/components/sources/vimagesource.md",
            "/components/sources/vvideosource.md",
            "/components/sources/vvectorsource.md",
            "/components/sources/vrastersource.md",
            "/components/sources/vrasterdemsource.md",
          ],
        },
      ],
    },
  ],
};
