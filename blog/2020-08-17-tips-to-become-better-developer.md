---
id: developer-habits
title: 7 thói quen của một developer "chất" 😎
author: Hậu Nguyễn
author_title: Senior Software Engineer at fram^
author_url: https://github.com/paulnguyen-mn
author_image_url: https://avatars3.githubusercontent.com/u/31444102?s=400&u=c545a527aa31843e1361462e410c0f51863e8e26&v=4
image: https://images.unsplash.com/photo-1543269664-647163ef2ee4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80
tags: [tips, developer habit]
---

Thường khi nhắc tới developer, mình chỉ toàn tập trung vào những thói quen viết code thế nào cho tốt, cho hiệu quả, nhưng mình nghĩ vẫn còn nhiều thói quen khác cũng không kém phần quan trọng vào việc giúp bạn trở thành một "developer chất".

Dưới đây là 7 thói quen mình tổng hợp lại theo kiến thức và kinh nghiệm cá nhân của mình. Hãy cùng mình điểm qua nhé!


<!-- truncate-->

## 1. Code "vượt hơn mong đợi"

> "Vượt hơn mong đợi" ở đây không có nghĩa phải làm gì đó lớn lao, mà chỉ đơn giản là làm thật tốt cái task đó, từng cái một, góp gió thành bão, nó sẽ cho mình một kết quả ngoài mong đợi.

Phải công nhận một điều là trong thực tế thì rất nhiều tình huống xảy ra so với những gì được mô tả, được viết trên specs/document. Đó chính là lý do mà dev nên có tố chất này.

Trước khi code, hãy luôn phân tích kĩ càng, xem xét tất cả càng tình huống có thể xảy ra. `Nếu đơn giản thì hãy tự xử lý lấy`, nếu phức tạp thì hãy xác nhận lại với `Project Manager (PM)` hoặc `Business Analyst (BA)` hoặc `team lead` của bạn.

Làm được điều này sẽ giúp bạn tránh phải đi fix những con bug nho nhỏ do bị xót những trường hợp phụ mà mình bỏ qua.

