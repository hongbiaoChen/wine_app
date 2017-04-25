$(function(){
	function refer(){
		$('.sure').on('click',function(event){
			event.preventDefault();
			FastClick.attach(document.body);
			var content = $('.putIn').val();
			$('#main').append(`<div class = "char">
			<img src="Consultation_images/301549441078143590.jpg" alt="">
			<div class = "content">
				<p>${content}</p>
				<p class = "time">2017-04-07 18:33:45</p>
			</div>
		</div>`)
		})
	}
// 函数调用
refer();
})