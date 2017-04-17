$(function(){
	//判断字数，超出字数，以...显示
	function wordCount(){
		var num = $(".shoptype").text().length;
		var content = $(".shoptype").text();
		console.log(num);
		if(num>20){
			$(".shoptype").text(content.substr(0,28)+'...');
		}
	}
	//遮罩层
	function mask(){
		// 点击付款出现遮罩层
		$('.surePay').on('touchstart',function(){
			$('.mask').show();
			//点击付款方式，出现对勾
			$('.wayOne').on('touchstart',function(event){
				event.preventDefault();
				var activeLength = $('.active').length;
				$(this).children('.mark').addClass('active');
				if(activeLength > 0){
					$(this).children('.mark').removeClass('active');
				}
			})
		})
	}
//函数调用
wordCount();
mask();
})