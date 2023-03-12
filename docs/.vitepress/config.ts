import { defineConfig } from "vitepress";

// Configuration for the VitePress documentation site
// @see https://vitepress.vuejs.org/reference/site-config
export default defineConfig({
  title: "SchoolConnect",
  description: "Documentation for the mobile application SchoolConnect",
  base: "/schoolconnect-support-tracker/",

  head: [
    [
      "link",
      { rel: "icon", href: "/schoolconnect-support-tracker/favicon.ico" },
    ],
  ],

  themeConfig: {
    // https://vitepress.vuejs.org/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "FAQ", link: "/faq" },
      { text: "Features", link: "features" },
    ],

    sidebar: [
      {
        text: "Users",
        items: [
          { text: "FAQs", link: "/faq" },
          { text: "Features", link: "/features" },
          { text: "Contacts", link: "/contacts" },
          { text: "Admin Guide", link: "/admin" },
        ],
      },
      {
        text: "Developer",
        items: [
          { text: "Technology Stack", link: "/stack" },
          { text: "Branding Guidelines", link: "/branding" },
          {
            text: "Issue Tracker",
            link: "https://github.com/Yash-Singh1/schoolconnect-support-tracker/issues",
          },
          {
            text: "Storyboard",
            link: "https://translucent-marscapone-8f7.notion.site/c0ad09dfab0a445c97ed59c41bf617ef?v=ca94f7c03b004d0082cd1d7c68ce5e29",
          },
        ],
      },
    ],

    logo: {
      src: "https://raw.githubusercontent.com/Yash-Singh1/schoolconnect-support-tracker/main/docs/assets/logo.png",
    },

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/Yash-Singh1/schoolconnect-support-tracker",
      },
    ],
  },

  appearance: "dark",
});
