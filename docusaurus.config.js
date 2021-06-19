module.exports = {
  title: "Easy Frontend",
  tagline: "Code xịn hơn mỗi ngày",
  url: "https://ezfrontend.com",
  baseUrl: "/",
  favicon: "img/easy-favicon.png",
  organizationName: "paulnguyen-mn", // Usually your GitHub org/user name.
  projectName: "easy-frontend", // Usually your repo name.
  themeConfig: {
    gtag: {
      trackingID: "UA-172756678-1",
    },
    navbar: {
      title: "EASY FRONTEND",
      logo: {
        alt: "easy frontend",
        src: "img/easy-favicon.png",
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        { to: "blog", label: "Blog", position: "left" },
        {
          href: "https://youtube.com/easyfrontend/join",
          label: "Đăng ký Fan Cứng",
          position: "right",
        },
        {
          href: "https://course.ezfrontend.com/reactjs",
          label: "Khoá học ReactJS",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Hot blogs",
          items: [
            {
              label:
                "Lộ trình học Frontend cho người mới bắt đầu siêu chi tiết 🎯",
              to: "blog/lo-trinh-hoc-frontend-sieu-chi-tiet",
            },
            {
              label: "Bí kíp cho buổi phỏng vấn ReactJS thành công 🎉",
              to: "blog/bi-kip-phong-van-reactjs-thanh-cong",
            },
          ],
        },
        {
          title: "Cộng đồng",
          items: [
            {
              label: "Facebook Fanpage",
              href: "https://www.facebook.com/learn.easyfrontend",
            },
            {
              label: "Nhóm trao đổi, hỏi bài về Easy Frontend",
              href: "https://www.facebook.com/groups/easyfrontend",
            },
            {
              label: "Kênh Youtube Easy Frontend",
              href: "https://www.youtube.com/easyfrontend?sub_confirmation=1",
            },
          ],
        },
        {
          title: "Khác",
          items: [
            {
              label: "Blog",
              to: "blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/paulnguyen-mn",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Easy Frontend. Built with Docusaurus.`,
    },
    prism: {
      theme: require("prism-react-renderer/themes/dracula"),
      darkTheme: require("prism-react-renderer/themes/dracula"),
    },
    // announcementBar: {
    //   id: 'support_us', // Any value that will identify this message.
    //   content:
    //     'We are looking to revamp our docs, please fill <a target="_blank" rel="noopener noreferrer" href="#">this survey</a>',
    //   backgroundColor: '#fafbfc', // Defaults to `#fff`.
    //   textColor: '#091E42', // Defaults to `#000`.
    // },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // editUrl: 'https://github.com/paulnguyen-mn/easy-frontend',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // editUrl: 'https://github.com/paulnguyen-mn/easy-frontend',
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
