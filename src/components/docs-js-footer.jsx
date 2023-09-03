import React from "react";

export default function DocsJSFooter() {
  const itemList = [
    {
      id: 1,
      label: "👉 Học ở đâu?",
      value: "Chỉ có trên Udemy",
    },
    {
      id: 2,
      label: "👉 Có nhóm hỗ trợ không?",
      value: "Có nhóm discord hỗ trợ trong quá trình học.",
    },
    {
      id: 3,
      label: "👉 Có hỗ trợ thanh toán qua MoMo hoặc ngân hàng không?",
      value: "Có bạn nhé, ping mình qua Messenger nhen",
    },
  ];

  return (
    <div className="blog-footer" style={{ margin: "20px 0" }}>
      <hr />

      <p style={{ marginBottom: 10 }}>
        Đây là tài liệu của{" "}
        <a href="https://course.ezfrontend.com/javascript">
          Khóa học Javascript cho người mới bắt đầu.
        </a>
      </p>

      <ul>
        {itemList.map((item) => (
          <li key={item.id}>
            {item.label} --&gt; {item.value}
          </li>
        ))}
      </ul>
    </div>
  );
}
