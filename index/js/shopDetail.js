// 轮播样式
$(function(){
	var mySwiper = new Swiper('.swiper-container',{
   		pagination:'.pagination',
        loop:true,
        grabCursor:true,
        //autoplay:2000 自动播放
        paginationClickable:true
    });
})