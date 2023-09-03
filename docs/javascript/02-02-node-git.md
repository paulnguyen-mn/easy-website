---
id: js-02-02
slug: /js-setup-node-git
title: Setup Node + Git
sidebar_label: 02-02 Node + Git
draft: false
---

# 02-02 Cài đặt Node và Git 🚀

## Cài đặt Git và setup lần đầu

- Vào trang chủ của [Git](https://git-scm.com/)
- Tải và cài đặt
- Xác nhận cài đặt thành công với lệnh `git --version`
- Setup git lần đầu

```sh
git config --global user.name "John Doe"
git config --global user.email johndoe@example.com
```

> Lưu ý tên và email này là lấy từ thông tin tài khoản Github của bạn, vì thông tin này sẽ được sử dụng khi commit code.

## Cài đặt Node 

**Trường hợp chỉ sử dụng 1 version của NodeJS**

- Vào trang chủ của [NodeJS](https://nodejs.org/en/)
- Tải và cài đặt
- Kiểm tra để xác nhận sau khi hoàn thành

```sh
node -v
```

**Có nhu cầu sử dụng nhiều version của NodeJS `(recommended)`**

- Hiện mình có thử trên Linux + MacOS, còn windows thì mình chưa thử, nhưng theo docs nó vẫn works với Git bash (nên cần cài Git trước)
- Cài đặt [nvm](https://github.com/nvm-sh/nvm#install--update-script)
- Verify cài đặt thành công: `command -v nvm`

Cài đặt node version

```sh
nvm install 14
nvm install 16
```

Set node version mặc định

```sh
nvm alias default 14
nvm alias default 16
```

Chuyển đổi node version

```sh
nvm use 14
nvm use 16
```


<DocsJSFooter />