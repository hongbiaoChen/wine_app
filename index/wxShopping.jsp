<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width,initial-scale=1.0,user-scalable=no">
	<title>Document</title>
	<link rel="stylesheet" href="/index/css/common.css">
	<link rel="stylesheet" href="/index/css/wxShopping.css">
	<link rel="stylesheet" href="/index/css/idangerous.swiper.css">
</head>
<body>
	<header id = "top">
		<!-- 头部轮播 -->
		<div class = "top">
			<div class="swiper-container">
      			<div class="swiper-wrapper">
       				<div class="swiper-slide"> <img src="/index/img/wxShopping_images/banner@2x.png"> </div>
        			<div class="swiper-slide"> <img src="/index/img/wxShopping_images/banner@2x.png"> </div> 
        			<div class="swiper-slide"> <img src="/index/img/wxShopping_images/banner@2x.png"> </div> 
         		</div>
			</div>
			<div class="pagination"></div>
		</div>
		<!-- 头部套餐说明 -->
		<div class = "taocan">
			<p>国际葡萄酒美食节</p>
			<p>现实一周特价套餐</p>
			<div class = "gift">
				<p>定一个月 加68元送一瓶168元马尔贝克</p>
				<p>定两个月以上 免费赠送价值999高级酒具一套</p>
			</div>
		</div>
	</header>
	<section id = "main">
		<!-- 套餐展示 -->
		<a class = "drinkingShow">
			<img src="/index/img/wxShopping_images/pic1.png" alt="">
			<div class = "tancanIntro">
				<p>玫瑰庄园红酒月套餐</p>
				<p>一周一酒，每周不同系列同一品牌的红酒，系列随机</p>
				<span class = "price">¥199</span>
			</div>
		</a>
		<a class = "drinkingShow">
			<img src="/index/img/wxShopping_images/pic1.png" alt="">
			<div class = "tancanIntro">
				<p>玫瑰庄园红酒月套餐</p>
				<p>一周一酒，每周不同系列同一品牌的红酒，系列随机</p>
				<span class = "price">¥199</span>
			</div>
		</a>
		<!-- 酒具 -->
		<div class = "jiuju">
			<p>酒具</p>
			<div class = "equipment">
				<a href="#" class = "show">
					<img src="/index/img/wxShopping_images/banner@2x.png" alt="">
					<span>传统手工艺的杰出代表</span>
					<i class = "mask"></i>
				</a>
				<a href="#" class = "show">
					<img src="/index/img/wxShopping_images/banner@2x.png" alt="">
					<span>传统手工艺的杰出代表</span>
					<i class = "mask"></i>
				</a>
				<a href="#" class = "show">
					<img src="/index/img/wxShopping_images/banner@2x.png" alt="">
					<span>传统手工艺的杰出代表</span>
					<i class = "mask"></i>
				</a>
			</div>
		</div>
	</section>
	<footer id = "footer">
		<div class = "footer">
			<p class = "contact">
				<span>首页</span>
				<span>会员中心</span>
				<span>常见问题</span>
			</p>
			<p class = "company">福建酒品网络科技有限公司</p>
		</div>
	</footer>
	<div style = "width:100%;height:40px;"></div>
	<script src = "/index/js/jquery-1.11.3.js"></script>
	<script src = "/index/js/idangerous.swiper-2.0.min.js"></script>
	<script src = "/index/js/wxShopping.js"></script>
</body>
</html>