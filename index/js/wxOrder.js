$(function(){
	FastClick.attach(document.body);
	// 选择送达时间
	$(".chosetime>span").on('click',function(){
		$(this).addClass('bg').siblings().removeClass('bg');
	})
})