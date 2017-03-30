$(function(){
	function gettime(){
		var now = new Date();
		var end = new Date('2017/03/30 24:00:00');
		var timer = now.getTime()-end.getTime();
		var day = Math.floor(timer/1000/60/60/24);
		var hour = Math.floor(timer/1000/60/60%24);
		var minute = Math.floor(timer/1000/60%60);
       	var second = Math.floor(timer/1000%60);

       	$('.hour').html(hour);
       	$('.minute').html(minute);
       	$('.second').html(second);
	}
	setInterval(gettime,0);
})