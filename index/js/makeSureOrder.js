$(function(){
	//判断字数，超出字数，以...显示
	var num = $(".shoptype").text().length;
	var content = $(".shoptype").text();
	console.log(num);
	if(num>20){
		$(".shoptype").text(content.substr(0,28)+'...');
	}

	// 点击选择快递方式切换图片
	$('.select').on('touchstart',function(){
		var choseSrc = $(this).attr('src');
		if(choseSrc==="shopcar_images/tuoyuan.png"){
			$(this).attr('src','shopcar_images/xuanze@2x.png');
		}else{
			$(this).attr('src','shopcar_images/tuoyuan.png');
		}
	})

	//点击配送方式出现模态框
	$('#giveway').on('touchstart',function(event){
		event.preventDefault();
		
	})
})