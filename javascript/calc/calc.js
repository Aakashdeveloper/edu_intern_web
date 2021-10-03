function calc(opt){
    var a = document.getElementById('first').value;
    var b = document.getElementById('second').value;
    var output = document.getElementsByClassName('output')[0];
    var out;
    if(a.trim().length>0 && b.trim().length>0){
        a = a.replace(/ /g,'');
        b = b.replace(/ /g,'');
        if(isNaN(a) || isNaN(b)){
            out = `Please Enter Valid Value`
        }else{
            if(opt == "Add"){
                out = Number(a)+Number(b);
                out = `Sum of number is ${out}`
            }else{
                out = Number(a)-Number(b);
                out =`Sub of number is ${out}`
            }
        }
    }else{
        out = `Please Enter Value`
    }
    
    output.innerText = out
}


function backspace(){
    var a = document.getElementById('first').value;
    a = a.replace(/ /g,'');
    a = a.slice(0,-1)
    document.getElementById('first').value=a
}



/*function Add(){
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
}*/