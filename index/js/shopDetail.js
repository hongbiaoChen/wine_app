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
//点击收藏
$(function(){
	$('.conllect').on('touchstart',function(event){
		event.preventDefault();
		$('.conllect>img').attr('src','shopDetail_images/collection2@2x.png');
	})
})