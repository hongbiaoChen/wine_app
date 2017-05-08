$(function(){
	FastClick.attach(document.body);
	//酒具遮罩层
	$('.equipment').on('click','.show',function(event){
		event.preventDefault();
		$(this).children('i').show();
	})
})