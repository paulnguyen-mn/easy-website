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
        {
          href: "https://course.ezfrontend.com/javascript",
          label: "Khoá học Javascript",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Blogs",
          items: [
            {
              label:
                "Lộ trình học Frontend cho người mới bắt đầu siêu chi tiết 🎯",
              to: "blog/lo-trinh-hoc-frontend-sieu-chi-tiet",
            },
            {
              label: "Bí kíp cho buổi phỏng vấn ReactJS thành công",
              to: "blog/bi-kip-phong-van-reactjs-thanh-cong",
            },
          ],
        },
        {
          title: "Kết nối",
          items: [
            {
              label: "Facebook cá nhân",
              href: "https://www.facebook.com/nvhauesmn",
            },
            {
              label: "Facebook Fanpage",
              href: "https://www.facebook.com/learn.easyfrontend",
            },
            {
              label: "Facebook Group",
              href: "https://www.facebook.com/groups/easyfrontend",
            },
            {
              label: "Youtube",
              href: "https://www.youtube.com/easyfrontend?sub_confirmation=1",
            },
            {
              label: "GitHub",
              href: "https://github.com/paulnguyen-mn",
            },
          ],
        },
        {
          title: "Khoá học",
          items: [
            {
              label: "Javascript từ cơ bản đến nâng cao 🔥",
              to: "https://course.ezfrontend.com/javascript",
            },
            {
              label: "ReactJS cho người mới bắt đầu 🎁",
              href: "https://course.ezfrontend.com/reactjs",
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
    //   id: "support_us", // Any value that will identify this message.
    //   content:
    //     'We are looking to revamp our docs, please fill <a target="_blank" rel="noopener noreferrer" href="#">this survey</a>',
    //   backgroundColor: "#fafbfc", // Defaults to `#fff`.
    //   textColor: "#091E42", // Defaults to `#000`.
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
