if(condition){

}else{

}

if(condition){

}else if(){

}
else{

}

var a = 21
if(a%2==0){
    console.log(`${a} is even`)
}else{
    console.log(`${a} is odd`)
}
21 is odd

var a = 20
if(a%2==0){
    console.log(`${a} is even`)
}else{
    console.log(`${a} is odd`)
}
20 is even

var name = "John";

if(name == "Ankit"){
    console.log(`Hi ${name} you are admin`)
}else if(name == "Bhumika"){
    console.log(`Hi ${name} you are super admin`)
}else if(name == "John"){
    console.log(`Hi ${name} you are user`)
}else{
    console.log(`Hi ${name} you are unknown`)
}
Hi John you are user

// ternery operater
// single line ifelse

condition ? if condition is true : if condition is false

var a = 10
a>10 ? "Hiii" : "Bie"
"Bie"

var a = 11
a>10 ? "Hiii" : "Bie"
"Hiii"

var a = 11
a>10 ? a+1:a-1
12

var a = 10
a>10 ? a+1:a-1
9

var a =10
a%2==0 ? `${a} is even`:`${a} is odd`
'10 is even'

var a =11
a%2==0 ? `${a} is even`:`${a} is odd`
'11 is odd'
/////////////////////

var city = "Delhi"

// here any condition match
if(city == "Delhi" || city == "Mumbai"){
    console.log(`You have to pay 50% tax`)
}else if(city == "Gurgaon" || city == "Pune"){
    console.log(`You have to pay  30% tax`)
}else{
    console.log(`You have to pay  15% tax`)
}

You have to pay 50% tax



var city = "Delhi"
var age = "41"
// here both condition should match
if(city == "Delhi" && age < 40){
    console.log(`You have to pay 50% tax`)
}else{
    console.log(`You have to pay  15% tax`)
}

var city = "Mumbai"
var age = "39"
if(city == "Delhi"){
    if(age < 40){
        console.log(`You have to pay 50% tax`)
    }else if(age < 60){
        console.log(`You have to pay 30% tax`)
    }else{
        console.log(`You have to pay  10% tax`)
    }
}else if(city == "Mumbai"){
    if(age < 40){
        console.log(`You have to pay 40% tax`)
    }else if(age < 60){
        console.log(`You have to pay 20% tax`)
    }else{
        console.log(`You have to pay  0% tax`)
    }
}
else{
    console.log(`You have to pay  15% tax`)
}
You have to pay  15% tax