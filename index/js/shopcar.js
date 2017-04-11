$(function(){
	//判断字数，超出字数，以...显示
	var num = $(".shoptype").text().length;
	var content = $(".shoptype").text();
	console.log(num);
	if(num>20){
		$(".shoptype").text(content.substr(0,25)+'...');
	}
	//点击选择对应商品及商店
	$('.select').on('touchstart',function(){
		// $(this).attr('src','shopcar_images/xuanze@2x.png');
		$(this).parents('.top').find('.select').attr('src','shopcar_images/xuanze@2x.png');
	})
	//选择所有
	$('#choseAll').on('touchstart',function(){
		var choseAllSrc = $(this).attr('src')
		console.log(choseAllSrc);
		if(choseAllSrc==='shopcar_images/tuoyuan.png'){
			$(".select").attr('src','shopcar_images/xuanze@2x.png');
		}else{
			$(".select").attr('src','shopcar_images/tuoyuan.png');
		}
	})
})