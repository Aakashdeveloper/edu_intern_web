var express = require('express');
var app = express();
var dotenv = require('dotenv');
dotenv.config();
var port = process.env.PORT || 8124;

// first default route
app.get('/',(req,res) => {
    res.send("Hiii From Express")
})

app.get('/location',(req,res) => {
    res.send('location url')
})


app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})