function Add(){
    var a = document.getElementById('first').value;
    var b = document.getElementById('second').value;
    var out = Number(a)+Number(b);
    document.getElementsByClassName('output')[0].innerText =`Sum of number is ${out}`
}
var Sub = () => {
    var a = document.getElementById('first').value
    var b = document.getElementById('second').value;
    var out = Number(a)-Number(b);
    document.getElementsByClassName('output')[0].innerText =`Sub of number is ${out}`
}

var showdiv = () => {
    var mydiv = document.getElementById('coupons');
    mydiv.style.display="block"
    mydiv.style.backgroundColor="red"

}

function hidediv(){
    var mydiv = document.getElementById('coupons');
    mydiv.style.display="none"
}