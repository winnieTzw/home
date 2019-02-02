window.onload = function () {
    var hour = document.getElementById("hour");
    var minute = document.getElementById("minute");
    var second = document.getElementById("second");
// 开始定时器
    var s = 0,m = 0, h = 0, ms = 0;
    setInterval(function() {
        // 内容就可以了
        var date = new Date();  // 得到最新的时间
        ms = date.getMilliseconds(); // 现在的毫秒数
        s = date.getSeconds() + ms / 1000;  //  得到秒 1.3 s
        m = date.getMinutes() + s / 60;  //  得到的是分数  45.6分钟
        h = date.getHours() % 12 + m / 60 ;
        //console.log(h);
        //旋转角度
        // 一圈  360 °     一共有 60 秒       每秒  6 °   现在是 s秒
        second.style.WebkitTransform = "rotate("+ s*6 +"deg)";
        //  变化            旋转    deg  度
        minute.style.WebkitTransform = "rotate("+ m*6 +"deg)";
        hour.style.WebkitTransform = "rotate("+ h*30 +"deg)";

        second.style.MozTransform = "rotate("+ s*6 +"deg)";
        //  变化            旋转    deg  度
        minute.style.MozTransform = "rotate("+ m*6 +"deg)";
        hour.style.MozTransform = "rotate("+ h*30 +"deg)";
    },100);


    var decline = document.getElementById("decline")
    var endTime = new Date("2019/02/4 00:00:00");
    setInterval(function () {
        var nowTime = new Date();
        var second = parseInt((endTime.getTime()-nowTime.getTime())/1000);
        if (endTime.getTime()-nowTime.getTime()<0){
            decline.innerHTML = "活动已过期！";
        }else{

        var d =parseInt(second/3600/24);
        var h =parseInt(second/3600%24);
        var m =parseInt(second/60%60);
        var s =parseInt(second%60);
        console.log(s);

        d<10 ? d ="0"+d:d;
        h<10 ? h="0"+h:h;
        m<10 ? m="0"+m:m;
        s<10 ? s="0"+s:s;
        decline.innerHTML = "距离大年30还有:"+d+"天"+h+"小时"+m+"分钟"+s+"秒";}
    },1000);

}



