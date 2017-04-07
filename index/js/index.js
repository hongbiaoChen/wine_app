// 首页
//异步跨域获取轮播图
$(function(){
    $.ajax({
        type:'get',
        //async:false,
        url:'https://napp.9pin.com/display/getCarouselList',
        dataType:"jsonp",
        jsonp:'callback',
        //jsonpCallback:"success_jsonpCallback",
        success:function(result){
            //console.log(result);
            var html = "";
            for(var i = 0;i<result.data.info.length;i++){
                html += `
                    <div class="swiper-slide"> <img src="${result.data.info[i].imageUrl}"> </div>
                `;
            }
            $("#top .top .swiper-wrapper").html(html);
            var mySwiper = new Swiper('.swiper-container',{
                pagination:'.pagination',
                loop:true,
                grabCursor:true,
                autoplay:2000,
                paginationClickable:true
            });
        }
    });
});
//异步获取主推套餐
$(function(){
    $.ajax({
        type:'get',
        url:'https://napp.9pin.com/prod/list?type=1&page=1&rows=4',
        dataType:'jsonp',
        jsonp:'callback',
        success:function(result){
            //console.log(result);
            var html = "";
            for(var i = 0;i<result.data.info.length;i++){
                html += `
                    <div class="swiper-slide ">
                        <img src="${result.data.info[i].imageUrl}" alt="">
                    </div>
                `;
                //console.log(result.data.info[i].imageUrl);
            }
            $("#maintaocan").html(html);
            $('.thumbs-cotnainer').each(function(){
                $(this).swiper({
                    slidesPerView:'auto',
                    offsetPxBefore:25,
                    offsetPxAfter:10,
                    calculateHeight: true
                });
            });
        }
    });
});
//异步获取秒杀单品
$(function(){
    $.ajax({
        type:'get',
        url:'https://napp.9pin.com/prod/list?type=2&page=1&rows=6',
        dataType:'jsonp',
        jsonp:'callback',
        success:function(result){
            console.log(result);
            var html = "";
            for(var i = 0;i<result.data.info.length;i++){
                html += `
                    <a href="#" class = "swiper-slide">
                        <img src="${result.data.info[i].imageUrl}" alt="">
                        <p class = "firstPrice">¥${result.data.info[i].unitPrice}</p>
                        <p class = "secondPrice">¥${result.data.info[i].discountPrice}</p>
                    </a>
                `;
            }
            $(".killShopOut .swiper-wrapper").html(html);
            $('.killShopOut').each(function(){
                $(this).swiper({
                    slidesPerView:'auto',
                    offsetPxBefore:25,
                    offsetPxAfter:10,
                    calculateHeight: true
                });
            });
        }
    })
})
// 分页显示
$(function(){
    $.ajax({
        type:'get',
        url:'https://napp.9pin.com/display/getHotArticleList?page=1&rows=3',
        dataType:'jsonp',
        jsonp:'callback',
        success:function(result){
            //console.log(result);
            var html = "";
            for(var i = 0;i<result.data.info.length;i++){
                //判断字数，若是超出规定字数，用...方式显示
                //console.log(result.data.info[i].title);
                var content = result.data.info[i].title;
                if(content.length>20) {
                    content = content.substr(0,20)+'...';
                }
                // 将后台时间戳转化为对应时间
                var time = result.data.info[i].createDate;
                //console.log(time);
                var date = new Date(time);
                Y = date.getFullYear() + "年";
                M = date.getMonth()+1 + '月';
                D = date.getDate() + '日';
                //console.log(Y+M+D);
                time = Y+M+D;
                //后台获取数据渲染页面
                html += `
                    <div class = "picCircle">
                        <img src="${result.data.info[i].imageUrl}" alt="" class="lf">
                        <div class = "circleintroduce">
                            <p>${content}</p>
                            <p>
                                <span>${time}</span>
                                <span class = "moreCicleIntroduce">更多&gt;&gt;</span>
                            </p>
                        </div>
                    </div>
                `;
            }
            $(".cicleOut").append(html);
        }
    })
})
//异步请求猜你喜欢
var LikeIndex = 0;
$(function(){
    $.ajax({
        type:'get',
        url:'https://napp.9pin.com/prod/list?type=0&page=1&rows=2',
        dataType:'jsonp',
        jsonp:'callback',
        success:function(result){
            //console.log(result);
            var html = "";
            for(var i = 0;i<result.data.info.length;i++){
                //console.log(result.data.info[i].imageUrl);
                html += `
                <div class = "likeGuest lf">
                    <div class = "likeIn">
                        <p>
                            <img src="${result.data.info[i].imageUrl}" alt="">
                        </p>
                        <p>${result.data.info[i].prodName}</p>
                        <p>送礼品袋</p>
                        <p>
                            <span>¥ ${result.data.info[i].unitPrice}</span>
                            <span class = "discount">¥${result.data.info[i].discountPrice}</span>
                        </p>
                        <p>
                            200 人已付款
                            <span class = "morelike" data-toggle = "item" href = "likeInMask${LikeIndex}"><img src="/index/images/264704695580947598.png" alt=""></span>
                        </p>
                    </div>
                    <!-- 遮罩层 -->
                    <div class = "mask" id = "likeInMask${LikeIndex}">
                        <a href = "#">加购物车</a>
                        <a href = "#">分享链接</a>
                    </div>
                </div>
                `;
                LikeIndex++;
            }
            $(".likeGuestOut").html(html);
            $(".likeGuestOut").on('touchstart',"[data-toggle = 'item']",function(){//猜你喜欢遮罩层
                var id = "#"+$(this).attr("href");
                $(id).css("display","block");
            });
            $(".mask").on("touchstart",function(){
                $(this).css("display","none");
            });
        }
    })
})

//签到跳转
$(function(){
    $(".userInteraction .lankmask").on('touchstart',function(event){
        event.preventDefault();
        location.href = "VIPClub.html";
    })
})
//秒杀跳转
$(function(){
    $('.oncekill').on('touchstart',function(event){
        event.preventDefault();
        location.href = "oncekill.html";
    })
})
//异步请求尾部导航
$(function(){
    $("#footer").load('footer.html',function(){
        //console.log("success");
        $(".shouye").attr("src","/index/images/599877663744535913.png");
        $("#shopPage").on('touchstart',function(){
            location.href = "shop.html";
        });
        $("#beautifulDrink").on('touchstart',function(){
            location.href = "drinking.html";
        });
        $("#myPage").on('touchstart',function(){
            location.href = "myMain.html";
        });
        //console.log("end");
    });
});

