---
id: js-04-11
slug: /js-function
title: Function in Javascript
sidebar_label: 04-11 Function
draft: false
---

# Function in Javascript 🎉

- `What`: tập hợp các lệnh phục vụ một chức năng nhỏ nào đó
- `When`: nhận thấy các dòng lệnh có liên quan tới nhau và có thể tách rời được
- `Why`: dễ quản lý, dễ đọc, dễ maintain
- `Who`: dev

## Cách khai báo function

**Function declaration**

```js
function sayHello(name) {
  // body of function
  console.log('Welcome', name);
}
```

## Thành phần cấu tạo nên function

- Từ khoá function
- Tham số hàm (arguments): `optional`, chỉ nên tối đa có 3 tham số.
- Boby
- Return statement: `optional`

```js
function printMessage(message) {
  console.log(message)
}
```

```js
function sumTwoPositive(a, b) {
  // IMPORTANT: check a and b should be positive
  if (a <= 0 || b <= 0) return -1; // should return -1 instead of null/undefined

  return a + b;
}
```



## Cách đặt tên cho function

- Dùng Tiếng Anh
- Dùng động từ vì function là để thực hiện một nhiệm vụ nào đó.
- Thường hay dùng với prefix: `create`, `update`, `add`, `check`, `convert`, `map`, `get`, ...

Một số ví dụ về tên hàm

```js
function addNewStudent() {}
function getAllStudents() {}
function convertNumberToString() {}
function checkIfPositive() {}
function updateProduct() {}
function removeTodo() {}
// ...
```


## Một số lưu ý khi viết function

- Mỗi hàm chỉ làm 1 nhiệm vụ, và làm thật tốt nhiệm vụ đó.
- Nên giữ code của 1 hàm ngắn thôi, dưới 30 dòng code.
- Trường hợp ngoại lệ nhiều code hơn, tuy nhiên những hàm này ít thôi.
- Luôn kiểm tra tính hợp lệ của tham số ở đầu hàm.
- Return kiểu dữ liệu đồng nhất với nhau.
- Nên có comments cho những logic phức tạp.
- Chỉ nên có tối đa là 3 tham số truyền vào.

> Tham khảo thêm: [https://javascript.info/function-basics](https://javascript.info/function-basics)

<DocsJSFooter />