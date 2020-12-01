---
id: cai-dat-moi-truong-lam-viec
slug: /
title: Cài đặt môi trường làm việc cho khoá học Frontend 🚀
sidebar_label: Cài đặt môi trường
image: https://images.unsplash.com/photo-1507470855518-469f3b3dad25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1380&q=80
---

Tài liệu này sẽ giúp các bạn cài đặt môi trường làm việc để sắn sàng cho khoá học `Frontend cho người mới bắt đầu` tại [Nordic Coder](https://nordiccoder.com/).

Các bước cần thực hiện:
1. Tải và cài đặt VSCode
2. Tải và cài đặt NodeJS
3. Cài đặt VSCode extension 
4. Cài package surge.sh
5. Thử deploy một website đơn giản 

## 1. Tải và cài đặt VSCode

- Vào website VSCode: [https://code.visualstudio.com/](https://code.visualstudio.com/)
- Click Download để tải phần mềm về.
- Tiến hành cài đặt như hướng dẫn.
- Sau đó mở VSCode lên bạn sẽ thầy được giao diện dạng thế này:

![alt](/img/vscode_screenshot.png)


## 2. Tải và cài đặt NodeJS

- Vào website NodeJS: [https://nodejs.org/en/](https://nodejs.org/en/)
- Tải version LTS, không dùng bản Current. 
![alt](/img/node_lts.png)
- Tiến hành cài đặt như hướng dẫn.
- Kiểm tra cài đặt thành công bằng cách mở terminal và run lệnh:

```sh 
# Kiểm tra version của node
node -v
```

![alt](/img/node_version.png)


## 3. Cài đặt VSCode extension 

### Bật chế độ Format on save

- VSCode sẽ giúp bạn format lại code sau mỗi lần bạn save document `Ctrl + S`.
- Mở VSCode.
- Phía bên trái, phía dưới có hình bánh răng, click vào đó --> chọn `Settings`.

![alt](/img/vscode_settings.png)

- Gõ chữ `format on save` vào ô tìm kiếm. Check vào cái ô checkbox để bật tính năng này lên.

![alt](/img/vscode_format_on_save.png)

### Cài extention Live Server

- Ông thần này giúp mình reload trình duyệt để thấy kết quả mới mỗi khi mình thay đổi code html/css/js.
- Vào link của [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension.
- Click `Install`. Nó sẽ hỏi có cho phép mở VSCode để cài đặt không? Chọn `Yes`

## 4. Cài package surge.sh

- Mở terminal với quyền admin: 

```sh
# Windows - Nhấn Windows + S để tìm kiếm ứng dụng 
# Gõ chữ Powershell 
# Click chuột phải --> Run as admin
# Xong đợi cửa sổ mở lệnh và chạy lệnh
npm i -g surge
```

- Với windows chạy luôn lệnh này để cho phép dùng command-line ở trong ứng dụng VSCode.

```sh
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned
```

## 5. Thử deploy một website đơn giản 

- Tạo một folder rỗng, đặt tên là `test` hoặc tên gì bạn thích.
- Mở VSCode.
- Dùng File --> `Open folder` --> chọn folder rỗng mới tạo
- Trong VSCode, tạo một file mới bằng cách click vào icon thêm file mới, đặt tên là `index.html`
- Gõ `html:5` rồi tab. Một template mẫu ra hiển thị ra thế này.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  
</body>
</html>
```

- Thay đổi `title` và thêm `h1` vào hehe

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My first website</title>
</head>
<body>
  <h1>Hello World</h1>
</body>
</html>
```

- Deploy thôi nào. Mở terminal bên trong VSCode. `Ctrl + J` (Windows) còn MacOS `Command + J`
- Run lệnh

```sh 
surge . your-unique-name.surge.sh
```

:::note

Trong đó: 

- `surge`: là lệnh bắt buộc
- `.`: dấu chấm ý nghĩa là folder hiện tại.
- `your-unique-name`.surge.sh: cái này bạn lựa chọn một cái tên gì đó mà riêng cho bạn, ít đụng tới người khác để tránh bị trùng với người khác. Nếu lỡ người khác đã dùng sub-domain này rồi thì bạn sẽ không deploy được. Còn phần đuôi `.surge.sh` bạn giữ nguyên giúp mình nhé.

:::


- Sau khi run lênh này, ở lần đầu tiên nó sẽ hỏi `email` và `password`
- Nhập `email` rồi nhấn enter 
- Tiếp nhập `password` rồi nhấn enter (lưu ý, password sẽ không hiển thị lên màn hình đâu nha, nhưng nó vẫn hiểu hehe)
- Sau đó, nó sẽ chạy một tí rồi thông báo thành công dạng thế này.

![alt](/img/surge_deploy.png)

Chúc các bạn thành công nhé! 😉 <br/>
Nếu gặp vấn đề gì thì hãy thông báo lên group nhé! 🙂