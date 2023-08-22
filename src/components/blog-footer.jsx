import React from "react";

export default function BlogFooter() {
  const itemList = [
    {
      id: 1,
      label: "🔥 Khóa học Javascript",
      url: "https://course.ezfrontend.com/javascript",
    },
    {
      id: 2,
      label: "🎁 Khoá học ReactJS",
      url: "https://course.ezfrontend.com/reactjs",
    },
    {
      id: 3,
      label: "🎯 Khóa học NextJS",
      url: "https://course.ezfrontend.com/nextjs",
    },
  ];

  return (
    <div className="blog-footer" style={{ margin: "20px 0" }}>
      <hr />

      <p style={{ marginBottom: 10 }}>
        <strong>Easy Frontend</strong> - Code xịn hơn mỗi ngày
      </p>

      <ul>
        {itemList.map((item) => (
          <li key={item.id}>
            {item.label}: <a href={item.url}>{item.url}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
