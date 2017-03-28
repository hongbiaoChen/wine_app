// 点击登录按钮，出现登录弹框
$(function(){
	$('#loginbtn').on('touchstart',function(event){
		event.preventDefault();
		$('.loginImg').attr('src','login_images/sign-in2.png').parent().siblings('#signupbtn').children('.signupImg').attr("src",'login_images/sign-up.png');
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

//重置
//点击重置按钮，显示登录页面
$(function(){
	$(".resign").on('touchstart',function(event){
		event.preventDefault();
		$(".inputOut").fadeOut().siblings('.resignOut').fadeIn(2000);
	})
})

//点击注册按钮，出现注册框
$(function(){
	$("#signupbtn").on('touchstart',function(event){
		event.preventDefault();
		$('.signupImg').attr("src","login_images/sign-up2.png").parent().siblings("#loginbtn").children('.loginImg').attr("src","login_images/sign-in.png");
		$('.signUp').slideDown().siblings('.signIn').hide();
	})
})
//点击获取验证码，60s倒计时
$(function(){
	$('.userCode').on('touchstart',function(event){
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
				$('.userCode').html(minute+'分'+second+'秒');
				intTimer--
			},1000);
		}
		timer(intTimer);
	})
})
