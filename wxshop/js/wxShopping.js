$(function(){
	FastClick.attach(document.body);
	//轮播图
	function Carousel(){
		var mySwiper = new Swiper('.swiper-container',{
    		pagination:'.pagination',
    		loop:true,
    		grabCursor:true,
    		autoplay:2000,
    		paginationClickable:true
    	});		
	}
	//酒具遮罩层
	$('.equipment').on('click','.show',function(event){
	event.preventDefault();
	$(this).children('i').show();
})
// 函数调用
Carousel();
})