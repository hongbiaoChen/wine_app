<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width,initial-scale=1.0,user-scalable=no">
	<title>Document</title>
	<link rel="stylesheet" href="/index/css/common.css">
	<link rel="stylesheet" href="/index/css/login.css">
</head>
<body>
	<header id = "top">
		<div class = "top">
			<img src="/index/img/login_images/logo.png" alt="">
			<p>酒品会———一款专门垂直酒行业的APP</p>
		</div>
	</header>
	<section id = "main">
		<div class = "main">
			<!-- 登录注册按钮 -->
			<div class = "userlogin">
				<a href="#" id = "loginbtn">
					<img src="/index/img/login_images/sign-in.png" alt="" class = "loginImg">
				</a>
				<a href="#" id = "signupbtn">
					<img src="/index/img/login_images/sign-up.png" alt="" class = "signupImg">
				</a>
			</div>
			<!-- 登录框 -->
			<div class = "signIn">
				<img src="/index/img/login_images/triangle.png" alt="" class = "arrow">
				<!-- 登录页内容 -->
				<form id="submitForm" class = "inputOut" action = "/member/loginByMobliePwd" method = "post">
					<div class = "inputIn">
						<input type="text" placeholder = "请输入手机号码" id = "textIn" class = "nowwell" name = "mobile">
						<img src="/index/img/login_images/cancel.png" alt="" class = "delete" data-input = "textIn">
					</div>
					<div class = "inputIn">
						<input type="password" placeholder = "请输入密码" id = "wordIn" name = "pwd">
						<img src="/index/img/login_images/cancel.png" alt="" class = "delete" data-input = "wordIn">
					</div>
					<button class = "isSure" id = "signInSure" type="submit">确定</button>
					<a href="#" class = "resign">重置密码</a>
					<!-- 错误提示 -->
					<!-- <div class = "mask">
						<img src="/index/login_images/cancel@2x.png" alt="" class = "imgClose">
						<p>账号或者密码错误</p>
					</div> -->
					<div class = "mask">
						<img src="/index/img/login_images/cancel@2x.png" alt="" class = "imgClose"> 
						<p id = "errormsg">${error}</p>
					</div>
					<input style="display:none;" name = "token" value="${token}">
				</form>
				<!-- 重置页内容 -->
				<div class = "resignOut">
					<div class = "inputIn">
						<input type="text" style = "color:#D3AD66" id = "resigntest">
						<img src="/index/img/login_images/cancel.png" alt="" class = "delete" data-input = "resigntest">
					</div>
					<div class = "inputIn">
						<input type="password" placeholder = "输入验证码">
						<a href = "#" class = "resignCode">获取验证码</a>
					</div>
					<div class = "inputIn">
						<input type="password" placeholder = "输入新密码" id = "resignword">
						<img src="/index/img/login_images/cancel.png" alt="" class = "delete" data-input = "resignword">
					</div>
					<div class = "inputIn">
						<input type="password" placeholder = "再次输入密码" id = "resignwordAgain">
						<img src="/index/img/login_images/cancel.png" alt="" class = "delete" data-input = "resignwordAgain">
					</div>
					<a href="#" class = "isSure">确定</a>
				</div>
			</div>
			<!-- 注册框 -->
			<div class = "signUp">
				<img src="/index/img/login_images/triangle.png" alt="" class = "arrow">
				<div class = "signInsize">
					<div class = "inputIn">
						<input type="text" placeholder = "请输入手机号码" id = "signUptest" class = "nowwell">
						<img src="/index/img/login_images/cancel.png" alt="" class = "delete" data-input = "signUptest">
					</div>
					<div class = "inputIn">
						<input type="password" placeholder = "输入验证码">
						<a href = "#" class = "signupCode">获取验证码</a>
					</div>
					<div class = "inputIn">
						<input type="password" placeholder = "创建密码 (6-16位数字或字母)" id = "signUpword">
						<img src="/index/img/login_images/cancel.png" alt="" class = "delete" data-input = "signUpword">
					</div>
					<div class = "inputIn">
						<input type="password" placeholder = "再次输入密码" id = "signUpwordAgain">
						<img src="/index/img/login_images/cancel.png" alt="" class = "delete" data-input = "signUpwordAgain">
					</div>
					<p class = "agreement">
						<img src="/index/img/login_images/right@2x.png" alt="">
						<span>我已阅读 并同意《用户注册协议》</span>
					</p>
					<a href="#" class = "isSure">确定</a>
					<div class = "signupMask">
						<img src="/index/img/login_images/cancel@2x.png" alt="">
						<p>提示</p>
						<p>该号码已经注册</p>
						<p>请直接点击登录</p>
					</div>
				</div>
			</div>
		</div>
	</section>
	<footer id = "footer">
		<p class = "oterLogin">
			<img src="/index/img/login_images/line2.png" alt="">
			<span>其他方式登录</span>
			<img src="/index/img/login_images/line2.png" alt="">
		</p>
		<p class = "loginPic">
			<a href="#">
				<img src="/index/img/login_images/QQ.png" alt="">
			</a>
			<a href="#">
				<img src="/index/img/login_images/wechat.png" alt="">
			</a>
			<a href="#">
				<img src="/index/img/login_images/webo.png" alt="">
			</a>
			<a href="#">
				<img src="/index/img/login_images/fb-icon.png" alt="">
			</a>
			<a href="#">
				<img src="/index/img/login_images/tw.png" alt="">
			</a>
		</p>
	</footer>
	<script src = "/index/js/jquery-1.11.3.js"></script>
	<script src = "/index/js/login.js"></script>
</body>
</html>