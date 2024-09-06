import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'en-US',
  title: 'Quanfu',
  description: 'My personal blog.',

  themeConfig: {
    nav: [
      { text: 'Example', link: '/example' },
      {
        text: 'JAVA',
        items: [{ text: 'Intruduction', link: '/java/intruduction' }],
      },

      // {
      //   text: 'Dropdown Menu',
      //   items: [
      //     { text: 'Item A', link: '/item-1' },
      //     { text: 'Item B', link: '/item-2' },
      //     { text: 'Item C', link: '/item-3' },
      //   ],
      // },

      // ...
      { text: 'About', link: '/about' }
    ],

    sidebar: [
      {
        // text: 'Guide',
        items: [
          { text: 'Example', link: '/example' },
          // ...
        ],
        
      },
      { text: 'About', link: '/about' }
    ],
  },
});
