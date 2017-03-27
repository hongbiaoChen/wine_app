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