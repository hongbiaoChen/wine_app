<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width,initial-scale=1.0,user-scalable=no">
	<title>Document</title>
	<link rel="stylesheet" href="/index/css/common.css">
	<link rel="stylesheet" href="/index/css/myGroupBuy.css">
	<link rel="stylesheet" href="/index/css/idangerous.swiper.css">
</head>
<body>
	<header id = "top">
		<div class = "top">
			<!-- 搜索框 -->
			<form action="" class = "searchForm">
				<input type="text" placeholder = "高级搜索">
			</form>
		</div>
	</header>
	<section id = "main">
		<!-- 酒品分类 -->
		<div class = "swiper-container-1 dirnkingOutsize">
			<div class = "swiper-wrapper" id = "DrinkInsize">
				<div class="swiper-slide"> 
					<a href="#" class = "active">红酒</a>
				</div>
				<div class="swiper-slide"> 
					<a href="#">白酒</a>
				</div>
				<div class="swiper-slide"> 
					<a href="#">洋酒</a>
				</div>
				<div class="swiper-slide"> 
					<a href="#">黄酒</a>
				</div>
				<div class="swiper-slide"> 
					<a href="#">啤酒</a>
				</div>
			</div>
		</div>
		<!-- 分类展示 -->
		<div class = "dring_classfly content">
			<div class = "lists"></div>
			<a>
				<img src="/index/deliciousDrink_images/logo_small1@2x.png" alt="">
				<span class = "classfly_introduce">
					<p>卡洛斯</p>
					<p>此商品参团人数达到1000人时可发货</p>
				</span>
				<!-- <span>
					<a href="#">去开团</a>
					<span>待开团</span>
				</span> -->
			</a>
			<a>
				<img src="/index/deliciousDrink_images/logo_small1@2x.png" alt="">
				<span class = "classfly_introduce">
					<p>卡洛斯</p>
					<p>此商品参团人数达到1000人时可发货</p>
				</span>
				
			</a>
			<a>
				<img src="/index/deliciousDrink_images/logo_small1@2x.png" alt="">
				<span class = "classfly_introduce">
					<p>卡洛斯</p>
					<p>此商品参团人数达到1000人时可发货</p>
				</span>
				
			</a>
		</div>
	</section>
	<script src = "/index/js/jquery-1.11.3.js"></script>
	<script src = "/index/js/idangerous.swiper-2.0.min.js"></script>
	<script src = "/index/js/myGroupBuy.js"></script>
</body>
</html>