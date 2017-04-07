//头部轮播
var mySwiper = new Swiper('.swiper-container',{
	pagination:'.pagination',
	loop:true,
	grabCursor:true,
	autoplay:2000,
	paginationClickable:true
});
//选项卡切换
var tabsSwiper = new Swiper('.swiper-container-1',{
    speed:500,
    onSlideChangeStart: function(){
      	$(".tabs .active").removeClass('active')
      	$(".tabs a").eq(tabsSwiper.activeIndex).addClass('active')  
    }
});
$(".tabs a").on('touchstart mousedown',function(e){
    e.preventDefault()
    $(".tabs .active").removeClass('active')
    $(this).addClass('active')
    tabsSwiper.swipeTo( $(this).index() )
});
$(".tabs a").click(function(e){
    e.preventDefault()
});
//异步请求尾部导航
$(function(){
    $("#footer").load('footer.html',function(){
        //console.log("success");
        $(".shangcheng").attr("src","/index/images/icon_Wine@2x.png");
        $("#mainPage").on('touchstart',function(){
            location.href = "index.html";
        });
        $("#beautifulDrink").on('touchstart',function(){
            location.href = "drinking.html";
        });
        $("#myPage").on('touchstart',function(){
            location.href = "myMain.html";
        });
        console.log("end");
    })
})
