// 秒杀倒计时，每天0点开始
$(function(){
	function GetRTime(){
    	var EndTime= new Date('2100/03/31 24:00:00');
    	var NowTime = new Date();
    	var t =EndTime.getTime() - NowTime.getTime();
    	var d=Math.floor(t/1000/60/60/24);
    	var h=Math.floor(t/1000/60/60%24);
    	var m=Math.floor(t/1000/60%60);
    	var s=Math.floor(t/1000%60);
    	if(h < 10){
    		h = '0' + h;
    	}
    	if(m < 10){
    		m = '0' + m;
    	}
    	if(s < 10){
    		s = '0' + s;
    	}
    	$('.hour').html(h);
    	$('.minute').html(m);
    	$('.second').html(s)
	}
	setInterval(GetRTime,0);
})
