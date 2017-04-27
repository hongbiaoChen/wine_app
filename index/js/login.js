// 点击登录按钮，出现登录弹框
$(function(){
	$('#loginbtn').on('touchstart',function(event){
		event.preventDefault();
		$('.loginImg').attr('src','/index/img/login_images/sign-in2.png').parent().siblings('#signupbtn').children('.signupImg').attr("src",'/index/img/login_images/sign-up.png');
		$('.signIn').slideDown().siblings('.signUp').hide();
	})
})
// 监听输入框是否有内容，有内容改变按钮颜色
$(function(){
	$('.nowwell').change(function(){
		var content = $(this).val();
		//console.log(content);
		if(content !== ""){
			$(".isSure").css({
				"backgroundColor":"#D3AD66",
				"color":"#fff"
			})
		}
	})
})
// 点击表单删除按钮，删除输入内容
$(function(){
	$('.inputIn').on('touchstart','.delete',function(){
		var id = "#"+$(this).attr('data-input');
		$(id).val("");
	})
})
//点击错误提示遮罩层关闭按钮，隐藏遮罩层
$(function(){
	$(".imgClose").on('touchstart',function(){
		$(this).parent('.mask').hide();
	})
})
// 判断是否有错误信息，没有的话隐藏遮罩层
$(function(){
	var msg = $('#errormsg').text();
	console.log(msg);
	if(!msg){
		$('.mask').hide();
	}else{
	 	$('.mask').show();
	 	$('.signIn').slideDown().siblings('.signUp').hide();
	}
})
//点击登录按钮，发起异步请求，实现异步的用户登录
// $('#signInSure').on('touchstart',function(event){
// 	event.preventDefault();
// 	var mobile = $('#textIn').val();
// 	var pwd = $('#wordIn').val();
// 	$.ajax({
// 		type:'post',
// 		url:'/login/loginByMobliePwd',
// 		data:{mobile:mobile,pwd:pwd},
// 		success:function(result){
// 			console.log(result);
// 			if(result.status === 405){
// 				$(".mask").show();
// 			}
// 			if(result.status === 200){
// 				location.href = "myMain.html";
// 			}
// 		}
// 	})
// })
//重置
//点击重置按钮，显示登录页面
$(function(){
	$(".resign").on('touchstart',function(event){
		event.preventDefault();
		$(".inputOut").fadeOut().siblings('.resignOut').fadeIn(2000);
	})
})
//点击重置获取验证码，60s倒计时
$(function(){
	$('.resignCode').on('touchstart',function(event){
		event.preventDefault();
		$(this).css("backgroundColor","#CCCCCC");
		var intTimer = parseInt(60);
		function timer(intTimer){
			window.setInterval(function(){
				var day = 0;
				var hour = 0;
				var minute = 0;
				var second = 0;
				if(intTimer > 0){
					day = Math.floor(intTimer / (60 * 60 * 24));
        			hour = Math.floor(intTimer / (60 * 60)) - (day * 24);
        			minute = Math.floor(intTimer / 60) - (day * 24 * 60) - (hour * 60);
        			second = Math.floor(intTimer) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
				}
				if(minute < 10){
					minute = '0' + minute;
				}
				if(second < 10){
					second = '0' + second;
				}
				$('.resignCode').html(minute+'分'+second+'秒');
				intTimer--
			},1000);
		}
		timer(intTimer);
	})
})
//注册
//点击注册按钮，出现注册框
$(function(){
	$("#signupbtn").on('touchstart',function(event){
		event.preventDefault();
		$('.signupImg').attr("src","/index/img/login_images/sign-up2.png").parent().siblings("#loginbtn").children('.loginImg').attr("src","/index/img/login_images/sign-in.png");
		$('.signUp').slideDown().siblings('.signIn').hide();
	})
})
// 点击注册获取验证码，60s倒计时
$(function(){
	$('.signupCode').on('touchstart',function(event){
		event.preventDefault();
		$(this).css("backgroundColor","#CCCCCC");
		var intTimer = parseInt(60);
		function timer(intTimer){
			window.setInterval(function(){
				var day = 0;
				var hour = 0;
				var minute = 0;
				var second = 0;
				if(intTimer > 0){
					day = Math.floor(intTimer / (60 * 60 * 24));
        			hour = Math.floor(intTimer / (60 * 60)) - (day * 24);
        			minute = Math.floor(intTimer / 60) - (day * 24 * 60) - (hour * 60);
        			second = Math.floor(intTimer) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
				}
				if(minute < 10){
					minute = '0' + minute;
				}
				if(second < 10){
					second = '0' + second;
				}
				$('.signupCode').html(minute+'分'+second+'秒');
				intTimer--
			},1000);
		}
		timer(intTimer);
	})
})
//注册点击获取验证码
// $(function(){
// 	var mobile = $('#signUptest').val();
// 	var pwd = $('#signUpword').val();
// 	var confirmPwd = $('#signUpwordAgain').val();
// 	$(".signupCode").on('touchstart',function(event){
// 		event.preventDefault();
// 		$.ajax({
// 			type:'post',
// 			url:'/register/sendSmsMsg',
// 			data:{mobile:mobile},
// 			success:function(result){
// 				console.log(result);
// 			}
// 		})
// 	})
// })
