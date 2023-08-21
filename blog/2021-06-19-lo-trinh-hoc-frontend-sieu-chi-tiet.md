---
slug: lo-trinh-hoc-frontend-sieu-chi-tiet
title: Lộ trình học Frontend cho người mới bắt đầu siêu chi tiết 🎯
author: Hậu Nguyễn
author_title: Founder of Easy Frontend
author_url: https://github.com/paulnguyen-mn
author_image_url: https://avatars3.githubusercontent.com/u/31444102?s=400&u=c545a527aa31843e1361462e410c0f51863e8e26&v=4
image: https://res.cloudinary.com/easy-frontend/image/upload/v1624063424/blog/lo-trinh-fe_zzhxml.png
tags: [sharing, frontend developer]
---

Bạn mới bắt đầu học Frontend nhưng không biết phải bắt đầu từ đâu và học những gì? Hãy cùng mình đi qua bài blog này để có thể hình dung ra mình sẽ cần học những gì nhé 😉

![How to become a frontend developer](https://res.cloudinary.com/easy-frontend/image/upload/v1624063424/blog/lo-trinh-fe_zzhxml.png)

> Source: [https://www.geeksforgeeks.org/how-to-become-a-front-end-developer/](https://www.geeksforgeeks.org/how-to-become-a-front-end-developer/)

<!-- truncate-->

Mục tiêu của bài chia sẻ là định hướng được cho những bạn đang không biết bắt đầu tư đâu và học cái gì để trở thành một Frontend Developer.

<div
  style={{
    position: "relative",
    width: "100%",
    paddingBottom: "52.5%",
  }}
>
  <iframe
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      width: "100%",
      height: "100%",
    }}
    width="560"
    height="315"
    src="https://www.youtube.com/embed/t55MU1e1k8Q"
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>

<br />

**Agenda**

1. `30-45p` Chia sẻ về lộ trình học cho người mới bắt đầu
2. `05-10p` Một số cập nhật từ kênh Easy Frontend
3. `15-30p` Giao lưu hỏi đáp


:::note LƯU Ý

- Bài chia sẻ này chỉ mang tính liệt kê, không đi vào chi tiết của từng mục nội dung.
- Bài chia sẻ dựa trên kinh nghiệm thực tế của cá nhân. Bạn có thể tham khảo thêm tại https://roadmap.sh/

:::

## Chia sẻ về lộ trình học cho người mới bắt đầu

Các mục chính bạn cần chinh phục

1. Kiến thức `nền tảng` của developer
2. `HTML`: layout có element nào?
3. `CSS`: render layout như thế nào?
4. `Javascript/ES6`: ngôn ngữ lập trình
5. `ReactJS`/Angular/VueJS: thư viện/framework của JS để xây dựng UI hiệu quả
6. `NextJS`: hỗ trợ SSR/SSG
7. `Deployment`: hiểu cách deploy một ứng dụng Frontend lên server.
8. `Tools`: các tools nên biết vì dev hay sử dụng
9. `Soft skills`: các kĩ năng phụ cần thiết khác

:::tip Trước khi bắt đầu, mình có một số lưu ý chung:

- Ngành nào cũng có cái khó của nó.
- Phải siêng năng, cày cuốc thì mới master được skills chứ không phải học xíu là được.
- Practice makes perfect.
- Học liên tục cho đến khi bạn không muốn làm trong ngành này nữa 🤣
- Những mục liệt kê trong tài liệu này ko phải là tất cả, mà chỉ là những điểm chính.

:::


## 1. Kiến thức nền tảng của developer

- `What`: nền tảng của một developer
- `Why`: nền tảng chắc --> phát triển nhanh và bền vững
- `When`: học ngay từ đầu
- `Who`: bất cứ ai muốn trở thành developer
- `How`: xem bên dưới

---

- Tư duy / kĩ thuật lập trình (phần này có thể move xuống phần Javascript)
- Kiến trúc tổng quan của một hệ thống website / phần mềm.
- Quy trình phát triển phần mềm
- Cơ bản về Internet: Domain, Hosting, DNS, http vs https, ...
- Các vai trò trong một dự án thực tế.
- ... (còn nhiều nữa 😜)

