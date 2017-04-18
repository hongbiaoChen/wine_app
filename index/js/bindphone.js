$(function(){
	// 点击删除按钮，清空输入内容
	function cut(){
		$('.delete').on('touchstart',function(){
			$(this).siblings('input').val("");
		})
	}
	//点击发送验证码，60s倒计时
	function countdown(){
		$('.code').on('touchstart',function(){
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
					$('.code').html(minute+'分'+second+'秒');
					intTimer--
				},1000);
			}
			timer(intTimer);
		})
	}
// 函数调用
cut();
countdown();
})