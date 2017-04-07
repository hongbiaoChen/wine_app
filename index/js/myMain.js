//会员俱乐部跳转
$(function(){
	$(".topIntroduce .merberClub").on('touchstart',function(){
		location.href = "VIPClub.html";
	})
})
//异步请求尾部导航
$(function(){
	$("#footer").load("footer.html",function(){
		console.log('success');
		$(".mine").attr("src","/index/images/icon_mine@2x.png");
		$("#mainPage").on('touchstart',function(){
			location.href = "index.html";
		});
		$("#shopPage").on('touchstart',function(){
			location.href = "shop.html";
		});
		$("#beautifulDrink").on('touchstart',function(){
			location.href = "drinking.html";
		});
		console.log("end");
	})
});


