<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width,initial-scale=1.0,user-scalable=no">
	<title>Document</title>
	<link rel="stylesheet" href="/index/css/common.css">
	<link rel="stylesheet" href="/index/css/VIPPower.css">
</head>
<body>
	<header id = "top">
		<!-- 最顶部会员信息 -->
		<div class = "top">
			<p class = "vipPic">
				<span>
					<img src="/index/VIPClub_images/301549441078143590.jpg" alt="">
				</span>
				<span>coco-coffee</span>
			</p>
			<div class = "topDetail">
				<a href="#" id = "powIntro">
					<img src="/index/VIPPower_images/details@2x.png" alt="" class = "powIntro">
					<span class = "powIntroTitle">特权说明</span>
				</a>
				<span class = "vipLever">
					<span>会员等级</span>
					<span class = "vipLeverPic">
						<span>V</span>
						<span>2</span>
					</span>
					<span class = "vipSocre">共<span>12345</span>积分</span>
				</span>
				<a href = "#" id = "allScore">
					<img src="/index/VIPPower_images/details@2x.png" alt="" class = "powIntro">
					<span class = "powIntroTitle">积分明细</span>
				</a>
			</div>
		</div>
	</header>
	<section id = "main">
		<!-- 当前等级专属特权 -->
		<div class = "vipNowPower">
			<img src="/index/VIPPower_images/280721501213663479.png" alt="" class = "arrow">
			<p class = "title">
				<span class = "titleOne">当前等级专属特权</span>
				<a href = "morePower.html" class = "morePower">更多专属特权 &gt;</a>
			</p>
			<div class = "content">
				<a href = "#">
					<img src="/index/VIPPower_images/redpacket@2x.png" alt="">
					<span>发红包</span>
				</a>
				<a href = "#">
					<img src="/index/VIPPower_images/gifts@2x.png" alt="">
					<span>发红包</span>
				</a>
				<a href = "#">
					<img src="/index/VIPPower_images/discount@2x.png" alt="">
					<span>发红包</span>
				</a>
			</div>
		</div>
		<!-- 当前等级专属礼品 -->
		<div class = "vipGift">
			<img src="/index/VIPPower_images/280721501213663479.png" alt="" class = "arrow">
			<p class="title">
				<span class = "titleOne">当前等级专属礼品</span>
				<a href = "moreGift.html" class = "morePower">更多专属礼品 &gt;</a>
			</p>
			<div class = "content">
				<a href="#">
					<img src="/index/VIPPower_images/pic@2x.png" alt="">
					<span>20元代金券</span>
				</a>
				<a href="#">
					<img src="/index/VIPPower_images/pic@2x.png" alt="">
					<span>VIP2 会员一次体验卷</span>
				</a>
				<a href="#">
					<img src="/index/VIPPower_images/pic@2x.png" alt="">
					<span>原装意大利进口红酒</span>
				</a>
				<a href="#">
					<img src="/index/VIPPower_images/pic@2x.png" alt="">
					<span>原装意大利进口红酒</span>
				</a>
			</div>
		</div>
		<!-- 等级徽章 -->
		<div class = "vipBadge">
			<img src="/index/VIPPower_images/280721501213663479.png" alt="" class = "arrow">
			<p>等级徽章</p>
			<div class = "content">
				<span>V2</span>
			</div>
		</div>
	</section>
	<!-- 特权说明模态框 -->
	<div class = "mask">
		<div class = "motai">
			<img src="/index/VIPPower_images/btn_close@2x.png" alt="" id = "close">
			<p class = "scorTitle">当前分数 (每月1号更新)</p>
			<p class = "nowScor">
				<span>12345</span>
				<span>分</span>
			</p>
			<p class = "leverWay">达到<span>20000</span>分可以升级到<span>v3</span>级别会员</p>
		</div> 
	</div>
	<!-- 积分明细弹出框 -->
	<div class = "detailMask">
		<div class = "motaiAnother">
			<img src="/index/VIPPower_images/btn_close@2x.png" alt="" id = "closetwo">
			<p class = "scorTitle">当前分数 (每月1号更新)</p>
			<p class = "nowScor">
				<span>12345</span>
				<span>分</span>
			</p>
			<p class = "leverWay">达到<span>20000</span>分可以升级到<span>v3</span>级别会员</p>
			<div class = "detaiOutsize">
				<div class = "detailShow">
					<p>完成新手任务+1</p>
					<p>03-05</p>
				</div>
				<div class = "detailShow">
					<p>完成新手任务+1</p>
					<p>03-05</p>
				</div>
				<div class = "detailShow">
					<p>完成新手任务+1</p>
					<p>03-05</p>
				</div>
				<div class = "detailShow">
					<p>完成新手任务+1</p>
					<p>03-05</p>
				</div>
				<div class = "detailShow">
					<p>完成新手任务+1</p>
					<p>03-05</p>
				</div>
				<div class = "detailShow">
					<p>完成新手任务+1</p>
					<p>03-05</p>
				</div>
			</div>
		</div>
	</div>

	<!-- 左边弹出侧栏按钮 -->
	<a href="#" id = "navbtn">
		<img src="/index/VIPPower_images/logo.png" alt="">
	</a>
	<!-- 遮罩层 -->
	<div class= "navmask"></div>
	<!-- 侧边栏选项 -->
	<div class = "navselect">
		<a href="index.html" class = "bgc">首页</a>
		<a href="shop.html" class = "bgc">商城</a>
		<a href="drinking.html" class = "bgc">酒友圈</a>
		<a href="#" class = "bgc">社区</a>
		<a href="myMain.html" class = "bgc">我的</a>
		<a href="#" class = "bgc">下载App</a>
	</div>
	<script src = "/index/js/jquery-1.11.3.js"></script>
	<script src = "/index/js/VIPPower.js"></script>
</body>
</html>