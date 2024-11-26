	import React from 'react';
	import './Maincontent.css';

	function Maincontent() {
		const article = {
			title: 'Cẩm nang Liên Quân',
			image: 'https://scr.vn/wp-content/uploads/2020/07/H%C3%ACnh-n%E1%BB%81n-Li%C3%AAn-Qu%C3%A2n-Full-HD.jpg', 
			content: `Cẩm nang Liên Quân Mobile là tài liệu hướng dẫn cơ bản đến nâng cao dành cho người chơi, giúp họ hiểu rõ hơn về lối chơi, cách xây dựng tướng và chiến thuật trong game. Để trở thành một cao thủ trong Liên Quân, người chơi cần nắm vững nhiều yếu tố như cách chọn tướng phù hợp với đội hình, lên trang bị tối ưu dựa trên tình huống trận đấu, và cách phối hợp với đồng đội.

Trong cẩm nang này, bạn sẽ tìm thấy hướng dẫn chi tiết về từng tướng, bao gồm bộ kỹ năng, cách lên đồ, và cách chơi trong từng giai đoạn của trận đấu. Ngoài ra, còn có những mẹo chiến thuật như kiểm soát mục tiêu lớn (rồng, Caesar), cách di chuyển hiệu quả trên bản đồ, và những điểm mạnh yếu của từng loại tướng như đấu sĩ, pháp sư, xạ thủ, hay trợ thủ.

Việc thường xuyên cập nhật thông tin về meta game, bảng ngọc, và phù hiệu cũng rất quan trọng để người chơi luôn bắt kịp xu hướng và có thể thích ứng với những thay đổi từ nhà phát hành. Cẩm nang này là nguồn tài liệu hữu ích để cả người chơi mới và người chơi kỳ cựu có thể nâng cao kỹ năng và chiến thắng nhiều hơn trong Liên Quân Mobile(Trích nguồn từ ChatGPT 3.5).`,
			author: 'Nguyễn Đức Duy',
			date: 'October 25, 2024',
		};
	return (
	<main className="main-content">
		<div className="article">
			<h1>{article.title}</h1>
			<img src={article.image} alt="Web Design" />
			<p className="content">{article.content}</p>
			<div className="article-meta">
				<p>Written by: {article.author}</p>
				<p>Date: {article.date}</p>
			</div>
		</div>
	</main>
	);
	}

	export default Maincontent;