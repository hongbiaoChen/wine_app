<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width,initial-scale=1.0,user-scalable=no">
	<title>Document</title>
	<link rel="stylesheet" href="/index/css/common.css">
	<link rel="stylesheet" href="/index/css/index.css">
	<link rel="stylesheet" href="/index/css/idangerous.swiper.css">
	<link rel="stylesheet" href="/index/css/idangerous.swiper.3dflow.css">
</head>
<body>
		<!-- 1、页面顶部:top -->
		<header id="top">
			<!-- 最顶部轮播 -->
			<!-- 头部轮播 -->
			<div class = "top">
				<div class="swiper-container">
      				<div class="swiper-wrapper">
       					<!-- <div class="swiper-slide"> <img src="/index/shoping_images/201694178817165460.png"> </div>
        				<div class="swiper-slide"> <img src="/index/shoping_images/201694178817165460.png"> </div>  -->
         			</div>
				</div>
				<div class="pagination"></div>
			</div>
			<!-- 签到 秒杀 拼团 个性化 -->
			<div class = "userInteraction">
				<ul class = "lf">
					<li class = "lankmask">
						<a href="#">
							<img src="/index/img/images/sign@2x.png" alt="">
						</a>
						<p>签到</p>
					</li>
					<li class = "oncekill">
						<a href="#">
							<img src="/index/img/images/miaosha@2x.png" alt="">
						</a>
						<p>秒杀</p>
					</li>
					<li>
						<a href="#">
							<img src="/index/img/images/Pizza@2x.png" alt="">
						</a>
						<p>拼团</p>
					</li>
					<li>
						<a href="#">
							<img src="/index/img/images/Diamond@2x.png" alt="">
						</a>
						<p>个性化</p>
					</li>
				</ul>
			</div>
			<!-- 搜索框  -->
				<form action="" class = "searchForm">
					<input type="text" placeholder = "搜索酒品">
				</form>
		</header>
		<!-- 主体内容:main-->
		<section id="main">
			<!-- 主推套餐 -->
			<p class = "packTitle">—— 主推套餐 ——</p>
			<div class="swiper-container-1 thumbs-cotnainer">
				<div class="swiper-wrapper" id = "maintaocan">
					<!-- <div class="swiper-slide ">
						<img src="/index/images/pic1@2x.png" alt="">
					</div>
					<div class="swiper-slide ">
						<img src="/index/images/pic2@2x.png" alt="">
					</div>
					<div class="swiper-slide ">
						<img src="/index/images/pic3@2x.png" alt="">
					</div>
					<div class="swiper-slide ">
						<img src="/index/images/pic3@2x.png" alt="">
					</div> -->
				</div>
			</div>
			<!-- 秒杀单品 -->
			<p class = "packTitle seckillTile">—— 热门推荐 ——</p>
			<p class = "killOrder" style="display: none;">
				<img src="/index/img/images/pic_miaosha@2x.png" alt="">
				<span>每日24时准时换新</span>
			</p>
			<div class = "killShopOut">
				<div class = "swiper-wrapper">
					<!-- <a href="#" class = "swiper-slide">
						<img src="/index/images/killshow.png" alt="">
						<p class = "firstPrice">¥380</p>
						<p class = "secondPrice">¥380</p>
					</a>
					<a href="#" class = "swiper-slide">
						<img src="/index/images/killshow.png" alt="">
						<p class = "firstPrice">¥380</p>
						<p class = "secondPrice">¥380</p>
					</a>
					<a href="#" class = "swiper-slide">
						<img src="/index/images/killshow.png" alt="">
						<p class = "firstPrice">¥380</p>
						<p class = "secondPrice">¥380</p>
					</a>
					<a href="#" class = "swiper-slide">
						<img src="/index/images/killshow.png" alt="">
						<p class = "firstPrice">¥380</p>
						<p class = "secondPrice">¥380</p>
					</a>
					<a href="#" class = "swiper-slide">
						<img src="/index/images/killshow.png" alt="">
						<p class = "firstPrice">¥380</p>
						<p class = "secondPrice">¥380</p>
					</a>
					<a href="#" class = "swiper-slide">
						<img src="/index/images/killshow.png" alt="">
						<p class = "firstPrice">¥380</p>
						<p class = "secondPrice">¥380</p>
					</a>
					<a href="#" class = "swiper-slide">
						<img src="/index/images/killshow.png" alt="">
						<p class = "firstPrice">¥380</p>
						<p class = "secondPrice">¥380</p>
					</a> -->
				</div>
			</div>
			<!-- 热门推荐 -->
			<p class = "packTitle seckillTile" style = "display: none;">—— 热门推荐 ——</p>
			<div class = "hotout" style="display: none;">
				<!-- <div class="swiper-container featured">
					<div class="swiper-wrapper">
						<div class="swiper-slide" style="background:url(images/214336349073182155.png) no-repeat 98px">
							<a href="http://www.idangero.us" target="_blank"></a>
						</div>
						<div class="swiper-slide" style="background:url(images/467696611768211728.png) no-repeat 98px">
							<a href="http://www.idangero.us/sliders/moover/" target="_blank"></a>
						</div>
						<div class="swiper-slide" style="background:url(images/748953355183294489.png) no-repeat 98px">
							<a href="http://www.idangero.us/index.php?content=cat_item&id=62" target="_blank"></a>
						</div>
						<div class="swiper-slide" style="background:url(images/837410472725066509.png) no-repeat 98px">
							<a href="http://www.idangero.us/sliders/" target="_blank"></a>
						</div>
						<div class="swiper-slide" style="background:url(images/905033911524724308.png) no-repeat 98px">
							<a href="http://www.idangero.us/sliders/swiper/" target="_blank"></a>
						</div>
					</div>
				</div> -->
			</div>
			<!-- 热门文章 -->
			<div class = "cicleOut">
				<p class = "packTitle seckillTile">—— 热门文章 ——</p>
				<!-- <div class = "picCircle">
					<img src="/index/images/wen1@2x.png" alt="" class="lf">
					<div class = "circleintroduce">
						<p>年度回顾 | 一整年的套路都在这里了，当然也有礼物</p>
						<p>
							<span>2017年03月06日</span>
							<span class = "moreCicleIntroduce">更多&gt;&gt;</span>
						</p>
					</div>
				</div>
				<div class = "picCircle">
					<img src="/index/images/wen2@2x.png" alt="" class="lf">
					<div class = "circleintroduce">
						<p>年度回顾 | 一整年的套路都在这里了，当然也有礼物</p>
						<p>
							<span>2017年03月06日</span>
							<span class = "moreCicleIntroduce">更多&gt;&gt;</span>
						</p>
					</div>
				</div>
				<div class = "picCircle">
					<img src="/index/images/wen3@2x.png" alt="" class="lf">
					<div class = "circleintroduce">
						<p>年度回顾 | 一整年的套路都在这里了，当然也有礼物</p>
						<p>
							<span>2017年03月06日</span>
							<span class = "moreCicleIntroduce">更多&gt;&gt;</span>
						</p>
					</div>
				</div> -->
			</div>
			<!-- 猜你喜欢 -->
			<p class = "packTitle seckillTile">—— 猜你喜欢 ——</p>
			<div class = "likeGuestOut">
				<!-- <div class = "likeGuestin">
				<div class = "likeGuest lf">
					<div class = "likeIn">
						<p>
							<img src="/index/images/like1@2x.png" alt="">
						</p>
						<p>法国原装进口正品保障</p>
						<p>送礼品袋</p>
						<p>
							<span>¥ 688.00</span>
							<span class = "discount">¥666</span>
						</p>
						<p>
							200 人已付款
							<span class = "morelike" data-toggle = "item" href = "A"><img src="/index/images/264704695580947598.png" alt=""></span>
						</p>
					</div>
				</div>
				<div class = "likeGuest lf">
					<div class = "likeIn">
						<p>
							<img src="/index/images/like1@2x.png" alt="">
						</p>
						<p>法国原装进口正品保障</p>
						<p>送礼品袋</p>
						<p>
							<span>¥ 688.00</span>
							<span class = "discount">¥666</span>
						</p>
						<p>
							200 人已付款
							<span class = "morelike" data-toggle = "item" href = "B"><img src="/index/images/264704695580947598.png" alt=""></span>
						</p>
					</div>
				</div>
				</div>
				<div class = "maskA" id = "A">
					<a href = "#">加购物车</a>
					<a href = "#">分享链接</a>
				</div>
				<div class = "maskB" id = "B">
					<a href = "#">加购物车</a>
					<a href = "#">分享链接</a>
				</div> -->
			</div>
		</section>
		<!-- 7、页面底部:footer-->
		<footer id="footer">
			<!-- <div class = "footnav">
				<div>
					<p><img src="/index/images/shouye@2x.png" alt="" class = "shouye"></p>
					<p>首页</p>
				</div>
				<div id = "shopPage">
					<p><img src="/index/images/Wine@2x.png" alt="" class = "shangcheng"></p>
					<p>商城</p>
				</div>
				<div>
					<p><img src="/index/images/store@2x.png" alt="" class = "meijiu"></p>
					<p>美酒</p>
				</div>
				<div>
					<p><img src="/index/images/Champaign-Glasses@2x.png" alt="" class = "shequ"></p>
					<p>社区</p>
				</div>
				<div>
					<p><img src="/index/images/mine@2x.png" alt=""></p>
					<p>我的</p>
				</div>
			</div> -->
		</footer>
	<script src = "/index/js/jquery-1.11.3.js"></script>
	<script src = "/index/js/idangerous.swiper-2.0.min.js"></script>
	<script src = "/index/js/idangerous.swiper.3dflow-2.0.js"></script>
	<script src = "/index/js/vw-simulate.js"></script>
	<script src = "/index/js/index.js"></script>
</body>
</html>