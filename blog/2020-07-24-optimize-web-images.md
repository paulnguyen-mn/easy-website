---
slug: optimize-web-images
title: Những điều cần lưu ý khi làm việc với hình ảnh trong dự án thực tế 🔥
author: Hậu Nguyễn
author_title: Senior Software Engineer at fram^
author_url: https://github.com/paulnguyen-mn
author_image_url: https://avatars3.githubusercontent.com/u/31444102?s=400&u=c545a527aa31843e1361462e410c0f51863e8e26&v=4
image: https://res.cloudinary.com/easy-frontend/image/upload/v1595584742/blog/optimize-images.jpg
tags: [frontend tips, toi uu hinh anh]
---

Hầu hết tất cả các dự án thực tế đều sử dụng hình ảnh, không ít thì nhiều. Thỉnh thoảng chúng ta lại gặp phải những vấn đề như hình ảnh tải chậm quá, tạo ra nhiều hình ảnh giống nhau cho trạng thái khác nhau, ... Cùng mình tìm hiểu một số điều cần lưu ý khi làm việc với hình ảnh để cho web của chúng ta chạy mượt mà hơn nhé! 😍

<!-- truncate-->

Nội dung bài chia sẻ:

1. Tối ưu hình ảnh trước khi upload lên web
2. Đưa lên CDN nếu có thể
3. Tránh việc sử dụng icon bằng hình ảnh
4. Có thể biến đổi màu sắc hình ảnh bằng CSS filter

--- 

## 1. Tối ưu hình ảnh trước khi upload lên web

Tại sao phải tối ưu hình ảnh nhỉ?

- Kích thước nhỏ hơn thì load nhanh hơn nè.
- Tránh sử dụng kích thước to hơn cần thiết. Ví dụ cần `300px` nhưng ảnh tới `1000px` thì thật sự không cần thiết nè.
- Có được hình ảnh không khác biệt lắm nhưng kích thước nhỏ hơn ❤️

Bạn có thể sử dụng 1 trong 2 công cụ sau đây để tối ưu hình ảnh nè.

### [TinyPNG](https://tinypng.com/)

- Website: https://tinypng.com/
- Trang này tối ưu hình ảnh tốt nè, giảm được khá nhiều đó mọi người. Tùy hình ảnh mà nó giảm được nhiều hay ít.
- Cách thức thực hiện là sử dụng bộ màu nhỏ hơn, vì thế kích thước cũng giảm được đáng kể nè.

![TinyPNG optimize image](/img/tinypng.jpg)

### [Squoosh](https://squoosh.app/)

- Website: https://squoosh.app/
- Tool này của Google nên bao xịn xò luôn nè.
- Có thể chọn nhiều thuật toán khác nhau để tối ưu hình ảnh.
- Có thể `resize` ảnh trực tiếp ngay trên website nên cực kì tiện lợi luôn.
- Mình thì hay dùng tool này để tối ưu hình ảnh cho dự án mình làm.

![Squoose.app optimize image](/img/squoosh.jpg)

:::tip Nếu phân vân không biết sử dụng tool nào?

Đơn giản là hãy thử upload lên cả 2 website, xem cái nào tối ưu được tốt hơn thì sử dụng cái đó nè hihi 😉

:::

## 2. Đưa lên CDN nếu có thể

Nếu như sau khi optimize hình ảnh mà kích thước hình ảnh vẫn còn lớn (> 100kb) thì biết phải làm sao? Nếu có thể hãy upload những hình ảnh này lên CDN để nó có thể tải nhanh hơn nhé. 

![Squoose.app optimize image](/img/image-cdn-requests.jpg)

Hơn thế nữa, mấy dịch vụ Image CDN giờ còn có thể giúp bạn optimize, resize, crop hình ảnh, ... bằng cách truyền query params vào đường dẫn của hình ảnh luôn. Tuy nhiên nó sẽ có phí đó nhé, nên kiểm tra cần thận trước khi dùng nhen.

Một vài Image CDN website cho bạn tham khảo: 

- S3 + CloudFront của AWS
- [Cloudflare](https://www.cloudflare.com/)
- [Cloud CDN](https://cloud.google.com/cdn)
- [Bunny CDN](https://bunnycdn.com/)
- [Cloudinary](https://cloudinary.com/)
- ...

> Link tham khảo về Image CDN: https://web.dev/image-cdns/

## 3. Tránh việc sử dụng icon bằng hình ảnh

Trong một số dự án, họ dùng icon bằng hình ảnh, tức một icon là một cái hình png/svg. Điều này có nhiều bất tiện: 

- Mỗi lần sử dụng icon này, là một lần request tải cái file hỉnh ảnh icon đó.
- Muốn có nhiều màu cho một icon thì phải có nhiều hình ảnh khác nhau.
- Hỉnh ảnh nhiều quá khó cho việc quản lý.

Giải pháp cho việc này là chúng ta nên sử dụng Icon Font như Font Awesome hoặc nếu mình muốn tự tạo một bộ icon font custom cho dự án thì có thể dùng [Icomoon App](https://icomoon.io/app) nhé.

![Squoose.app optimize image](/img/font-awesome.jpg)

> Các bạn đọc thêm hướng dẫn ở trang chính thức của Icomoon nhé https://icomoon.io/#docs/app

## 4. Có thể biến đổi màu sắc hình ảnh bằng CSS filter

Bạn lưu ý là có một số hiệu ứng đơn giản có thể thực hiện bằng CSS nhé, để hạn chế sử dụng nhiều hình ảnh khác nhau nè, ví dụ như là làm mờ, ảnh trắng đen hay đổ bóng lên hình ảnh như các ví dụ dưới đây nha.

![css filter gray](/img/filter-grayscale.jpg)
![css filter gray](/img/filter-blur.jpg)
![css filter gray](/img/filter-drop-shadow.jpg)

> Link thảm khảo: https://developer.mozilla.org/en-US/docs/Web/CSS/filter

Hi vọng những chia sẻ vừa rồi giúp bạn làm việc với hình ảnh trong dự án tốt hơn nhé! ❤️

<br />

🌐 Nguồn tài liệu tham khảo

- https://www.techradar.com/news/the-best-cdns-of-2018
- https://codecondo.com/10-ways-to-optimize-images-on-your-website/
- Icons undraw: https://undraw.co/search
- https://web.dev/image-cdns/
