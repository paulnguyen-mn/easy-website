---
slug: saga
title: Bí kíp cho buổi phỏng vấn ReactJS thành công 🎉
author: Hậu Nguyễn
author_title: Senior Software Engineer at fram^
author_url: https://github.com/paulnguyen-mn
author_image_url: https://avatars3.githubusercontent.com/u/31444102?s=400&u=c545a527aa31843e1361462e410c0f51863e8e26&v=4
image: https://images.unsplash.com/photo-1549923746-c502d488b3ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80
tags: [reactjs, phỏng vấn reactjs]
draft: true
---

Chắc hẳn nhiều bạn rất hồi hộp, lo lắng khi chuẩn bị cho buổi phỏng vấn ReactJS sắp tới đúng không nào? Hiểu điều đó, mình có viết ra một vài ý, hi vọng bạn nắm được format một buổi phỏng vấn reactjs diễn ra như thế nào và hay hỏi những topic nào, từ đó giúp bạn cảm giác tự tin hơn khi đi phỏng vấn. 🙂

<!-- truncate-->

https://codeburst.io/understanding-generators-in-es6-javascript-with-examples-6728834016d5
https://livecodestream.dev/post/2020-06-17-how-to-use-generator-and-yield-in-javascript/


```
Not all is shiny when we work with generators. There are some limitations by design, and there are 2 very important considerations:

Generator objects are one-time access only. Once exhausted, you can’t iterate over it again. To do so, you will have to create a new generator object.
Generator objects do not allow random access as possible with for instance, arrays. Since the values are generated one by one, you can’t get the value for a specific index, you will have to manually call all the next() functions until you get to the desire position, but then, you cannot access the previously generated elements.
```