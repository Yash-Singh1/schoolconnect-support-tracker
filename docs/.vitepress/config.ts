import { defineConfig } from "vitepress";

// Configuration for the VitePress documentation site
// @see https://vitepress.vuejs.org/reference/site-config
export default defineConfig({
  title: "SchoolConnect",
  description: "Documentation for the mobile application SchoolConnect",
  base: '/schoolconnect-support-tracker/',
  themeConfig: {
    // https://vitepress.vuejs.org/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "FAQ", link: "/faq" },
      { text: "Features", link: "features" }
    ],

    sidebar: [
      {
        text: "Usage",
        items: [
          { text: "Frequently Asked Questions", link: "/faq" },
          { text: "Features", link: "/features" },
        ],
      },
      {
        text: "Developer",
        items: [
          { text: "Technology Stack", link: "/stack" },
          { text: "Branding Guidelines", link: "/branding" },
        ],
      },
    ],

    logo: {
      src: "./assets/logo.png",
    },

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/Yash-Singh1/schoolconnect-support-tracker",
      },
    ],
  },
});
