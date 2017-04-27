$(function(){
	FastClick.attach(document.body);
	//继续提问，显示输入框
	function answer(){
		$('.answer').on('click',function(event){
			event.preventDefault();
			$('.put').show();
		})
	}
	//点击确定，将回复信息拼接到页面展示
	function refer(){
		$('.sure').on('click',function(event){
			event.preventDefault();
			var content = $('.putIn').val();
			$('#main').append(
				`<div class = "char">
					<img src="img/Consultation_images/301549441078143590.jpg" alt="">
					<div class = "content">
						<p>${content}</p>
						<p class = "time">2017-04-07 18:33:45</p>
					</div>
				</div>`)
			$('.putIn').val("");
		})
	}
// 函数调用
refer();
answer();
});
