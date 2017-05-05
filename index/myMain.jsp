<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width,initial-scale=1.0,user-scalable=no">
	<title>Document</title>
	<link rel="stylesheet" href="/index/css/common.css">
	<link rel="stylesheet" href="/index/css/myMain.css">
</head>
<body>
	<header id = "top">
		<div class = "top">
			<div class = "topTitle">我 的</div>
			<div class = "topIntroduce">
				<a href="#" class = "userPic">
					<img src="/index/img/VIPClub_images/301549441078143590.jpg" alt="">
				</a>
				<div class = "userLever">
					<p>Coco-coffee</p>
					<p>VIP4</p>
				</div>
				<a href="login.html" class = "login">登录/注册</a>
				<div class = "merberClub" style="display: none;">会员俱乐部 ></div>
			</div>
			<div class = "userActive" style="display: none;">
				<a href="#">
					<span>动态</span><br/>
					<span>3</span>
				</a>
				<a href="#">
					<span>关注</span><br/>
					<span>88</span>
				</a>
				<a href="#">
					<span>粉丝</span><br/>
					<span>88</span>
				</a>
				<a href="#">
					<span><img src="/index/img/mymain_images/389580824050470642.png" alt=""></span><br/>
					<span>我的资料</span>
				</a>
			</div>
		</div>
	</header>
	<section id = "main">
		<!-- 会员服务 -->
		<div class = "vipService" style="display: none;">
			<a href="#">
				<img src="/index/img/mymain_images/icon_service@2x.png" alt="">
				<span>会员服务</span>
				<span class = "vipSign">
					<span>签到享特权 ></span>
				</span>
			</a>
		</div>
		<!-- 我的订单和我的礼品 -->
		<div class = "orderGift">
			<!-- 我的订单 -->
			<a href="#">
				<img src="/index/img/mymain_images/icon_order@2x.png" alt="">
				<span>我的订单</span>
				<span class = "vipSign">
					<span>查看全部订单 ></span>
				</span>
			</a>
			<!-- 订单情况 -->
			<div class = "orderDetail">
				<a href="#">
					<span>代付款</span>
					<img src="/index/img/mymain_images/icon_wallet@2x.png" alt="">
					<span class = "num">1</span>
				</a>
				<a href="#">
					<span>待发货</span>
					<img src="/index/img/mymain_images/icon_Undelivered-@2x.png" alt="">
					<span class = "num">1</span>
				</a>
				<a href="#">
					<span>待收货</span>
					<img src="/index/img/mymain_images/icon_yunshu@2x.png" alt="">
					<span class = "num">1</span>
				</a>
				<a href="#">
					<span>待评价</span>
					<img src="/index/img/mymain_images/icon_pingjia@2x.png" alt="">
					<span class = "num">1</span>
				</a>
				<a href="#">
					<span>退款/售后</span>
					<img src="/index/img/mymain_images/icon_shouhou@2x.png" alt="">
					<span class = "num">1</span>
				</a>
			</div>
			<!-- 我的礼品 -->
			<a href="#" style="display: none;">
				<img src="/index/img/mymain_images/icon_gift@2x.png" alt="">
				<span>我的礼品</span>
			</a>
			<!-- 礼品详情 -->
			<div class = "GiftDetail" style="display: none;">
				<a href="#">
					<span>红包</span>
					<img src="/index/img/mymain_images/icon_wallet@2x.png" alt="">
				</a>
				<a href="#">
					<span>优惠券</span>
					<img src="/index/img/mymain_images/icon_Undelivered-@2x.png" alt="">
				</a>
				<a href="#">
					<span>收到的礼物</span>
					<img src="/index/img/mymain_images/icon_yunshu@2x.png" alt="">
				</a>
			</div>
		</div>
		<!-- 地址管理 足记 设置 版本信息 -->
		<div class = "vipService">
			<a href="#">
				<img src="/index/img/mymain_images/icon_service@2x.png" alt="">
				<span>地址管理</span>
				<span class = "vipSign">
					<span> ></span>
				</span>
			</a>
		</div>
		<div class = "vipService" style="display: none;">
			<a href="#">
				<img src="/index/img/mymain_images/icon_footprint@3x.png" alt="">
				<span>我的足迹</span>
				<span class = "vipSign">
					<span> ></span>
				</span>
			</a>
		</div>
		<div class = "vipService" style="display: none;">
			<a href="#">
				<img src="/index/img/mymain_images/icon_setting@2x.png" alt="">
				<span>设置</span>
				<span class = "vipSign">
					<span> ></span>
				</span>
			</a>
		</div>
		<div class = "vipService lastDistance">
			<a href="#">
				<img src="/index/img/mymain_images/feedback.png" alt="">
				<span>意见反馈</span>
				<span class = "vipSign">
					<span> ></span>
				</span>
			</a>
		</div>
		<div class = "vipService lastDistance">
			<a href="#">
				<img src="/index/img/mymain_images/icon_information@2x.png" alt="">
				<span>版本信息</span>
				<span class = "vipSign">
					<span> ></span>
				</span>
			</a>
		</div>
		<div style = "width:100%;height:100px;"></div>
	</section>
	<!-- 页面底部 -->
	<footer id = "footer"></footer>
	<script src = "/index/js/jquery-1.11.3.js"></script>
	<script src = "/index/js/myMain.js"></script>
</body>
</html>