## 2. HTML/HTML5

- `What`: khai báo nội dung cần render lên giao diện
- `Why`: bắt buộc học a êi, ko thôi sao render lên giao diện giờ 😅
- `When`: học đầu tiên trong lộ trình này.
- `Who`: FE developers
- `How`: xem bên dưới

---

`IMPORTANT`: biết khi nào dùng thẻ nào + khả năng phân tích cây HTML

- Tìm hiểu và thử các tag khác nhau của HTML và mỗi tag có những attributes nào.
- Học cách phân tích từ file design --> cây HTML
- Làm sao biết một website sử dụng HTML5?
- Semantic tags / Semantic Layout
- Tính đúng / sai của một layout --> thật ra chỉ là tương đối, hợp lý là được.
- SEO cơ bản với các thẻ meta tags
- SEO: hiển thị rich-data khi search google với google structured data

`OUTPUT`: Đưa file design bất kì, phân tích được cây HTML.

**Tóm tắt một số tags**

| #   | Group     | Tags                                             |
| --- | --------- | ------------------------------------------------ |
| 1   | Base      | html, head, body, link, meta, script             |
| 2   | Headings  | h1, h2, h3, h4, h5, h6                           |
| 3   | Paragraph | p                                                |
| 4   | Grouping  | section, div, span                               |
| 5   | Semantic  | header, main, footer, article, nav, section, ... |
| 6   | Lists     | ul > li, ol > li                                 |
| 7   | Form      | form, input, textarea                            |
| 8   | Table     | table, thead, tbody, tfood, th, tr, td           |
| 9   | Embed     | iframe                                           |
| 10  | Media     | img, video, audio                                |

🌐 Một số links tham khảo:

