$(function(){
	//判断字数，超出字数，以...显示
	function wordCount(){
		var num = $(".shoptype").text().length;
		var content = $(".shoptype").text();
		console.log(num);
		if(num>20){
			$(".shoptype").text(content.substr(0,28)+'...');
		}
	}
	//付款遮罩层
	function mask(){
		// 点击付款出现遮罩层
		$('.surePay').on('touchstart',function(){
			$('.mask').show();
			//点击付款方式，出现对勾
			$('.wayOne').on('touchstart',function(event){
				event.preventDefault();
				var activeLength = $('.active').length;
				$(this).children('.mark').addClass('active');
				if(activeLength > 0){
					$(this).children('.mark').removeClass('active');
				}
			})
		})
	}
	//取消订单遮罩层
	function cancelMask(){
		// 点击取消订单出现遮罩层
		$('.cancelOrder').on('touchstart',function(){
			$('.cancelMask').show();
			//点击选择取消订单理由
			$('.select').on('touchstart',function(){
				var choseSrc = $(this).attr('src');
				if(choseSrc==="shopcar_images/tuoyuan.png"){
					$(this).attr('src','shopcar_images/xuanze@2x.png').parent().siblings().children('.select').attr('src','shopcar_images/tuoyuan.png');
				}
			})
			//点击取消按钮关闭遮罩层
			$('.removeMask').on('touchstart',function(){
				$('.cancelMask').hide();
			})
		})
	}
//函数调用
wordCount();
mask();
cancelMask();
})