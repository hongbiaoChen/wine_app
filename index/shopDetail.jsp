<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width,initial-scale=1.0,user-scalable=no">
	<title>Document</title>
	<link rel="stylesheet" href="/index/css/common.css">
	<link rel="stylesheet" href="/index/css/shopDetail.css">
	<link rel="stylesheet" href="/index/css/idangerous.swiper.css">
</head>
<body>
	<header id = "top">
		<!-- 头部轮播 -->
		<div class = "top">
			<div class="swiper-container">
      			<div class="swiper-wrapper">
       				<div class="swiper-slide"> <img src="/index/img/shoping_images/201694178817165460.png"></div>
        			<div class="swiper-slide"> <img src="/index/img/shoping_images/201694178817165460.png"></div> 
        			<div class="swiper-slide"> <img src="/index/img/shoping_images/201694178817165460.png"></div>
         		</div>
			</div>
			<div class="pagination"></div>
		</div>
		<div class = "shopIntro">
			<div class = "introPrice">
				<p class = "price">
					<span>¥666.00</span>
					<span>¥688.00</span>
				</p>
				<p class = "write">1818 小拉菲 1818 小拉菲 1818 小拉菲...</p>
			</div>
			<p class = "other">
				<span>快递：0.00</span>
				<span>月销 1234 笔</span>
				<span>酒品网络科技公司</span>
			</p>
			<!-- 收藏分享按钮 -->
			<a href="#" class = "conllect" style="display: none;">
				<img src="/index/img/shopDetail_images/collectiong@2x.png" alt="">
				<span>收藏</span>
			</a>
			<a href="#" class = "share" style="display: none;">
				<img src="/index/img/shopDetail_images/share@2x.png" alt="">
				<span>分享</span>
			</a>
		</div>
	</header>
	<section id = "main">
		<!-- 购买可得积分 -->
		<a class = "getscore" style="display: none;">
			<img src="/index/img/shopDetail_images/btn_sign@2x.png" alt="">
			<span>购买可获得60会员积分</span>
			<span>&gt;</span>
		</a>
		<!-- 商品评价 -->
		<p class = "assesstitle">
			<span>商品评价 (3445)</span>
			<span>好评度 <span class = "many">98% </span>&gt;</span>
		</p>
		<!-- 评价详情 -->
		<div class = "assessOut">
			<div class = "assessContent">
				<p class = "startpicOut">
					<span class = "startPic">
						<img src="/index/img/shopDetail_images/star@2x.png" alt="">
						<img src="/index/img/shopDetail_images/star@2x.png" alt="">
						<img src="/index/img/shopDetail_images/star@2x.png" alt="">
						<img src="/index/img/shopDetail_images/star@2x.png" alt="">
						<img src="/index/img/shopDetail_images/star@2x.png" alt="">
					</span>
					<span class = "assessUser">c****e</span>
				</p>
				<p class = "assesswrite">在口中留存良久，渐渐披露其味道的精华，舌头上留下点点浓郁的果甜味道,	和谐有致。滋味:在口中留存良久，渐渐披露其味道的精华，舌头上留下点点浓郁。</p>
				<div class = "assessPic">
					<img src = "/index/img/shopDetail_images/like1@2x.png" alt="">
					<img src = "/index/img/shopDetail_images/like1@2x.png" alt="">
					<img src = "/index/img/shopDetail_images/like1@2x.png" alt="">
					<img src = "/index/img/shopDetail_images/like1@2x.png" alt="">
				</div>
				<a href="#" class = "havePic" style="display: none;">查看有图评价</a>
			</div>
		</div>
		<!-- 店铺详况 -->
		<div class = "sellshop">
			<!-- logo -->
			<div class = "selllogo">
				<img src="/index/img/shopDetail_images/wef.png" alt="">
				<p>酒品会旗舰店</p>
				<p>轩尼诗理查专卖店</p>
			</div>
			<!-- 关注人数 -->
			<div class = "allnumber">
				<a href="#">
					<span class = "amount">5.5万</span>
					<span>关注人物</span>
				</a>
				<a href="#">
					<span class = "amount">89</span>
					<span>全部商品</span>
				</a>
				<a href="#">
					<span class = "amount">24</span>
					<span>店铺动态</span>
				</a>
			</div>
			<!-- 联系供应商 -->
			<div class = "kefu">
				<a href="#">
					<img src="/index/img/shopDetail_images/contact@2x.png" alt="">
					<span>联系供应商</span>
				</a>
				<a href="#">
					<img src="/index/img/shopDetail_images/store@2x.png" alt="">
					<span>返回首页</span>
				</a>
			</div>
		</div>
		<!-- 商品简介 -->
		<div class = "introduce">
			<p class = "title">———— 商品简介 ————</p>
			<img src="/index/img/shopDetail_images/3.jpg" alt="">
			<div class = "worldIntroduce">
				<p>原产国：澳大利亚</p>
				<p>年份：2013</p>
				<p>规格：750ml</p>
				<p>储藏方式：常温避光</p>
				<p>产地：巴罗萨</p>
				<p>产区：南澳大利亚</p>
			</div>
			<div class = "detailIntroduce">
				<p>纬度：34°51′</p>
				<p>经度：138°33′E</p>
				<p>酒精度：13.5%vol</p>
				<p>保质期：十年</p>
				<p>配料表：赤霞珠、设拉子</p>
			</div>
		</div>
		<div style = "width:100%;height:80px;"></div>
	</section>
	<footer id = "footer">
		<div class = "footer">
			<a href="#">
				<img src="/index/img/shopDetail_images/Supplier@2x.png" alt="">
				<span>供应商</span>
			</a>
			<a href="#">
				<img src="/index/img/shopDetail_images/buying@2x.png" alt="">
				<span>购物车</span>
				<span class = "count">1</span>
			</a>
			<a href="#">加入购物车</a>
			<a href="#">立即购买</a>
		</div>
	</footer>
	<!-- 积分弹出框 -->
	<div class = "mask">
		<div class = "motai">
			<p>
				<img src="/index/img/shopDetail_images/btn_sign@2x.png" alt="">
				<span>购买可获得60会员积分</span>
			</p>
			<a href="#" class = "finish">完成</a>
		</div>
	</div>
	<script src = "/index/js/jquery-1.11.3.js"></script>
	<script src = "/index/js/idangerous.swiper-2.0.min.js"></script>
	<script src = "/index/js/shopDetail.js"></script>
</body>
</html>