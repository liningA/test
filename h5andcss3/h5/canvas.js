//绘制矩形
function draw(id) {
    var canvas=document.getElementById("canvas");
    var context=canvas.getContext('2d');//获取上下文
    context.fillStyle="green";
    context.strokeStyle="#fff";
    context.lineWidth= 5;
    context.fillRect(0,0,400,300);
    context.strokeRect(50,50,180,120);
    context.strokeRect(100,100,180,120);

    context.fillStyle="#f1f2f3";
    context.fillRect(0,500,400,400);
    for( var i=10;i<25;i++){
        context.beginPath();
        context.arc(i*10,i*40,i*5,0,Math.PI*2,true);
        context.closePath();
        context.fillStyle="rgba(255,0,0,0.25)";
        context.fill();
        context.strokeStyle="#000";
        context.stroke();
    }

    context.fillStyle='green';
    context.fillRect(0,1000,800,500);
    context.fillStyle='#fff';     //两种画笔的颜色
    context.strokeStyle='#fff';   //两种画笔的颜色
    context.textBaseline='top';
    context.textAlign='left';
    context.font="bold 40px 微软雅黑";
    context.fillText('确立一个目标',0,1000);
    context.fillText("好好学习，天天向上",0,1050);
    context.fillText("加油，坚持",0,1150);

}
//绘制圆形
function draw2(id) {
    var canvas=document.getElementById("canvas");
    var context=canvas.getContext('2d');
    context.fillStyle="#f1f2f3";
    context.fillRect(0,0,400,400);
    for( var i=10;i<30;i++){
        context.beginPath();
        context.arc(i*30,i*30,i*10,0,Math.PI*2,true);
        context.closePath();
        context.fillStyle="rgba(255,0,0,0.25)";
        context.fill();
        context.strokeStyle="#000";
        context.stroke();
    }
}
//绘制文字
function draw3(id) {
    var canvas=document.getElementById("canvas");
    var context=canvas.getContext('2d');
    context.fillStyle='green';
    context.fillRect(1000,1000,800,500);
    context.fillStyle='#fff';     //两种画笔的颜色
    context.strokeStyle='#fff';   //两种画笔的颜色
    context.textBaseline='hanging';
    context.textAlign='left';
    context.font="bold 40px 微软雅黑";
    context.fillText('确立一个目标',10,0);
    context.fillText("好好学习，天天向上",40,100);
    context.fillText("加油，向上",0,150);//为了防止溢出，可以给宽度加上画布的数值，即就会对内容进行压缩
}
//简单动画
//1.移动坐标轴方法
function draw4(id) {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext('2d');
    setInterval(painting, 100);
    var i=5;

    function painting() {
        context.fillStyle = 'green';
        context.fillRect(i ,i , 10, 10);
        context.fillRect(400-i ,400-i , 10, 10);
        context.fillRect(0 ,i , 10, 10);
        context.fillRect(0 ,400-i , 10, 10);
        i++;
    }
}
//2.擦除法(暂时无法实现，一个小方块一直移动的效果）
var w;
var h;
var context;
function draw5(id) {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext('2d');
    w = context.width;
    h = context.height;
    setInterval(painting, 100);
    var i = 5;

    function painting() {
        context.fillStyle='#fff';
        context.clearRect(0, 0, w, h);
        context.fillStyle = '#0f0';
        context.fillRect(i, 20, 10,10);
        i = i + 20;
    }
   var pi=canvas.toDataURL('image/jpeg');

}
// web storage本地存储
function draw6() {

}