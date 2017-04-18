$(function(){
	// 点击删除按钮，清空输入内容
	function cut(){
		$('.delete').on('touchstart',function(){
			$(this).siblings('input').val("");
		})
	}
	//验证昵称格式
	function content(){
		$('.username').change(function(){
			var contentText = $('.username').val();
			console.log(contentText);
			if(/^([A-Za-z0-9]{4,20})$/.test(contentText)){

			}
		})
		console.log("succ");
	}
// 函数调用
cut();
content();
})