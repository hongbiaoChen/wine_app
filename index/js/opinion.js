$(function(){
	//提交成功的话跳转到我的
	$('.postQuestion').on('touchstart',function(){
		$('#main').hide().siblings('.succ').show();
		setTimeout(function(){
			location.href = "http://hao123.com";
		},1500);
	})
})