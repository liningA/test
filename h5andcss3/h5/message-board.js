function saveStorage(id) {
    var data = document.getElementById(id).value;
    var time=new Date().getTime();
    localStorage.setItem(time,data);
    console.log("数据已保存");
}
function loadStorage(id) {
    var result='<table border="0.2" cellpadding="5px">'
    for(var i = 0; i < localStorage.length; i++) {
        //获取每一条新增的键值
        var kes = localStorage.key(i);
        //获取新增键值的内容
        var value = localStorage.getItem(kes);
        //获取时间对象
        var date = new Date();
        //将时间戳转化为正常时间 Mon Jun 19 1972 11:12:44 GMT+0800 (中国标准时间) 的格式
        date.setTime(kes);
        //将转化后的内容变成字符串
        var datestr = date.toGMTString();
        //将所有新增内容添加到result变量中
        result += '<tr><td>' + value + '</td><td>' + datestr + '</td></tr>'
    }
    result += '</table>';
    var target = document.getElementById(id);
    //将所有内容添加到元素中显示
    target.innerHTML = result;

}
function clearStorage(id) {
    localStorage.clear();
    console.log('数据已经清除');
    loadStorage('msg');

}