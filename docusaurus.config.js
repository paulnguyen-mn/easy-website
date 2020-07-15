module.exports = {
  title: 'Easy Frontend',
  tagline: 'Code xịn hơn mỗi ngày',
  url: 'https://ezfrontend.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'paulnguyen-mn', // Usually your GitHub org/user name.
  projectName: 'easy-frontend', // Usually your repo name.
  themeConfig: {
    gtag: {
      trackingID: 'UA-172756678-1',
    },
    navbar: {
      title: 'EASY FRONTEND',
      // logo: {
      //   alt: 'easy frontend',
      //   src: 'img/logo.svg',
      // },
      links: [
        // {
        //   to: 'docs/',
        //   activeBasePath: 'docs',
        //   label: 'Docs',
        //   position: 'left',
        // },
        { to: 'blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/paulnguyen-mn',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Tài liệu',
          items: [
            {
              label: 'Comming soon',
              to: 'docs/',
            },
          ],
        },
        {
          title: 'Cộng đồng',
          items: [
            {
              label: 'Facebook Fanpage',
              href: 'https://www.facebook.com/learn.easyfrontend',
            },
            {
              label: 'Nhóm trao đổi, hỏi bài về Easy Frontend',
              href: 'https://www.facebook.com/groups/easyfrontend',
            },
            {
              label: 'Kênh Youtube Easy Frontend',
              href: 'https://www.youtube.com/easyfrontend?sub_confirmation=1',
            },
          ],
        },
        {
          title: 'Khác',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/paulnguyen-mn',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Easy Frontend. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'home',
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
      },
    ],
  ],
};
