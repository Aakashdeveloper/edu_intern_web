var http = require('http');
var port = process.env.PORT || 8765

// req > what we send to server like params, queryparams, body
// res > what server send us back

var server = http.createServer((req,res) => {
    res.write("<h1>Hi From NodeJs Server</h1>");
    res.end()
})

server.listen(port)