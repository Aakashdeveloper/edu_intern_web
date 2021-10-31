var http = require('http');
var fs = require('fs');
var cors = require('cors');
app.use(cors())

var server = http.createServer((req,res) => {
    //reading Json file
    fs.readFile('db.json','utf-8',function(err,data){
        if(err) throw err;
        res.write(data);
        res.end();
    })
})

server.listen(7650)