![happy team](https://images.unsplash.com/photo-1557425631-f132f06f4aa1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1321&q=80)

Source: https://unsplash.com/photos/Ti7LQ0r-zy4

Dưới đây là các bước các bạn nên tuân thủ để đảm bảo bàn giao code có chất lượng:

- Khi nhận task, `hãy phân tích` và tìm hiểu rõ yêu cầu.
- Tạo ra các` bộ test case` cho riêng mình `ngay từ đầu`, và dùng nó là điểm nhận biết là đã hoàn thành task.
- Khi code chú ý handle tất cả trường hợp, trường hợp nào chưa làm thì để lại TODO, NOTE mai mốt làm sau.
- Phải `handle errors` đầy đủ, không bỏ sót nhé.
- Sau khi làm xong, kiểm tra lại theo test case đã định ra từ đầu.
- Cuối cùng là `tự review code` trước khi push lên git repository.

Bạn có thể xem tham khảo thêm video bí quyết code thế nào cho ít bug ở đây hen: 

## 2. Cẩn thận từng chút dù task to hay nhỏ

Có một câu nói rất là hay là: 

> “The way we do one thing is the way we do everything.” — Iyanla Vanzant

Tạm dịch, Cách bạn một một việc chính là cách bạn làm mọi việc.
![man looking at laptop](https://images.unsplash.com/photo-1541178735493-479c1a27ed24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80)

Source: https://unsplash.com/photos/7d4LREDSPyQ

Thực tế có những tình huống gây ra lỗi trên production xuất phát từ việc chủ quan, nghĩ là task đơn giản nên không cần test kĩ cho mãi đến khi lên production thì xảy ra issue.

Một lời khuyên dành cho các bạn là đừng bao giờ chủ quan, hãy cẩn thận cho từng cái task một, dù lớn, dù nhỏ, dù đơn giản hay phức tạp để có được những đoạn code chất lượng nhé.


## 3. Dành 30 phút mỗi sáng để đọc blog

Để tiến bộ từng ngày trong mảng công nghệ mà mình đang làm việc, ngoài làm task công ty ra, mình nên tham khảo và tìm hiểu thêm xem bên ngoài người ta làm thế nào, sử dụng ra làm sao. Và một trong những nguồn để tìm hiểu, học hỏi từ người khác, project khác là blog/vlog. 

Ví dụ: bạn có thể lên Medium tìm từ khóa là ReactJS thì nó sẽ ra những bài viết liên quan tới ReactJS, mỗi ngày một bài, chắc chắn theo thời gian bạn sẽ biết rất nhiều thứ xung quanh chủ đề ReactJS đó.

Và tại sao là buổi sáng? Vì đó là lúc mình tỉnh táo nhất, giàu năng lượng nhất nên việc tiếp thu cũng là tốt nhất 😉

![man reading books](https://images.unsplash.com/photo-1518457900604-5c973dffdedf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80)

Source: https://unsplash.com/photos/nKEARsgmrqc


## 4. Học hỏi từ những người xung quanh

Kiến thức là cả một đại dương mênh mông, nên những gì chúng ta biết không là gì cả.

Xung quanh mình ai cũng có cái đáng cho chúng ta học hỏi cả, chúng ta học hỏi từ:
- Gia đình, bạn bè
- Đồng nghiệp
- Những đàn anh đi trước
- Những tác giả nổi tiếng
- ...

Có nhiều hình thức để học hỏi: 
- Xin ý kiến về giải pháp do bạn đề xuất.
- Trao đổi về một topic mới mà bạn đang tìm hiểu.
- Đặt câu hỏi cho những bài chia sẻ của tác giả. 
- ...

> Luôn luôn giữ cái đầu "ngu" để nỗ lực học hỏi thêm nhiều điều mới. Vì chính khi chúng ta nghĩ mình chưa biết gì thì mình mới chịu lắng nghe và tiếp thu ý kiến mới, còn nếu cứ nghĩ mình đã biết thì cái đầu của mình sẽ "đóng" lại.

![team work](https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)

Source: https://unsplash.com/photos/5fNmWej4tAA


## 5. Dành thời gian hàng tuần để thực hành kiến thức mới

Coding là kĩ năng, nên luyện tập càng nhiều thì sẽ càng giỏi. 

- Đừng để lý thuyết nó mãi là những dòng chữ khô khan.
- Đừng để demo mãi là bộ phim chúng ta thấy.

--> Hãy bắt tay vào code thử, làm thử thì lúc đó mới nảy sinh ra vấn đề và chúng ta mới thực sự hiểu nó.

![do more on screen](https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)

Source: https://unsplash.com/photos/KE0nC8-58MQ

Công nghệ mới thì nó ra liên tục, thẩm chí trên cùng một framework / library nó cũng có tính năng mới được cập nhật theo thời gian. Nếu mình không cập nhật theo thì mình sẽ tuột hậu và bị bỏ lại sau lưng. Mà chỉ đọc lý thuyết thì làm sao nhớ cho nổi, nên cuối cùng hãy dành một ít thời gian để thử nghiệm, vọc phá những mảng kiến thức mới để sẵn sàng chinh phục những thử thách mới 😎

## 6. Chia sẻ kiến thức của mình với người khác 

Chia sẻ là một cách rất hiệu quả để hệ thống hóa lại kiến thức.

- Trao đổi với đồng nghiệp về cái hay ho mình mới tìm hiểu được.
- Giúp đỡ cho đồng nghiệp những gì mình biết.
- Làm TechTalk chia sẻ một topic nào đó cho mọi người trong công ty.
- Viết blog / làm vlog chia sẻ những gì mình tâm đắc cho cộng đồng online.
- ...

Mỗi lần chia sẻ là một lần đi hệ thống hóa kiến thức, chia sẻ càng nhiều, kiến thức của bạn càng vững chắc.

![man presents to the team](https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1490&q=80)

Source: https://unsplash.com/photos/rxpThOwuVgE


## 7. Tham gia hỗ trợ cho các open source mà mình yêu thích

Chúng ta sử dụng khá nhiều project MIT, free và open source nên nếu được hãy sắp xếp thời gian để đóng góp lại cho những project này để cộng đồng open source ngày một phát triển nhé! 😍

![github react](https://images.unsplash.com/photo-1566241440091-ec10de8db2e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9&auto=format&fit=crop&w=1476&q=80)

https://unsplash.com/photos/LG8ToawE8WQ

<br />
Bên trên là 7 thói quen mà mình nghĩ nó sẽ giúp bạn mau sớm trở thành một developer "chất", còn bạn thì sao? Hãy để lại bình luận bên dưới để cùng trao đổi nhé!

