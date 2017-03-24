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
