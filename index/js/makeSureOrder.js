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
	
	//配送方式模态框
	function maskControl(){
		//点击配送方式出现模态框
		$('#giveway').on('touchstart',function(event){
			event.preventDefault();
			$('.mask').show();
		});
		// 点击关闭按钮隐藏遮罩层
		$('.close').on('touchstart',function(event){
			event.preventDefault();
			$('.mask').hide();
		})
		//点击选择快递方式和运费险切换图片
		$('.select').on('touchstart',function(){
			var choseSrc = $(this).attr('src');
			if(choseSrc==="shopcar_images/tuoyuan.png"){
				$(this).attr('src','shopcar_images/xuanze@2x.png');
			}else{
				$(this).attr('src','shopcar_images/tuoyuan.png');
			}
		});
	}

	// 运险费模态框
	function safeMask(){
		//点击运险费出现模态框
		$('#insurance').on('touchstart',function(event){
			event.preventDefault();
			$('.safeMask').show();
		})
		//点击取消退出
		$('#cancel').on('touchstart',function(event){
			event.preventDefault();
			$('.safeMask').hide();
		})
	}
//函数调用
maskControl();	
wordCount();
safeMask();
})