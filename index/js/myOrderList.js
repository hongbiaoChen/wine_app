$(function(){
	// 点击订单状态切换
	function orderStatus(){
		$('.status>a').on('touchstart',function(event){
			event.preventDefault();
			$(this).addClass('active').siblings().removeClass('active');
		})
	}
// 函数调用
orderStatus();
})