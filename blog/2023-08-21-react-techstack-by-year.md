---
slug: react-techstack-by-year
title: Tổng hợp thư viện sử dụng trong dự án React theo năm
author: Hậu Nguyễn
author_title: Founder of Easy Frontend
author_url: https://github.com/paulnguyen-mn
author_image_url: https://avatars3.githubusercontent.com/u/31444102?s=400&u=c545a527aa31843e1361462e410c0f51863e8e26&v=4
image: https://res.cloudinary.com/easy-frontend/image/upload/v1693708345/blog/react-libs-by-year_sairok.jpg
tags: [react, techstack by year]
draft: false
---

Công nghệ thay đổi quá nhanh, đôi khi khóa học chưa quay xong mà thư viện nó updates tè le làm nội dung không còn chính xác nữa haha. Mình cũng cố gắng thay đổi theo thời gian, nên viết blog này để note lại những thư viện mình đã dùng cho dự án React theo năm.

![Tổng hợp thư viện sử dụng trong dự án React theo năm](https://res.cloudinary.com/easy-frontend/image/upload/v1693708345/blog/react-libs-by-year_sairok.jpg)

<!-- truncate-->

:::caution Lưu ý 

Những thư viện mình liệt kê dưới đây là theo **cá nhân** của mình đã sử dụng trong dự án theo từng thời kỳ, nó không phải là best options của ngành nhé.

:::

## Overview

| Chủ đề           | 2020-2021                                                          | 2022-2023                                                   |
| :--------------- | :----------------------------------------------------------------- | :---------------------------------------------------------- |
| Form Management  | React Hook Form                                                    | React Hook Form                                             |
| Form Validation  | Yup                                                                | Yup                                                         |
| State Management | Redux Toolkit                                                      | React Query + Zustand                                       |
| Build tool       | [Create React App](https://create-react-app.dev/)                  | [Vite](https://vitejs.dev/)                                 |
| UI lib           | [Material UI v4](https://v4.mui.com/getting-started/installation/) | [MUI v5+](https://mui.com/material-ui/getting-started/)     |
| Style            | SCSS + [BEM](https://getbem.com/)                                  | JSX / [MUI System](https://mui.com/system/getting-started/) |

Scroll xuống tí, có thêm chi tiết nè 😊

## Form Management + Validation

Trước đây, mình có dùng Redux Form, Formik, kể từ ngày chuyển sang React Hook Form là mình từ bỏ 2 anh kia luôn.

- [Redux Form](https://redux-form.com/): quản lý form state sử dụng redux, cơ mà hầu hết các tình huống local state là đủ òi.
- [Formik](https://formik.org/): mình bị dính performance issue cho một cái form phức tạp, có tới 20-30 controls nên nó lag tung chảo ở development mode, qua prod thì nó đỡ hơn. Cơ mà mình cũng không ưng lắm.
- [React Hook Form](https://react-hook-form.com/): ngon lành, dễ sử dụng, ko bị performance issues, mình dùng tới bây giờ. Đi kèm với việc quản lý form, thì mình có dùng thêm [Yup](https://github.com/jquense/yup) để xử lý cho phần form validation.

Quản lý form là một trong những topic rất quan trọng, nó ảnh hưởng rất lớn tới dự án của mình. Setup đúng sẽ mang lại hiệu quả và không sợ khi làm với form, ngược lại sẽ là ác mộng mỗi lần đụng tới form.

## State Management

Một chủ đề quan trọng không kém là quản lý state, việc chọn lựa nơi lưu trữ state, thay đổi state không hợp lý có thể làm cho app của mình có nhiều bugs và khó mà xử lý triệt để. 

Mỗi thư viện quản lý state có một cách code khác nhau nên nếu mình cần thay đổi sau này sẽ dẫn tới code changes khá nhiều và phức tạp. Nên việc lựa chọn một thư viện quản lý state + giải pháp hợp lý là cần thiết ngay từ đầu.

- Trước đây thì mình dùng [Redux Toolkit](https://redux-toolkit.js.org/) cho việc quản lý state.
- Hiện tại mình đang dùng combo [react-query](https://tanstack.com/query/v3/) và [zustand](https://github.com/pmndrs/zustand), đơn giản và tiện lợi hơn theo trải nghiệm cá nhân của mình. Các dự án của mình cũng dẫn chuyển sang hướng tiếp cận này.


| #   | Phân loại state                 | Thư viện         | Mô tả                                                                  |
| --- | ------------------------------- | ---------------- | :--------------------------------------------------------------------- |
| 1   | Client State ➡️ **Local** State  | React.useState() | dữ liệu dùng cho một component hiện tại hoặc component con (<= 3 tầng) |
| 2   | Client State ➡️ **Global** State | zustand          | dữ liệu cần chia sẻ cho nhiều components ở nhiều nơi khác nhau         |
| 3   | **Server** State                | react-query      | dữ liệu trả về từ APIs                                                 |


:::tip Nguyên tắc đơn giản

1. Với server state --> dùng react-query
2. Với client state --> dùng local state cho đến khi cần global state

:::

Cảm ơn bạn đã dành thời gian xem blog của mình 🎉

<br/>

---

Easy Frontend - Code xịn hơn mỗi ngày
- 🔥 Khoá học Javascript: https://course.ezfrontend.com/javascript 
- 🎁 Khoá học ReactJS: https://course.ezfrontend.com/reactjs
- 🎯 Khóa học NextJS: https://course.ezfrontend.com/nextjs
- ❓ Quyền lợi khi tham gia [fan cứng](/blog/fan-cung-la-gi)?