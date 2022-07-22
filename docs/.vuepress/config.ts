import { defineUserConfig, defaultTheme } from "vuepress";
import { navbarEn, navbarZh, sidebarEn, sidebarZh } from "./configs";

export default defineUserConfig({
  locales: {
    "/": {
      lang: "en-US",
      title: "MapVue",
      description: "A well-packaged MapboxGL component library",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "MapVue",
      description: "一个封装比较全面的 MapboxGL 组件库",
    },
  },
  theme: defaultTheme({
    logo: "/images/map.png",
    docsDir: "docs",
    locales: {
      "/": {
        navbar: navbarEn,
        sidebar: sidebarEn,
        editLinkText: "Edit this page on GitHub",
      },
      "/zh/": {
        navbar: navbarZh,
        sidebar: sidebarZh,
        selectLanguageName: "简体中文",
        selectLanguageText: "选择语言",
        selectLanguageAriaLabel: "选择语言",
        tip: "提示",
        warning: "注意",
        danger: "警告",
        // 404 page
        notFound: [
          "这里什么都没有",
          "我们怎么到这来了？",
          "这是一个 404 页面",
          "看起来我们进入了错误的链接",
        ],
        backToHome: "返回首页",
      },
    },
  }),
});
