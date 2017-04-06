//轮播图
$(function(){
	var mySwiper = new Swiper('.swiper-container',{
    pagination:'.pagination',
    loop:true,
    grabCursor:true,
    autoplay:2000,
    paginationClickable:true
    });			
})
//酒具遮罩层
$('.equipment').on('touchstart','.show',function(event){
	event.preventDefault();
	$(this).children('i').show();
})