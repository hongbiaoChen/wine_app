$(function() {
	//点击切换好评，中评，差评
	function toAssess(){
		$('.assessPic').on('touchstart',function(){
			var choseSrc = $(this).attr('src');
			if(choseSrc === "img/goAssess_images/aa@2x.png"){
				$(this).attr('src','img/goAssess_images/good@2x.png').siblings('.assessPic').attr('src','img/goAssess_images/aa@2x.png')
			}
		})
	}
	//五角星评分
	function star() {
		$('.star').on('touchstart',function(){
			$(this).attr('src','img/goAssess_images/redstarts.png');
			$(this).prevAll().attr('src','img/goAssess_images/redstarts.png');
			$(this).nextAll().attr('src','img/goAssess_images/starts.png');
		})
	}
//函数调用
toAssess();
star();
})