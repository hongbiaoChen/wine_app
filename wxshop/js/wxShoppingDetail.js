$(function(){
	FastClick.attach(document.body);
	//轮播图
	function Carousel(){
		var mySwiper = new Swiper('.swiper-container',{
   			pagination:'.pagination',
        	loop:true,
        	grabCursor:true,
        	//autoplay:2000 自动播放
        	paginationClickable:true
    	});
	}
	//订购月数
	$('.monthCount>span').on('click',function(){
		$(this).addClass('monthCountBg').siblings().removeClass('monthCountBg');
	})
//函数调用
Carousel();
})