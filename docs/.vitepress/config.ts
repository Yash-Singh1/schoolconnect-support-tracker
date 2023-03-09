import { defineConfig } from 'vitepress'

// Configuration for the VitePress documentation site
// @see https://vitepress.vuejs.org/reference/site-config
export default defineConfig({
  title: "SchoolConnect",
  description: "Documentation for the mobile application SchoolConnect",
  themeConfig: {
    // https://vitepress.vuejs.org/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Usage', link: '/faq' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    logo: {
      src: '/assets/logo.png'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Yash-Singh1/schoolconnect-support-tracker' }
    ]
  }
})
