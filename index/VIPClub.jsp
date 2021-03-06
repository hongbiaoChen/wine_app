<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width,initial-scale=1.0,user-scalable=no">
	<title>Document</title>
	<link rel="stylesheet" href="/index/css/common.css">
	<link rel="stylesheet" href="/index/css/VIPClub.css">
</head>
<body>
	<header id = "top">
		<div class = "top">
			<a class = "merberClub" href = "VIPPower.html">会员特权 ></a>
			<!-- 进度条 -->
			<div class = "progressOut">
				<div></div><!-- 进度条内部显示 -->
					<img src="/index/img/VIPClub_images/badge1@2x.png" alt="" class = "leverLf">
				<span class = "userPic">
					<img src="/index/img/VIPClub_images/301549441078143590.jpg" alt="">
				</span>
					<img src="/index/img/VIPClub_images/badge2@2x.png" alt="" class = "leverRt">
			</div>
			<p class = "clubUsername">Coco-coffee</p>
			<p class = "Isfinish">
				<a href="#">
					<img src="/index/img/VIPClub_images/btn_over@2x.png" alt="">
				</a>
				<span>可用积分：666</span>
			</p>
		</div>
	</header>
	<section id = "main">
		<!-- 任务 -->
		<div class = "taskOut">
			<p class = "taskTitle">
				<img src="/index/img/VIPClub_images/task@2x.png" alt="">
				<span>做任务赢积分</span>
				<a href = "#">查看我的总积分 ></a>
			</p>
			<!-- 新手任务 -->
			<div class = "newUser">
				<p>新手任务</p>
				<p>
					<span>1.完成新手任务</span>
					<img src="/index/img/VIPClub_images/receive@2x.png" alt="">
				</p>
			</div>
			<!-- 常规任务 -->
			<div class= "normaltask">
				<p>常规任务</p>
				<p class="award">
					<span>1.完成新手教程</span>
					<img src="/index/img/VIPClub_images/draw@2x.png" alt="">
				</p>
				<p class="award">
					<span>1.完成新手教程</span>
					<img src="/index/img/VIPClub_images/draw@2x.png" alt="">
				</p>
				<p class="award">
					<span>1.完成新手教程</span>
					<img src="/index/img/VIPClub_images/draw@2x.png" alt="">
				</p>
				<p class="award">
					<span>1.完成新手教程</span>
					<img src="/index/img/VIPClub_images/draw@2x.png" alt="">
				</p>
			</div>
		</div>
		<!-- 赢积分换豪礼 -->
		<p class = "wingift">
			<img src="/index/img/VIPClub_images/gift.png" alt="">
			<span>赢积分送豪礼</span>
		</p>
		<!-- 礼品展示区 -->
		<div class = "giftShow">
			<img src="/index/img/VIPPower_images/280721501213663479.png" alt="" class = "arrow">
			<a href="#">
				<img src="/index/img/VIPPower_images/pic@2x.png" alt="">
				<span>原意大利进口红酒</span>
				<p class = "price">
					<img src="/index/img/VIPClub_images/coin.png" alt="">
					<span>123456</span>
				</p>
			</a>
			<a href="#">
				<img src="/index/img/VIPPower_images/pic@2x.png" alt="">
				<span>精美酒具全套套装</span>
				<p class = "price">
					<img src="/index/img/VIPClub_images/coin.png" alt="">
					<span>123456</span>
				</p>
			</a>
			<a href="#">
				<img src="/index/img/VIPPower_images/pic@2x.png" alt="">
				<span>原装意大利进口红酒</span>
				<p class = "price">
					<img src="/index/img/VIPClub_images/coin.png" alt="">
					<span>123456</span>
				</p>
			</a>
			<a href="#">
				<img src="/index/img/VIPPower_images/pic@2x.png" alt="">
				<span>原装意大利进口红酒</span>
				<p class = "price">
					<img src="/index/img/VIPClub_images/coin.png" alt="">
					<span>123456</span>
				</p>
			</a>
			<p class = "change"><u>换一批</u></p>
		</div>
		<div class = "giftShow">
			<img src="/index/img/VIPPower_images/280721501213663479.png" alt="" class = "arrow">
			<a href="#">
				<img src="/index/img/VIPPower_images/pic@2x.png" alt="">
				<span>原意大利进口红酒</span>
				<p class = "price">
					<img src="/index/img/VIPClub_images/coin.png" alt="">
					<span>123456</span>
				</p>
			</a>
			<a href="#">
				<img src="/index/img/VIPPower_images/pic@2x.png" alt="">
				<span>精美酒具全套套装</span>
				<p class = "price">
					<img src="/index/img/VIPClub_images/coin.png" alt="">
					<span>123456</span>
				</p>
			</a>
			<a href="#">
				<img src="/index/img/VIPPower_images/pic@2x.png" alt="">
				<span>原装意大利进口红酒</span>
				<p class = "price">
					<img src="/index/img/VIPClub_images/coin.png" alt="">
					<span>123456</span>
				</p>
			</a>
			<a href="#">
				<img src="/index/img/VIPPower_images/pic@2x.png" alt="">
				<span>原装意大利进口红酒</span>
				<p class = "price">
					<img src="/index/img/VIPClub_images/coin.png" alt="">
					<span>123456</span>
				</p>
			</a>
			<p class = "change"><u>换一批</u></p>
		</div>
	</section>
	<!-- 模态框 -->
	<div class = "mask">
		<div class = "motai">
			<img src="/index/img/VIPPower_images/btn_close@2x.png" alt="" id = "close">
			<p class= "user">亲爱的会员Coco-coffee</p>
			<p class = "userPrompt">您的总积分更新啦！</p>
			<div class = "userDetail">
				<div class = "outsize">
					<div class = "insize">
						<p>您积分 12345</p>
						<p>可用积分666</p>
					</div>
					<img src="/index/img/VIPClub_images/301549441078143590.jpg" alt="" class = "userPic">
				</div>
			</div>
			<p class = "signOne">每日签到做任务可赚取积分</p>
			<p class = "signTwo">积分可换购奖品</p>
			<a class = "takeTask">去做任务</a>
		</div>
	</div>
	<script src = "/index/js/jquery-1.11.3.js"></script>
	<script src = "/index/js/VIPClub.js"></script>
</body>
</html>