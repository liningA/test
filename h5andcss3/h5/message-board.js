function save() {
    var target=document.getElementById('dom');
    var str=target.value;
    sessionStorage.setItem('mess',str);

}
function clear() {
   
}
function load() {
    var target=document.getElementById('msg');
    target.innerHTML=sessionStorage.getItem('mess');
}