//需要注意的点是，获取到的dom元素后，获取内容加上value。而在显示的时候，应该是获取到的元素的innerHTML
// 临时存储
function saveStorage1() {
    var target=document.getElementById('input');
    var str=target.value;
    sessionStorage.setItem('mess',str);//将str中的内容，暂时存储到mess中

}
function loadStorage1() {
    var target1=document.getElementById('msg');
     target1.innerHTML=sessionStorage.getItem('mess');
}
//客户端本地储存
function saveStorage() {
    var target=document.getElementById('input');
    var str=target.value;
    localStorage.setItem('mess1',str);//将str中的内容，暂时存储到mess中

}
function loadStorage() {
    var target1=document.getElementById('msg');
    target1.innerHTML=localStorage.getItem('mess1');
}
