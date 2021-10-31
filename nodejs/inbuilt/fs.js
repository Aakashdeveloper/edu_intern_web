var fs = require('fs');

/*
fs.writeFile('myDoc.txt',"NodeJs Code With Us", function(err){
    if(err) throw err;
    console.log("File Created")
})
*/
/*
fs.appendFile('myTest.txt','This is from append \n',function(err){
    if(err) throw err;
    console.log("File Appended")
})*/

/*
fs.readFile('db.json','utf-8',function(err,data){
    if(err) throw err;
    console.log(data)
})*/

/*
fs.rename('myTest.txt','MyCode.txt',function(err){
    if(err) throw err;
    console.log('file rename')
})*/

fs.unlink('MyCode.txt',(err)=>{
    if(err) throw err;
    console.log('file deleted')
})