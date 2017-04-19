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
// 函数调用
 wordCount();
})