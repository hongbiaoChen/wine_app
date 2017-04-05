// 点赞
$(function(){
	$('.zan').on('touchstart',function(){
		var imgsrc = $(this).attr('src');
		console.log(imgsrc);
		if(imgsrc=='shopingAssess_images/zan@2x.png'){
			$(this).attr('src','shopingAssess_images/zan2@2x.png');
		}
		if(imgsrc=='shopingAssess_images/zan2@2x.png'){
			$(this).attr('src','shopingAssess_images/zan@2x.png');
		}
	});
})