- Tra cứu tags: [https://htmlreference.io/](https://htmlreference.io/)
- Generate meta tags: [https://metatags.io/](https://metatags.io/)
- Interneting Is Hard: [https://www.internetingishard.com/html-and-css/](https://www.internetingishard.com/html-and-css/)
- Khoá học HTML/CSS cơ bản đến nâng cao của anh Tuấn (Evondev): [https://kt.city/course/khoa-hoc-html-css-evondev](https://kt.city/course/khoa-hoc-html-css-evondev)

## 3. CSS/CSS3

- `What`: quyết định các nội dung trên HTML trông giống như thế nào
- `Why`: cần UI đẹp a êi, xấu quá ko ai thèm dùng =))
- `When`: học cùng với HTML để tạo ra các giao diện website khác nhau
- `Who`: FE developers
- `How`: xem bên dưới

---

```css
body {
  background-color: white;
}

/* 

selector {
  property-name: property-value;
}

*/
```

`IMPORTANT`: Selectors + Box Model + Flexbox

- Có bao nhiêu cách để chèn CSS vào HTML? Và thứ tự ưu tiên ra sao?
- Selectors: có những loại nào, sử dụng ra sao?
- Properties & Order: có những properties nào và chia thành mấy nhóm?
- Specificity: khi có conflict về CSS thì giải quyết ra sao?
- Transition: chuyển đổi trạng thái mượt mà
- Animation: làm hiệu ứng đơn giản
- CSS Unit: px, em, rem, %, vh, vw, ...
- Cách custom form control: checkbox, radio hoặc dropdown, ...
- Master làm layout với Flexbox / CSS Grid.
- Pre-compile CSS: SASS/SCSS --> viết CSS nhanh hơn, tiện hơn và lợi hại hơn =))
- CSS Stacking Context
- Kết hợp với HTML, thực hành làm giao diện tĩnh cho các website khác nhau (vd như [https://screenlane.com/](https://screenlane.com/))

`OUTPUT`: Làm được kính thưa các loại giao diện khác nhau.

```css
.selector {
  /* Positioning */
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  /* Display & Box Model */
  display: inline-block;
  overflow: hidden;
  box-sizing: border-box;

  width: 100px;
  height: 100px;
  padding: 10px;
  border: 10px solid #333;
  border-radius: 5px;
  margin: 10px;

  /* Color */
  background: #000;
  color: #fff

  /* Text */
  font-family: sans-serif;
  font-size: 16px;
  font-weight: bold;
  line-height: 1.4;
  text-align: right;

  /* Other */
  cursor: pointer;
  transition: all .25s;
  animation-name: loop;
}
```

🌐 Một số links tham khảo:

- Tra cứu tags: [https://htmlreference.io/](https://htmlreference.io/)
- CSS Properties Order: [https://css-tricks.com/poll-results-how-do-you-order-your-css-properties/](https://css-tricks.com/poll-results-how-do-you-order-your-css-properties/)
- CSS Tricks: [https://css-tricks.com/](https://css-tricks.com/)
- Game Flexbox Froggy: [https://flexboxfroggy.com/](https://flexboxfroggy.com/)
- Thư viện animate.css: [https://animate.style/](https://animate.style/)
- Flexbox Playground: [https://the-echoplex.net/flexyboxes/](https://the-echoplex.net/flexyboxes/)
- Interneting Is Hard: [https://www.internetingishard.com/html-and-css/](https://www.internetingishard.com/html-and-css/)
- Khoá học HTML/CSS cơ bản đến nâng cao của anh Tuấn (Evondev): [https://kt.city/course/khoa-hoc-html-css-evondev](https://kt.city/course/khoa-hoc-html-css-evondev)

## 4. Javascript/ES6

- `What`: ngôn ngữ lập trình duy nhất mà trình duyệt có thể hiểu
- `Why`: bắt buộc a êi 🤣
- `When`: sau khi học xong html/css
- `Who`: FE developers
- `How`: xem bên dưới

---

`IMPORTANT`: kĩ thuật lập trình + core concepts của JS

Trong JS, chia thành 2 phần lớn:

1. Ngôn ngữ lập trình Javascript
2. Quản lý DOM và xử lý sự kiện trên trình duyệt

### 4a. Ngôn ngữ lập trình Javascript

- JS là gì?
- JS có thể làm được gì?
- Dùng cái gì để code JS?
- Làm sao chạy được code JS?
- Các kiểu dữ liệu có trong JS
- Các bài toán xử lý Number, String, Array, Object.
- Closure là gì? Và tại sao lại cần nó?
- `this` trong js
- ES6 là gì?
- Giải thuật cơ bản:
  - Tìm kiếm, lọc, thêm, xoá, sửa.
  - Stack vs Queue là gì
  - Luyện tập code các bài toán lập trình: [https://nguyenvanhieu.vn/1000-bai-tap-lap-trinh-c-cua-thay-khang/](https://nguyenvanhieu.vn/1000-bai-tap-lap-trinh-c-cua-thay-khang/)
  - Luyện tập giải các giải thuật cơ bản với Edabit: [https://edabit.com/](https://edabit.com/)
- Lập trình bất đồng bộ trong javascript
  - Event Loop trong js
  - Microtask và Macrotask
  - Phân biệt setTimeout() vs setInterval()
  - Promise
  - Async/Await
  - Generators
- Làm việc với REST APIs
- Đọc thêm về các concepts khác trong JS: [https://github.com/leonardomso/33-js-concepts](https://github.com/leonardomso/33-js-concepts)
- Coding convention: [https://github.com/airbnb/javascript](https://github.com/airbnb/javascript)

`OUTPUT`: Thành thạo sử dụng JS để giải quyết các bài toán lập trình.

### 4b. Quản lý DOM và xử lý sự kiện trên trình duyệt

- DOM là gì?
- Quản lý DOM:
  - Tìm kiếm element
  - Thêm element
  - Xoá element
  - Cập nhật element (attributes, content, ...)
  - Clone element
- Quản lý sự kiện
  - Có những loại sự kiện nào? click, scroll, resize, submit, ...
  - Event bubbling và Capturing?
- Quản lý form
  - Xử lý form validation
  - Xử lý form submission
  - Làm sao lấy được tất cả values của các controls
  - Reset form
- Quản lý navigation
  - Làm sao di chuyển từ trang này sang trang khác bằng javascript
  - Query params là gì?
- Quản lý thư viện
  - Làm sao để thêm các thư viện javascript khác vào website của mình
  - script async, defer khác nhau thế nào?
- Thế nào là Repaint vs Reflow?

`OUTPUT`: Xây dựng các web application đơn giản sử dụng javascript thuần. Lúc này có thể kết hợp tìm hiểu một thư viện UI như Bootstrap để sử dụng làm giao diện nhanh chóng, đơn giản.

🌐 Một số links tham khảo:

- Demo đồ án môn javascript: [https://post-ui.vercel.app/](https://post-ui.vercel.app/)
- Javascript Info: [https://javascript.info/](https://javascript.info/)
- Event Loop Visualizer: [https://www.jsv9000.app/](https://www.jsv9000.app/)
- Luyện giải thuật cơ bản với Edabit: [https://edabit.com/](https://edabit.com/)
- Luyện giải thuật khó hơn với LeetCode: [https://leetcode.com/](https://leetcode.com/)
- You don't know JS: [https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/get-started/README.md](https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/get-started/README.md)
- 33 JS Concepts: [https://github.com/leonardomso/33-js-concepts](https://github.com/leonardomso/33-js-concepts)
- JS Resources: [https://www.javascript.com/resources](https://www.javascript.com/resources)
- John Resig - Advanced JS: [https://johnresig.com/apps/learn/](https://johnresig.com/apps/learn/)

## 5. `ReactJS` / Angular / VueJS

- `What`: thư viện / framework để xây dựng UI một cách nhanh chóng, hiệu quả
- `Why`: code nhanh, đơn giản, hiệu quả hơn hẳn so với việc phải code chay với JS thuần
- `When`: sau khi học Javascript/ES6 cơ bản
- `Who`: FE developers
- `How`: xem bên dưới

---

`IMPORTANT`: phân tích cây component + life cycle

- **Cơ bản**
  - JSX là gì?
  - Virtual DOM là gì?
  - Cách ReactJS hoạt động?
  - Component là gì?
  - Props vs State
  - Functional component vs Class component
  - Component Life Cycle
  - Hooks vs Custom hooks
  - Context
  - Routings
  - HOC
  - ErrorBoundaries
- **Các modules** trong một dự án thực tế
  - Routing:
    - Lib: `react-router-dom`
    - How to setup nested routings?
    - Phân biệt khi có và không có Switch
    - Lazy load module
  - State Management:
    - Lib: `Redux`
    - Priority: `Component State` -> `Redux` / RecoilJS
    - `Redux Thunk` / Redux Saga
  - Form Management:
    - Lib: `react-hook-form`
    - Validation: `yup`
    - How to structure form module?
  - API Module
    - Http Client: `axios`
    - Setup api files + axiosClient
  - UI Library
    - Reactstrap
    - Material UI
    - Ant Design
    - Styled Component
    - Tự viết bằng SCSS.
- Typescript (good to have): [https://basarat.gitbook.io/typescript/](https://basarat.gitbook.io/typescript/)

`OUTPUT`: Làm một dự án hoàn chỉnh bằng ReactJS kết hợp với các thư viện cần thiết.

🌐 Một số links tham khảo:

- Để biết cách tổ chức các modules trên, tham khảo Khoá học ReactJS cho người mới bắt đầu của mình trên Udemy, link giảm giá [https://course.ezfrontend.com/reactjs](https://course.ezfrontend.com/reactjs)
- Tranh docs chính thức của ReactJS: [https://reactjs.org/](https://reactjs.org/)
- Redux Toolkit: [https://redux-toolkit.js.org/](https://redux-toolkit.js.org/)
- Redux Saga: [https://redux-saga.js.org/](https://redux-saga.js.org/)
- ...

## 6. NextJS

- `What`: react framework với nhiều tính năng xịn xò cần thiết cho một website.
- `Why`: có hỗ trợ SEO, điều cần thiết cho landing pages, blogs, ...
- `When`: sau khi nắm được reactjs
- `Who`: FE developers
- `How`: xem bên dưới

---

`IMPORTANT`: Phân biệt SSR/SSG/CSR và File-System Routings

- Xem thêm tại: [https://nextjs.org/](https://nextjs.org/)
- Học NextJS: [https://nextjs.org/learn/basics/create-nextjs-app](https://nextjs.org/learn/basics/create-nextjs-app)

`OUTPUT`: Làm được các trang landing page, blogs có hỗ trợ SEO.

## 7. Deployment

- `What`: kĩ năng deploy website lên online
- `Why`: chia sẻ website của bạn tới mọi người
- `When`: sau khi code xong website =))
- `Who`: FE developers
- `How`: xem bên dưới

---

- `EASY` Deploy đơn giản và nhanh chóng với [Vercel](https://vercel.com/), dùng cho JAM stack
- `MIDDLE` Nếu muốn support cả NodeJS server thì dùng [heroku](https://heroku.com/)
- `HARD` Còn nếu muốn toàn quyền quyết định thì dùng VPS 🤣

## 8. Tools

- `What`: các công cụ hỗ trợ cho developer
- `Why`: buộc phải dùng 🤣 nên phải biết và master nó để phục vụ công việc
- `When`: trước và trong khi đi làm
- `Who`: developers
- `How`: xem bên dưới

---

- Git
- `Github`/Gitlab/Bitbucket
- Terminal: vim, zsh, ...
- Code editor: `VSCode`
- Task management: `Trello` / Jira
- `Chrome devtools` for debugging
- Chat: `Slack` / Discord / ...
- Google Search
- `Figma` / Sketch / Photoshop
- Online editor để dễ dàng share code hoặc demo nhanh: CodeSandbox, Codepen, ...

## 9. Soft skills

- `What`: kĩ năng mềm bổ trợ cho developer
- `Why`: tăng năng suất, hiệu quả công việc --> nhiều tiền 😜
- `When`: trong khi làm việc
- `Who`: developers
- `How`: xem bên dưới

---

- `Tiếng Anh`: lưu loát đọc, nghe và nói. Viết ở mức cơ bản cũng được.
- Hiểu `tâm lý` chung của từng vai trò trong dự án.
- Cách `giao tiếp` với các vai trò khác nhau trong dự án.
- Quản lý `thời gian` và công việc để cân bằng work-life.
- Quản lý `stress` vì ngành này rất stress 🤣
- Khả năng `học hỏi`, nhanh nhạy với công nghệ mới.
- `Luôn open để tiếp thu` từ người khác vì ngành này có nhiều cái lạ lắm, mình hk biết hết đâu =))

## Tạm kết

Ngôi nhà vững chắc xuất phát từ nền móng kiên cố.

Sự nghiệp lập trình của bạn cũng vậy, muốn đi được lâu dài và phát triển nhanh, thì nhớ phải đầu tư thật kĩ vào kiến thức nền tảng. Vì khi đó bạn mới học những thứ cao hơn một cách nhanh chóng và dễ dàng.

Hi vọng bài chia sẻ mang lại giá trị cho bạn.

Chúc bạn thành công nhé! 🎉

---

🌐 &nbsp;Kết nôi với mình để có những cập nhật mới nhất nhé:

- Nhớ like và share ủng hộ kênh phát triển: https://www.youtube.com/easyfrontend
- Follow mình trên Facebook cá nhân: https://facebook.com/nvhauesmn
- Connect trên LinkedIn: https://www.linkedin.com/in/haunguyenmn/

---

✅ &nbsp;Nếu bạn muốn có những quyền lợi ưu tiên trên kênh Easy Frontend:

- Có badge và emoji riêng
- Xem trước videos chưa public.
- Xem videos chỉ dành riêng cho FAN CỨNG
- Đọc được các status/post chỉ dành riêng cho FAN CỨNG.

Đăng ký FAN CỨNG tại đây [https://youtube.com/easyfrontend/join](https://youtube.com/easyfrontend/join) chỉ với `60k/1tháng`

Đây cũng là cơ hội đóng góp vào sự phát triển của kênh, nếu bạn muốn có thêm nhiều nội dung hơn nữa thì hãy đăng ký làm FAN CỨNG để mình có điều kiện dành nhiều thời gian hơn cho kênh nhé 😉

---

🎁 &nbsp;Khoá học ReactJS trên Udemy, truy cập link này để có mã giảm giá 25% https://course.ezfrontend.com/reactjs
