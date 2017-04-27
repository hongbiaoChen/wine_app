$(function(){
	//判断字数，超出字数，以...显示
	var num = $(".shoptype").text().length;
	var content = $(".shoptype").text();
	console.log(num);
	if(num>20){
		$(".shoptype").text(content.substr(0,25)+'...');
	}
	
	//点击按钮收藏商品
	$('.collect').on('touchstart',function(){
        var imgsrc = $(this).attr('src');
        if(imgsrc=='img/shopcar_images/collectiong@2x.png'){
            $(this).attr('src','img/shopcar_images/collection2@2x.png');
        }else{
            $(this).attr('src','img/shopcar_images/collectiong@2x.png');
        }
    });
    
	//点击选择对应商品及商店
	$('.select').on('touchstart',function(){
		// $(this).attr('src','shopcar_images/xuanze@2x.png');
		var choseSrc = $(this).attr('src');
		if(choseSrc==="img/shopcar_images/tuoyuan.png"){
			$(this).parents('.top').find('.select').attr('src','img/shopcar_images/xuanze@2x.png');
		}else{
			$(this).parents('.top').find('.select').attr('src','img/shopcar_images/tuoyuan.png');
		}
	})
	
	//全选功能，选择所有商品
	$('#choseAll').on('touchstart',function(){
		var choseAllSrc = $(this).attr('src')
		console.log(choseAllSrc);
		if(choseAllSrc==='img/shopcar_images/tuoyuan.png'){
			$(".select").attr('src','img/shopcar_images/xuanze@2x.png');
		}else{
			$(".select").attr('src','img/shopcar_images/tuoyuan.png');
		}
	})

	//点击编辑出现商品数量编辑
	$('.useredit').on('touchstart',function(event){
		event.preventDefault();
		var message = $(this).text();
		if(message === "编辑"){
			$(this).text("完成");
			$(this).parents('.shopName').siblings('.carbuy').children('.shopDetail').hide().siblings('.clickEdit').show();
		}else{
			$(this).text("编辑");
			$(this).parents('.shopName').siblings('.carbuy').children('.shopDetail').show().siblings('.clickEdit').hide();
		}
	})

	//点击加号减号数量增减
	$(".plus").on('touchstart',function(){//加法
		var addnumber = parseInt($(this).siblings('.count').html());
		addnumber++;
		$(this).siblings('.count').text(addnumber);
		console.log(addnumber);
	})
	$('.minus').on('touchstart',function(){//减法
		var minusnumber = parseInt($(this).siblings('.count').html());
		minusnumber--;
		if(minusnumber>0){
			$(this).siblings('.count').text(minusnumber);
		}else{
			$(this).siblings('.count').text("1");
		}		
	})
})