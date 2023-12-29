const path = require('path')

module.exports = {
  title: 'Easy Frontend',
  tagline: 'Code xịn hơn mỗi ngày',
  url: 'https://ezfrontend.com',
  baseUrl: '/',
  favicon: 'img/easy-favicon.png',
  organizationName: 'paulnguyen-mn', // Usually your GitHub org/user name.
  projectName: 'easy-frontend', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'EASY FRONTEND',
      logo: {
        alt: 'easy frontend',
        src: 'img/easy-favicon.png',
      },
      items: [
        {
          to: 'docs/tai-lieu-tham-khao-html-css',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        { to: 'blog', label: 'Blog', position: 'left' },
        {
          href: 'https://course.ezfrontend.com/javascript',
          label: 'Khoá học Javascript',
          position: 'right',
        },
        {
          href: 'https://course.ezfrontend.com/reactjs',
          label: 'Khóa học NextJS',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Blogs',
          items: [
            {
              label: 'Lộ trình học Frontend cho người mới bắt đầu siêu chi tiết 🎯',
              to: 'blog/lo-trinh-hoc-frontend-sieu-chi-tiet',
            },
            {
              label: 'Bí kíp cho buổi phỏng vấn ReactJS thành công',
              to: 'blog/bi-kip-phong-van-reactjs-thanh-cong',
            },
          ],
        },
        {
          title: 'Kết nối',
          items: [
            {
              label: 'Facebook cá nhân',
              href: 'https://www.facebook.com/nvhauesmn',
            },
            {
              label: 'Hỏi đáp với Easy Frontend',
              href: 'https://roadmap.ezfrontend.com/faq',
            },
            {
              label: 'Youtube',
              href: 'https://www.youtube.com/easyfrontend?sub_confirmation=1',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/paulnguyen-mn',
            },
          ],
        },
        {
          title: 'Khoá học',
          items: [
            {
              label: 'Javascript từ cơ bản đến nâng cao 🔥',
              to: 'https://course.ezfrontend.com/javascript',
            },
            {
              label: 'Playlist NextJS toàn tập có dự án mẫu 🎉',
              href: 'https://course.ezfrontend.com/nextjs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Easy Frontend. Built with Docusaurus.`,
    },
    prism: {
      theme: require('prism-react-renderer/themes/dracula'),
      darkTheme: require('prism-react-renderer/themes/dracula'),
    },
    // announcementBar: {
    //   id: "support_us", // Any value that will identify this message.
    //   content:
    //     'We are looking to revamp our docs, please fill <a target="_blank" rel="noopener noreferrer" href="#">this survey</a>',
    //   backgroundColor: "#fafbfc", // Defaults to `#fff`.
    //   textColor: "#091E42", // Defaults to `#000`.
    // },
    algolia: {
      // The application ID provided by Algolia
      appId: 'O8FZ47847P',

      // Public API key: it is safe to commit it
      apiKey: '68b92c43d73bf17c8eff885163edcf3b',

      indexName: 'ezfrontend',

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      externalUrlRegex: 'github\\.com|course\\.ezfrontend\\.com',

      // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
      // replaceSearchResultPathname: {
      //   from: '/docs/', // or as RegExp: /\/docs\//
      //   to: '/',
      // },

      // Optional: Algolia search parameters
      // searchParameters: {},

      // Optional: path for search page that enabled by default (`false` to disable it)
      // searchPagePath: 'search',

      //... other Algolia params
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // editUrl: 'https://github.com/paulnguyen-mn/easy-frontend',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // editUrl: 'https://github.com/paulnguyen-mn/easy-frontend',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-EE81N6MK56',
        },
      },
    ],
  ],
  plugins: [path.resolve(__dirname, 'plugins', 'add-fb-chat')],
}
