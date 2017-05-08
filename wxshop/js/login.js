// 点击登录按钮，出现登录弹框
$(function(){
	$('#loginbtn').on('touchstart',function(event){
		event.preventDefault();
		$('.loginImg').attr('src','/resources/img/login_images/sign-in2.png').parent().siblings('#signupbtn').children('.signupImg').attr("src",'/resources/img/login_images/sign-up.png');
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
		$(this).parent('.signupMask').hide();
	})
})

//点击登录按钮，发起异步请求，实现异步的用户登录
$(function(){
	var mobile,pwd;
	var way = 1;
	$('#signInSure').on('touchstart',function(event){
		event.preventDefault();
		loginCheck()
		//var mobile = $('#textIn').val();
		//var pwd = $('#wordIn').val();
		//var way = 1;
		if(loginCheck()){
			$.ajax({
				type:'post',
				url:'/appLogin/loginByMobilePwd.json',
				data:{mobile:mobile,pwd:pwd,way:way},
				success:function(result){
					console.log(result);
					if(result.status === 200){
						$(".mask").show();
						$('.errorShow').html("登录成功");
						setTimeout(function(){
							history.go(-1);
						},1000)
					}else{
						$(".mask").show();
						$('.errorShow').html("账号或者密码错误");
					}
				}
			})
		}
	})
	//验证格式
	function loginCheck(){
		mobile = $('#textIn').val();
		pwd = $('#wordIn').val();
		if((!mobile) || (!pwd)){
			$(".mask").show();
			$('.errorShow').html("信息填写不完整");
			return false;
		}else{
			return true;
		}
	}
})

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
		$('.signupImg').attr("src","/resources/img/login_images/sign-up2.png").parent().siblings("#loginbtn").children('.loginImg').attr("src","/resources/img/login_images/sign-in.png");
		$('.signUp').slideDown().siblings('.signIn').hide();
	})
})
// 点击注册获取验证码，60s倒计时，并发起异步请求，发送验证码到当前手机号
$(function(){
	$('.signupCode').on('touchstart',function(event){
		event.preventDefault();
		$(this).css("backgroundColor","#CCCCCC");
		var mobile = $("#signUptest").val();
		console.log(mobile);
		var intTimer = parseInt(60);
		function timer(intTimer){
			var downtime = window.setInterval(function(){
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
				//$('.signupCode').html(minute+'分'+second+'秒');
				intTimer--;
				if(intTimer == 0){
					console.log("end");
					$('.signupCode').css('backgroundColor','#D3AC65');
					$('.signupCode').html("重新发送");
					clearInterval(downtime);
				}else{
					$('.signupCode').html(minute+'分'+second+'秒');
				}
			},1000);
		}
		timer(intTimer);
		// 发起异步请求发送验证码
		$.ajax({
			type:'post',
			url:'/appRegister/sendSmsMsg.json',
			data:{mobile:mobile},
			success:function(result){
				console.log(result);
				if(result.status === 200){
					console.log("success");
				}
			}
		})
	})
})
// 点击确定，发起注册异步请求
$(function(){
	var phone,code,pwd,surePwd;
	$('#makeSure').on('touchstart',function(event){
		event.preventDefault();
		check();
		isRegister();
		console.log('456');
		if(check() && isRegister()){
			console.log('123');
			$.ajax({
				type:'post',
				url:'/appRegister/registerUser.json',
				data:{mobile:phone,pwd:surePwd,sms:code},
				success:function(result){
					console.log(result);
					if(result.status == 200){
						//localStorage.token=result.data.token;
						localStorage.setItem("token", result.data.token);
						$('.signupMask').show();
						$('.point').html("注册成功");
						setTimeout(function(){
							history.go(-1);
						},1000)
					}
				}
			})
		}
	})
	// 验证格式
	function check(){
		phone = $("#signUptest").val();
		code = $("#signupCode").val();
		pwd = $("#signUpword").val();
		surePwd = $("#signUpwordAgain").val();
		if((!phone) || (!code) || (!pwd) || (!surePwd)){ //验证不为空
			$('.signupMask').show();
			$('.point').html("信息填写不完整");
			return false;
		}else if(pwd !== surePwd){ //验证两次密码一致
			$('.signupMask').show();
			$('.point').html("两次密码不一致");
			return false;
		}else if(!(/^1[34578]\d{9}$/.test(phone))){ //正则表达式验证手机号格式
			$('.signupMask').show();
			$('.point').html("手机号码格式有误");
			return false;
		}else if(!(/^([A-Za-z0-9]{6,16})$/.test(pwd))){//正则表达式验证密码格式
			$('.signupMask').show();
			$('.point').html("密码格式有误");
			return false;
		}else{
			return true;
		}
	}
	//ajax检查手机号是否重复注册
	function isRegister(){
		console.log(phone);
		var back;
		$.ajax({
			type:'post',
			url:'/appRegister/isMobileUnique.json',
			data:{mobile:phone},
			async:false,
			success:function(result){
				console.log(result);
				if(result.data == 1){
					back = true;
				}else{
					$('.signupMask').show();
					$('.point').html("该手机号已被注册");
					back =  false;
				}
			}
		});
		return back;
	}
})
