---
slug: huong-dan-lam-video-tai-len-youtube
title: Hướng dẫn làm video tải lên Youtube 🚀
author: Hậu Nguyễn
author_title: Senior Software Engineer at fram^
author_url: https://github.com/paulnguyen-mn
author_image_url: https://avatars3.githubusercontent.com/u/31444102?s=400&u=c545a527aa31843e1361462e410c0f51863e8e26&v=4
image: https://res.cloudinary.com/easy-frontend/image/upload/v1606840576/youtube-wallpaper_r4hetn.jpg
tags: [sharing]
---

Youtube - Một kênh chia sẻ videos online phổ biến nhất hiện nay, đây cũng là một kênh marketing cũng như kiếm tiền khá hiệu quả trong thời đại công nghệ số. Vậy mình cần những gì để làm một video upload lên Youtube bây giờ? 🤔

![University Campus | Unsplash](/img/youtube-wallpaper.jpeg)

> Source: [https://unsplash.com/photos/NmGzVG5Wsg8](https://unsplash.com/photos/NmGzVG5Wsg8)

<!-- truncate-->

## Các bước thực hiện

1. Chuẩn bị các công cụ 
2. Cài đặt phần mềm máy tính
3. Tìm hiểu cấu trúc của một video
4. Thiết kế thumbnail cho video
5. Làm video intro và outro cho video
6. Quay video
7. Biên tập video
8. Kiểm tra và tải lên Youtube

BẮT ĐẦU THÔI!!! 😍

## 1. Chuẩn bị các công cụ 

| #   | Công cụ                                                                                                                                     | Giá    | Chức năng                          |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------ | ---------------------------------- |
| 1   | [Tripod](https://shopee.vn/Ch%C3%A2n-m%C3%A1y-%E1%BA%A3nh-Tripod-Yunteng-VCT-691-Remote-cho-m%C3%A1y-%E1%BA%A3nh-i.83610061.1417337877)     | `580k` | Giúp cố định máy ảnh / điện thoại. |
| 2   | [Kẹp điện thoại gắn tripod](https://congnghephukien.com/san-pham/kep-dien-thoai-xoay-360-gan-chan-may-anh-tripod-puluz)                     | `95k`  | Gắn điện thoại vào tripod          |
| 3   | [Mic thu âm](https://tiki.vn/mic-thu-am-cai-ao-cho-dien-thoai-may-anh-dslr-may-quay-boya-bym1-hang-chinh-hang-p48430140.html?spid=55637590) | `257k` | Để thu âm thanh chất lượng tốt hơn |
| 4   | Điện thoại có camera tốt                                                                                                                    | -      | Quay phim với độ phân giải FullHD  |
| 5   | Đèn tạo ánh sáng trắng                                                                                                                      | -      | Tạo sáng cho khuôn mặt             |

:::note LƯU Ý

- Trang trí góc quay cũng là một công cụ hết sức quan trọng, góc quay đẹp sẽ giúp bạn ra video ấn tượng.

:::


## 2. Cài đặt phần mềm máy tính

| #   | Phần mềm                                                                        | Công dụng                       | Giá    |
| --- | ------------------------------------------------------------------------------- | ------------------------------- | ------ |
| 1   | [OBS Studio](https://obsproject.com/download)                                   | Quay màn hình / Livestream      | `FREE` |
| 2   | [Figma](https://www.figma.com/downloads/)                                       | Thiết kế banner / website / app | `FREE` |
| 3   | [Davinci Resolve 16](https://www.blackmagicdesign.com/products/davinciresolve/) | Biên tập video                  | `FREE` |

🌐 &nbsp;Link tham khảo

- [Học Davinci Resolve cơ bản trong 1 tiếng](https://youtu.be/PRbi9VXxo4Q)
- [Series học Figma cơ bản](https://www.youtube.com/watch?v=fAAHMwa8Q1o&list=PLH88ngaKjRaTN9qhlrogRZaZqXMgYKgji) 

:::note LƯU Ý

- Nếu bạn chỉ chia sẻ với khán giả, không cần quay màn hình thì không cần phải cài đặt phần mềm `OBS Studio`
- Davinci Resolve hơi nặng nên cần cấu hình tối thiểu
  - CPU `core i5`
  - RAM `ít nhất 8GB`, tốt thì nên `16GB`.
  - Có card đồ hoạ càng tốt.
:::

## 3. Tìm hiểu cấu trúc của một video

| #   | Thời lượng   | Nội dung                                          |
| --- | ------------ | ------------------------------------------------- |
| 1   | `3-5s`       | Hiển thị thumbnail của video                      |
| 2   | `10-20s`     | Giới thiệu nội dung sẽ trình bày trong video      |
| 3   | `3-5s`       | Intro                                             |
| 4   | `3-10p`      | Trình bày nội dung chính                          |
| 5   | `20-30s`     | Cảm ơn, kêu gọi like, share và subscribe, donate. |
| 6   | `3-10s`      | Ending banner                                     |
| 7   | `Xuyên suốt` | Nhạc nền phù hợp                                  |

:::success LƯU Ý

- Không sử dụng nhạc có bản quyền trong video.
- Nên lựa chọn nhạc từ bộ sưu tập của youtube, vào `Channel` --> `Audio Library`
- Nên có camera quay hình của người đang nói để tạo sự kết nối với người nghe.

::: 


## 4. Thiết kế thumbnail cho video

- Kích thước: `1280 x 720` hoặc `1920 x 1080`
- Tỉ lệ: `16:9`

Các bước thực hiện trong Figma:

1. Tạo một `frame` với kích thước `1920 x 1080`
2. Trang trí tuỳ thích cho frame
3. Chọn frame, click export --> chọn định dạng jpg. Export.
4. Dùng [squoose](https://squoosh.app/) để tối ưu kích thước hình ảnh.

:::note LƯU Ý
- Tiêu đề ngắn gọn, gây tò mò.
- Không cho chữ quá nhiều trên banner.
- Nên dùng thumbnail giống nhau cho các videos cùng chủ đề.
- Mỗi banner được tạo thành từ: `1 title` + `1 background` + `1 avatar` + `1 vài yếu tố phụ.`
:::

## 5. Làm video intro và outro cho video

- Tham khảo bài [blog](https://chandat.net/multimedia/davinci-resolve/huong-dan-tao-video-intro-outro-don-gian/) này của anh Chân Đất, chi tiết và dễ hiểu.

## 6. Quay video

- Trước khi quay thì nên soạn kịch bản chia sẻ.
- Tập dợt nói vài lần trước khi quay thiệt, nhớ canh giờ theo kế hoạch.
- Nếu được hãy `lấy lần quay đầu tiên`, thường nó có nhiều cảm xúc nhất.
- Không cần quá hoàn hảo đến từng chi tiết, nên `để mọi thứ tự nhiên` sẽ hay hơn.


## 7. Biên tập video

Trước khi bắt đầu biên tập, cần chuẩn bị:

- Thumbnail cho video + nhạc bắt đầu tương ứng.
- Video intro `(optional)`.
- Nhạc nền (nhớ chọn nhạc không có bản quyền).
- Các videos thô, chưa qua xử lý.
- Banner ending.

Các bước biên tập video: 

1. Thêm banner + khớp nhạc ban đầu.
2. Thêm video intro (lúc này tắt nhạc nền đi)
3. Thêm video chính + mẹo match âm thanh + videos
4. Cắt, ghép nội dung video chính.
5. Thêm banner ending + nhạc kết thúc.
6. Thêm transitions.
7. Xuất video, làm tách cafe và đợi kết quả nào! 🎉

## 8. Kiểm tra và tải lên Youtube

- Đăng nhập vào trình quản lý channel.
- Click tải lên, chọn video bạn muốn tải lên.
- Đợi một tí, điền các thông tin cho video, tada vậy là xong! 😉

> Chi tiết hơn mình sẽ bổ sung hình ảnh sau nhé!


Chúc các bạn thành công! 🎉