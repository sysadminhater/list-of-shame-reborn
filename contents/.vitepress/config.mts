import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "List of Shame MCVN",
  description: "Danh sách những vật (người, server, dự án hoặc bất cứ thứ gì) gây tranh cãi trong cộng đồng Minecraft Việt Nam. Được lấy cảm hứng từ List Of Shame MCVN (Last update: 3 năm trước) và sẽ được cập nhật liên tục.",
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/logo.png'
      }
    ],
    [
      'link',
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' }
    ],
    [
      'link',
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
    ],
    [
      'link',
      { href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap', rel: 'stylesheet' }
    ],
    [
      'style',
      {},
      `
        body {
          font-family: Montserrat, sans-serif;
        }
      `
    ]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',

    nav: [
      //{ text: 'Home', link: '/' },
      //{ text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Thông tin',
        items: [
          { text: 'Chào mừng', link: '/welcome' },
          { text: 'Đóng góp', link: '/contribution' }
        ]
      },
      {
        text: 'Hosting/VPS',
        items: [
          { text: 'Summerhost', link: '/hosting-vps/summerhost' },
          { text: 'Devcloud', link: '/hosting-vps/devcloud' }
        ]
      },
      {
        text: 'Plugins/Mods',
        items: [
          { text: 'Các plugin giảm lag', link: '/plugins-mods/antilag-plugins' },
          { text: 'Cracked Plugins', link: '/plugins-mods/cracked-plugins' }
        ]
      },
      {
        text: 'Lừa đảo',
        items: [
          { text: 'Nexus Studio', link: '/scammers/nexus.md' }
        ]
      }
    ],

    socialLinks: [
      //{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    search: {
      provider: 'local'
    },

    lastUpdated: {
      text: 'Cập nhật lần cuối lúc',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    }
  },
  lastUpdated: true
})
