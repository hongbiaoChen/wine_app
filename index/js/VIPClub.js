//获取屏幕宽度，头像居中
$(function(){
	var spanWidth = $(window).width();
	var picWidth = $('.userPic').width();
	console.log(picWidth);
	//console.log(picWidth);
	var left = (spanWidth/2 - picWidth/2) + 'px';
	console.log(left);
	$("#top .top .userPic").css("left",left);
});
//做任务、查看积分弹出框
$(function(){
	$(".taskTitle").on('touchstart',function(){
		$(".mask").fadeIn();
	});
	if($(".mask").length > 0){
		$("#close").on('touchstart',function(){
			$('.mask').fadeOut();
		})
	}
});