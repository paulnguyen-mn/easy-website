---
id: js-04-06
slug: /js-comments
title: Mẹo viết comments hiệu quả
sidebar_label: 04-06 Comments
draft: false
---

# Mẹo viết comments hiệu quả 🎉

- `What`: Comments là phần giải thích thêm cho code hiện tại.
- `When`: Khi có logic phức tạp, code phức tạp
- `Where`: Viết trước đoạn code cần giải thích
- `Why`: Để hiểu được tại sao mình viết code như vậy khi quay lại sau này.
- `Who`: Người nào viết code, thì người đó comments =))

## Viết comments như thế nào cho hiệu quả

- Viết bằng **Tiếng Anh** (QUAN TRỌNG)
- Cung cấp high-level overview cho cái mình đang làm.
- Giải thích tại sao cho code hiện tại, chứ ko giải thích code chạy như thế nào.

```js
/**
 * Returns x raised to the n-th power.
 *
 * @param {number} x The number to raise.
 * @param {number} n The power, must be a natural number.
 * @return {number} x raised to the n-th power.
 */
function pow(x, n) {
  // ...
}

function doComplexStuff() {
  // Your high-level summary over here
  // to let the others read your code understand what you're going to do briefly
}
```

```js
// Print to console: Welcome to Easy FRONTEND --> BAD
console.log('Welcome to Easy Frontend')

// prevent XSS attack from htmlString --> GOOD
const safeHTML = sanitize(htmlString);
```

> Tham khảo thêm: [https://javascript.info/comments](https://javascript.info/comments)


<DocsJSFooter />