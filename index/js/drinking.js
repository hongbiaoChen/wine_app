//异步获取热门品牌
$(function(){
    $.ajax({
        type:'get',
        url:'https://napp.9pin.com/display/getHotBrands',
        dataType:'jsonp',
        jsonp:'callback',
        success:function(result){
            //console.log(result);
            var html = "";
            for(var i = 0;i<result.data.info.length;i++){
                html += `
                    <div class="swiper-slide ">
                        <a href = "#"><img src="${result.data.info[i].logoUrl}" alt=""></a>
                    </div>
                `;
            }
            $("#hotbrandInsize").html(html);
            $('.hotbrand').each(function(){
                $(this).swiper({
                    slidesPerView:'auto',
                    offsetPxBefore:25,
                    offsetPxAfter:80,
                    calculateHeight: true
                });
            });
        }
    })
})

// 异步酒分类
$(function(){
    $.ajax({
        type:'url',
        url:'https://napp.9pin.com/display/getMainCategoryList?page=1&rows=5',
        dataType:'jsonp',
        jsonp:"callback",
        success:function(result){
            //console.log(result);
            var html = "";
            for(var i = 0;i<result.data.info.length;i++){
                html += `
                    <div class="swiper-slide"> 
                        <a href="#" class = "act${i}" id = "${result.data.info[i].id}">${result.data.info[i].name}</a> 
                    </div>
                `;
            }
            $("#DrinkInsize").html(html);
            $(".act0").addClass("active");//为第一个元素添加默认样式
            $('.dirnkingOutsize').each(function(){
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

//默认获取分页产品 方法一：原生实现
// $(function(){
//     var actId = $(".dirnkingOutsize a").attr("id");
//     var start=1;//开始加载分页为1
//     ajaxRead();//调用第一次ajax函数异步请求数据
    
//     //页面滑动到底部，异步加载分页
//     $(window).scroll(function(){
//         if($(window).scrollTop() + $(window).height() >= $(document).height()){
//             start++;//每次判断页面滑到底部，就加载一个分页数据
//             console.log(start);
//             ajaxRead();
//         }
//     });
    
//     //ajax请求数据函数
//     function ajaxRead(){
//         $.ajax({
//             type:'get',
//             url:'https://napp.9pin.com/display/getWinesByCid',
//             data:{categoryId:actId,page:start,rows:6},
//             dataType:'jsonp',
//             jsonp:'callback',
//             success:function(result){
//                 var html = "";
//                 for(var i = 0;i<result.data.info.length;i++){
//                     //判断字数，若是超出规定字数，用...方式显示
//                     //console.log(result.data.info[i].name);
//                     var content = result.data.info[i].name;
//                     if(content.length>15) {
//                         content = content.substr(0,15)+'...';
//                     }
//                     // 将后台时间戳转化为对应时间
//                     var time = result.data.info[i].createtime;
//                     var date = new Date(time);
//                     Y = date.getFullYear();
//                     time = Y;
//                     html += `
//                         <a>
//                             <img src="deliciousDrink_images/logo_small1@2x.png" alt="">
//                             <span class = "classfly_introduce">
//                                 <p>${content}</p>
//                                 <p>${time}</p>
//                             </span>
//                             <img src="deliciousDrink_images/btn_shopping@2x.png" alt="">
//                         </a>
//                     `;
//                 }
//                 //console.log(start);
//                 $(".dring_classfly").append(html);
//             }
//         });
//     } 
// })
// 默认获取分页产品 方法二：插件
$(function(){
    var actId = $(".dirnkingOutsize a").attr("id");
    var start=1;//页数
    $('.dring_classfly').dropload({
        scrollArea : window,
        loadDownFn : function(me){
            start++;
            //var html = "";
            $.ajax({
                type:'get',
                url:'https://napp.9pin.com/display/getWinesByCid',
                data:{categoryId:actId,page:start,rows:10},
                dataType:'jsonp',
                jsonp:'callback',
                success:function(result){
                    var html = "";
                    var arrLen = result.data.info.length;
                    console.log(result);
                    if(arrLen > 0){
                        for(var i = 0;i<result.data.info.length;i++){
                            //判断字数，若是超出规定字数，用...方式显示
                            //console.log(result.data.info[i].name);
                            var content = result.data.info[i].name;
                            if(content.length>15) {
                                content = content.substr(0,15)+'...';
                            }
                            // 将后台时间戳转化为对应时间
                            var time = result.data.info[i].createtime;
                            var date = new Date(time);
                            Y = date.getFullYear();
                            time = Y;
                            html += `
                                <a class = "item opacity">
                                    <img src="/index/deliciousDrink_images/logo_small1@2x.png" alt="">
                                    <span class = "classfly_introduce">
                                        <p>${content}</p>
                                        <p>${time}</p>
                                    </span>
                                    <img src="/index/deliciousDrink_images/btn_shopping@2x.png" alt="">
                                </a>
                            `;
                        }
                    }else{//如果没有数据
                        me.lock();//锁定
                        me.noData();//无数据
                    }
                    setTimeout(function(){//为了测试，延迟1s加载
                        $(".lists").append(html);//插入数据到页面最后
                        me.resetload();
                    },1000);
                    //console.log(start);
                },
                error:function(xhr,type){
                    alert('ajax error');
                    me.resetload();//即使加载出错，也得重置
                }
            });  
        }
    })
})

//点击获取不同分类产品
$(function(){
    $("#main").on('touchstart','.dirnkingOutsize a',function(event){
        event.preventDefault();
        $(this).addClass('active').parent().siblings().children('.active').removeClass('active');
        var actId = $(this).attr("id");
        console.log(actId);
        $.ajax({
            type:'get',
            url:'https://napp.9pin.com/display/getWinesByCid',
            data:{categoryId:actId,page:1,rows:3},
            dataType:'jsonp',
            jsonp:'callback',
            success:function(result){
                console.log(result);
                var html = "";
                for(var i = 0;i<result.data.info.length;i++){
                    //判断字数，若是超出规定字数，用...方式显示
                    //console.log(result.data.info[i].name);
                    var content = result.data.info[i].name;
                    if(content.length>15) {
                        content = content.substr(0,15)+'...';
                    }
                    // 将后台时间戳转化为对应时间
                    var time = result.data.info[i].createtime;
                    var date = new Date(time);
                    Y = date.getFullYear();
                    time = Y;
                    html += `
                        <a>
                            <img src="/index/deliciousDrink_images/logo_small1@2x.png" alt="">
                            <span class = "classfly_introduce">
                                <p>${content}</p>
                                <p>${time}</p>
                            </span>
                            <img src="/index/deliciousDrink_images/btn_shopping@2x.png" alt="">
                        </a>
                    `;
                }
                $(".dring_classfly").html(html);
            }
        });
    });
    console.log("succ");
})

//异步请求尾部导航
$(function(){
    $("#footer").load('footer.html',function(){
        //console.log("success");
        $("#mainPage").on('touchstart',function(){
            location.href = "index.html";
        });
        $("#shopPage").on('touchstart',function(){
            location.href = "shop.html";
        });
        $("#myPage").on('touchstart',function(){
            location.href = "myMain.html";
        });
        //console.log("end");
    })
})