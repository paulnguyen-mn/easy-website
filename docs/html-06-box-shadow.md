---
id: html-06-box-shadow
title: Thực hành box shadow và background 🎉
sidebar_label: Bài 06 - Box shadow
image: https://images.unsplash.com/photo-1592439162403-e2ba684a9cd6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80
---

Nội dung chủ yếu của ngày hôm nay là cho mọi người có cơ hội được cùng nhau thực hành phân tích layout cũng như làm CSS để ra được layout như mong muốn. Kèm theo đó là một số ví dụ hay sử dụng box-shadow và background.

<!--truncate-->

## Hoạt động nhóm để tạo ra một layout cho sẵn

- Thời gian: `20 - 30p`
- Nội dung: 
  - Phân tích cây HTML 
  - Chuyển đổi cây HTML thành code 
  - Bổ sung CSS để ra được layout như hình mẫu
  - Deploy online lên surge.sh

## Hướng dẫn setup một website từ đầu 

### 1. Setup folder structure

```sh
root
|__ images # folder chứa tất cả hình ảnh của project
|__ css
|  |__ main.css # nơi chứa global CSS
|  |__ header.css # chứa css của phần header
|  |__ footer.css # chứa css của phần footer
|  |__ about.css # chứa css của trang about
|
|__ index.html # trang Home
|__ about.html # trang About
|__ ...
```

### 2. Setup Global CSS 

- Danh sách các thuộc tính CSS có tính kế thừa: https://stackoverflow.com/questions/5612302/which-css-properties-are-inherited

```css title="css/main.css"
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  line-height: 1.5;
  color: #444;
}

ul {
  list-style-type: none;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
}
```

:::note

- Đừng dùng `font-family` ở trong universal selector `* {}` nhé, hãy đặt trong thẻ `body` vì nó có tính kế thừa. 
- Font size của body tùy thuộc vào loại website mà bạn đang làm, có thể là `12px`, `14px` hay `16px`.
- Font-family liệt kê nhiều loại font, và cái cuối cùng trong danh sách là loại font đảm bảo luôn luôn có.

:::


### 3. Bắt đầu làm HTML Markup

- Phân tích cây HTML như đã học trên lớp.
- Đặt tên class cho thẻ sử dụng quy tắc `BEM`.
- Đọc thêm về `BEM` ở đây:
  - Bài viết giới thiệu về BEM của evondev: https://evondev.com/cach-dat-ten-trong-css/
  - Tài liệu chính thức về BEM: http://getbem.com/


### 4. Thêm CSS cho từng section một

- Liệt kê các selectors cần styles trước.
- Sau đó cứ đi từ trên xuống dưới, thêm CSS cho từng phần một.
- Nhớ phân biệt cái nào dùng `padding` hay `margin`.
- Dùng `flexbox` đơn giản để layout hàng ngang.
- Đọc thêm về flexbox: https://css-tricks.com/snippets/css/a-guide-to-flexbox/

## Tìm hiểu về box shadow 

- Cú pháp của ông thần box-shadow
- Một vài ví dụ vè box-shadow
- Làm vòng tròn goal bằng box-shadow
- Tham khảo thêm cách làm Captain Ameria Shield with pure CSS: https://codepen.io/afonsopacifer/pen/YPEmoN
- Video về box-shadow của evondev: https://youtu.be/UgfHxWLl2rg

```css {8-8} title="css/about.css"
.goal {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 150px auto;

  background-color: #ff2a6b;
  box-shadow: 0 0 0 20px white, 0 0 0 40px #ff2a6b, 0 0 0 60px white, 0 0 0 80px #ff2a6b;
}
```

## Một vài ví dụ hay sử dụng background

Tìm hiểu về các thuộc tính khác nhau của background 
- background-image
- background-repeat
- background-size
- background-position 
- background-attachment
- background-color
- ...

### Tạo hiệu ứng parallax với background-attachment: fixed;

```css {8-8} title="css/about.css"
.hero {
  height: 300px;

  background-image: url(https://images.unsplash.com/photo-1596446295382-417aa518527d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
}
```


### Tách từng phần hình ảnh trên background qua ví dụ lá cờ quốc gia

```html title="about.html"
<section>
  <ul class="flags">
    <li class="flag flag-ad">AD</li>
  </ul>
</section>
```


```css title="css/about.css"
.flags {
  padding: 30px 20px;
}

.flag {
  display: inline-block;
  width: 205px;
  height: 135px;

  background-image: url(../images/flags.jpg);
  background-size: auto;
}

.flag-ad {
  background-position: -205px 0;
}
```

## Nguồn tài liệu tham khảo

- Drive chứa code trên lớp: https://drive.google.com/file/d/1KJIQJNxGsKMQPyw8kLBgs_SeZrbBQV2K/view?usp=sharing
- Box shadow: https://cssreference.io/property/box-shadow/
- Bài viết giới thiệu về BEM của evondev: https://evondev.com/cach-dat-ten-trong-css/
- Tài liệu chính thức về BEM: http://getbem.com/
- Captain Ameria Shield with pure CSS: https://codepen.io/afonsopacifer/pen/YPEmoN
- Video về box-shadow của evondev: https://youtu.be/UgfHxWLl2rg