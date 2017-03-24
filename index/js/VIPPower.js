//特权说明弹出框
$(function(){
	$("#powIntro").on('touchstart',function(event){
		event.preventDefault();
		$(".mask").fadeIn();
	});
	if($(".mask").length > 0){
		$("#close").on('touchstart',function(event){
			event.preventDefault();
			$(".mask").fadeOut();
		})
	}
})
//积分明细弹出框
$(function(){
	$("#allScore").on('touchstart',function(event){
		event.preventDefault();
		$(".detailMask").fadeIn();
	});
	if($(".detailMask").length > 0){
		$("#closetwo").on('touchstart',function(){
			$(".detailMask").fadeOut();
		})
	}
})
