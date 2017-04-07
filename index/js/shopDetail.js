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
        var imgsrc = $('.conllect>img').attr('src');
        if(imgsrc=='/index/shopDetail_images/collectiong@2x.png'){
            $('.conllect>img').attr('src','/index/shopDetail_images/collection2@2x.png');
        }else{
            $('.conllect>img').attr('src','/index/shopDetail_images/collectiong@2x.png');
        }
	})
})
// 点击获得更多积分
$(function(){
    $('.getscore').on('touchstart',function(event){
        event.preventDefault();
        $('.mask').fadeIn();
    });
    $(".finish").on('touchstart',function(event){
        event.preventDefault;
        $('.mask').fadeOut();
    })
})
// 点击进入商品评价页面
$('.assesstitle').on('touchstart',function(){
    location.href = "shopingAssess.html";
})