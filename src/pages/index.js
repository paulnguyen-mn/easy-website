import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: <>Tài liệu kĩ thuật</>,
    imageUrl: "img/undraw_docusaurus_mountain.svg",
    description: (
      <>
        Nơi chia sẻ các bài hướng dẫn về kĩ thuật được sử dụng nhiều trong dự án
        thực tế sẽ được mình tổng hợp tại đây
      </>
    ),
  },
  {
    title: <>Blog kiến thức</>,
    imageUrl: "img/undraw_docusaurus_tree.svg",
    description: (
      <>
        Chia sẻ về những kiến thức xung quanh cuộc sống lập trình viên, vui,
        buồn, sướng khổ, đủ mùi vị cuộc sống lập trình viên 🙂
      </>
    ),
  },
  {
    title: <>Khoá học Frontend</>,
    imageUrl: "img/undraw_docusaurus_react.svg",
    description: (
      <>
        Sắp tới sẽ có những khoá học do mình biên soạn và thiết kế nhằm giúp các
        bạn nắm vững kiến thức nền tảng của Frontend để có thể làm việc tốt hơn
        😍
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout
      title="Trang chủ"
      description="Nơi kiến thức Frontend được chia sẻ một cách đơn giản, dễ hiểu và đặc biệt là vui 😍"
      image="https://res.cloudinary.com/easy-frontend/image/upload/v1594865704/easyfrontend/easy-frontend-banner_a40d3f.jpg"
    >
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("blog/")}
            >
              Bắt đầu nào
            </Link>
          </div>
        </div>
      </header>

      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
