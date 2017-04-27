$(function(){
	function Carousel(){
		var mySwiper = new Swiper('.swiper-container',{
   			pagination:'.pagination',
        	loop:true,
        	grabCursor:true,
        	//autoplay:2000 自动播放
        	paginationClickable:true
    	});
	}
//函数调用
Carousel();
})