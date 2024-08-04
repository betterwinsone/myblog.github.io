import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/myblog/',
  title: "100sheng",
  description: "一个热爱技术和分享的知识者，一个有灵魂的技术博客",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '博客', link: '/catalogue' }
    ],

    sidebar: [
      {
        text: '后端技术',
        items: [
          { text: 'Golang', link: '/glang' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/betterwinsone' }
    ]
  }
})
