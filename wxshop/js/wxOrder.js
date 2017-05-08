$(function(){
	FastClick.attach(document.body);
	// 选择送达时间
	$(".chosetime>span").on('click',function(){
		$(this).addClass('bg').siblings().removeClass('bg');
	})
	// 点击确认下单出现遮罩层选择付款方式
	$('.makeSure').on('click',function(){
		$('.mask').show();
	})
	// 点击返回隐藏遮罩层
	$('.return').on('click',function(){
		$('.mask').hide();
	})
	// 城市选择
	window.getInfo.getCity(undefined,function (result) {
		console.log('加载页面后获取省份');
		var province = $('#province');
        $.each(result.data,function(index,item){
            var opt = $("<option>").text(item.areaName).val(item.areaName).attr('area-id',item.id);
            province.append(opt);
        });
    });
	// 获取用户列表
	window.getInfo.getUserAddress(localStorage.getItem('token'),function (result) {
		if (result.msg == "OK") {

		}
    });
	$('#saveAddress').on('click',function () {
		// 用户token
		var token = localStorage.getItem('token');
		// 三级联动id
		var area_id = $('#area').find("option:selected").attr('area-id');
		// 姓名
		var trueName = $('#trueName').val();
		// 电话
		var mobile = $('#mobile').val();
		//详细地址
        var area_info = $('#areaInfo').val();
        // 地址id
		var id = undefined;
        // 三级地区拼起来的字符串，每级用空格隔开
		var province = $('#province').find("option:selected").val();
		var city = $('#city').find("option:selected").val();
		var area = $('#area').find("option:selected").val();
        var area_main = province + ' ' + city + ' ' + area;
		window.getInfo.saveAddress(token,area_id,trueName,area_info,mobile,area_main,id,function (result) {
			if (result.msg == "OK") {
                console.info('保存地址成功',result);
			}
        })
    })


});

window.getInfo = {
	getCity: function (pid,callback) {
        $.ajax({
            type: 'POST',
            url:'/appOrder/loadCascadeAreaList.json',
            dataType:'json',
            data:{
				pid:pid
            },
            beforeSend:function(){
            },
            success:function(result){
                console.info('城市：',result);
                callback(result);
            }
        });
    },
	// 新增地址
	saveAddress: function (token,area_id,trueName,area_info,mobile,area_main,id,callback) {
        $.ajax({
            type: 'POST',
            url:'/appOrder/saveOrUpdateAddress.json',
            dataType:'json',
            // area_main:三级地区拼起来的字符串，每级用空格隔开,
            // id:地址ID（如果不填代表新增地址，如果填写代表修改已有地址信息）
            // area_id 三级区域id（必须是第三级的区域id）
			data:{
                token:token,
                area_id:area_id,
                trueName:trueName,
                area_info:area_info,
                mobile:mobile,
                area_main:area_main,
                id:addressId,
				// 邮政编码，先不需要 写死
                zip:'000000'
            },
            beforeSend:function(){
            },
            success:function(result){
                console.info('新增地址：',result);
                callback(result);
            }
        });
    },
	// 获取用户列表
    getUserAddress: function (token,callback) {
        $.ajax({
            type: 'POST',
            url:'/appOrder/getUserAddress.json',
            dataType:'json',
            data:{
                token:token
            },
            beforeSend:function(){
            },
            success:function(result){
                console.info('获取用户列表：',result);
                callback(result);
            }
        });
    }
};

// 省份选择
function goProvince(event) {
	var _this = $(event.target);
    var pid = _this.find("option:selected").attr('area-id');
	var city = $('#city');
	var area = $('#area');
	// 先清空city
	city.empty();
    area.empty();
    window.getInfo.getCity(pid,function (result) {
        $.each(result.data,function(index,item){
            var opt = $("<option>").text(item.areaName).val(item.areaName).attr('area-id',item.id);
            city.append(opt);
        });
    })
}
// 城市选择
function goCity(event) {
    var _this = $(event.target);
    var pid = _this.find("option:selected").attr('area-id');
    var area = $('#area');
    // 先清空area
    area.empty();
    window.getInfo.getCity(pid,function (result) {
        $.each(result.data,function(index,item){
            var opt = $("<option>").text(item.areaName).val(item.areaName).attr('area-id',item.id);
            area.append(opt);
        });
    })

}