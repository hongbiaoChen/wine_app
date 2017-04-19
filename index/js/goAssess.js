$(function(){
	function star(){
		$('.star').on('touchstart',function(){
			var index = $(this).index();
			console.log(index);
			//$('.star:lt('+index+')').attr('src','goAssess_images/redstarts.png');
			for(var i = 0;i < index;i++){
				$('.star').eq(i).attr('src','goAssess_images/redstarts.png');
			}
		})
	}
//函数调用
star();
})