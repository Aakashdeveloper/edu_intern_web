function orderId(){
    var oid = `ZIU${Math.floor(Math.random()*1000000)}`
    document.getElementById('oid').value = oid
}

const validateFname = () => {
    var fname = document.getElementById('firstname').value;
    if(fname.trim().length==0){
        document.getElementById('fout').innerHTML = "Please Enter First Name"
        document.getElementById('firstname').style.borderColor="red";
    }else{
        document.getElementById('fout').innerHTML = ""
        fname = fname.charAt(0).toUpperCase()+fname.slice(1).toLowerCase()
        document.getElementById('firstname').value = fname
    }
}

function validatePwd(){
    var pwd = document.getElementById('pwd').value;
    if(pwd.length<15){
        if(pwd.length<8){
            document.getElementById('pout').innerText="Min Length of password is 8";
            document.getElementById('ppout').style.display = "block";
            document.getElementById('ppout').style.backgroundColor = "red";
            document.getElementById('pwd').style.borderColor="red"
        }else if(pwd.length<11){
            document.getElementById('pout').innerText="";
            document.getElementById('ppout').style.backgroundColor = "orange";
            document.getElementById('pwd').style.borderColor="orange"
        }
    }else{
        document.getElementById('ppout').style.backgroundColor = "green";
        document.getElementById('pwd').style.borderColor="green"
    }
}

var showPassWord = () => { 
    var pwd = document.getElementById('pwd');
    if(pwd.type == 'password'){
        pwd.type="text"
    }else{
        pwd.type="password"
    }
}

var validateCPwd  = () => {
    var pwd = document.getElementById('pwd').value;
    var cpwd = document.getElementById('cpwd').value;
    if(pwd !== cpwd){
        document.getElementById('cpout').innerText="Password Does Not Match"
        document.getElementById('cpwd').style.borderColor="red"
    }else{
        document.getElementById('cpout').innerText=""
        document.getElementById('cpwd').style.borderColor="green"
    }
}


function getExp(){
    var exp =  document.getElementById('exp').value;
    document.getElementsByClassName('experience')[0].innerText=`Total Year of exp is ${exp}`
}