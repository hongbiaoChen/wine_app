<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width,initial-scale=1.0,user-scalable=no">
	<title>Document</title>
	<link rel="stylesheet" href="/index/css/common.css">
	<link rel="stylesheet" href="/index/css/shopingAssess.css">
</head>
<body>
	<header id = "top">
		<div class = "top">
			<p class = "assessTitle">
				<span>全部</span>
				<span>好评(999+)</span>
				<span>中评(999+)</span>
				<span>差评(999+)</span>
			</p>
			<p class = "assessTitletwo">
				<span>质量有偏差(999+)</span>
				<span>中评(999+)</span>
				<span>差评(999+)</span>
			</p>
			<div class = "moreAssess"></div>
			<!-- <img src = "shopingAssess_images/" alt=""> -->
		</div>
	</header>
	<section id = "main">
		<!-- 主体评论 -->
		<div class = "main">
			<!-- 用户头像 -->
			<p class= "user">
				<img src="/index/shopingAssess_images/301549441078143590.jpg" alt="">
				<span>图纸酱V3</span>
			</p>
			<p class = "assessTime">2017-04-01</p>
			<!-- 评价内容 -->
			<div class = "content">
				<p>在口中存留良久，渐渐披露其味道的精华，舌头上留下点点浓郁的果甜味道，和谐有致。</p>
				<p class = "upPic">
					<img src="/index/shopingAssess_images/like1@2x.png" alt="">
					<img src="/index/shopingAssess_images/like1@2x.png" alt="">
					<img src="/index/shopingAssess_images/like1@2x.png" alt="">
					<img src="/index/shopingAssess_images/like1@2x.png" alt="">
				</p>
				<!-- 掌柜回复 -->
				<div class = "answerOne">
					<span>
						掌柜回复:感谢您对我们的评价！掌柜回复:感谢您对我们的评价！掌柜回复:感谢您对我们的评价！掌柜回复:感谢您对我们的评价！
					</span>
					<img src="/index/shopingAssess_images/triangle@2x.png" alt="">
				</div>
			</div>
			<!-- 用户追评 -->
			<div class = "userRunning">
				<p class = "runping">用户追评</p>
				<p class = "runcontent">在口中存留良久，渐渐披露其味道的精华，舌头上留下点点浓郁的果甜味道，和谐有致...</p>
				<p class = "runPic">
					<img src="/index/shopingAssess_images/like1@2x.png" alt="">
				</p>
				<!-- 掌柜回复 -->
				<div class = "answer">
					<span>
						掌柜回复:感谢您对我们的评价！掌柜回复:感谢您对我们的评价！掌柜回复:感谢您对我们的评价！掌柜回复:感谢您对我们的评价！
					</span>
					<img src="/index/shopingAssess_images/triangle@2x.png" alt="">
				</div>
			</div>
			<!-- 浏览次数和收藏 -->
			<div class = "see">
				<span>浏览1999次</span>
				<span>
					<!-- <img src="/index/shopingAssess_images/comment@2x.png" alt=""> -->
					<img src="/index/shopingAssess_images/zan@2x.png" alt="" class = "zan">
				</span>
			</div>
		</div>
	</section>
	<footer id = "footer">
		<div class = "footer">
			<a href="#">
				<img src="/index/shopDetail_images/Supplier@2x.png" alt="">
				<span>供应商</span>
			</a>
			<a href="#">
				<img src="/index/shopDetail_images/buying@2x.png" alt="">
				<span>购物车</span>
				<span class = "count">1</span>
			</a>
			<a href="#">加入购物车</a>
			<a href="#">立即购买</a>
		</div>
	</footer>
	<div style = "width:100%;height:80px;"></div>
	<script src = "/index/js/jquery-1.11.3.js"></script>
	<script src = "/index/js/shopingAssess.js"></script>
</body>
</html>