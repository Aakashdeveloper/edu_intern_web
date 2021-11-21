var express = require('express');
var app = express();
var dotenv = require('dotenv');
var mongo = require('mongodb');
var MongoClient = mongo.MongoClient;
dotenv.config();
var mongoUrl = process.env.MongoLiveUrl;
var cors = require('cors')
const bodyParser = require('body-parser')
var port = process.env.PORT || 8124;
// save the database connection
var db;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());

// first default route
app.get('/',(req,res) => {
    res.send("Hiii From Express")
})


// restaurant wrt to id
app.get('/restaurant/:id',(req,res) => {
    var id = parseInt(req.params.id);
    db.collection('restaurants').find({"restaurant_id":id}).toArray((err,result) =>{
        if(err) throw err;
        res.send(result) 
    })
})



// restaurant wrt to mealId
app.get('/filter/:mealId',(req,res) => {
    var id = parseInt(req.params.mealId);
    var sort = {cost:1}
    var skip = 0;
    var limit = 1000000000000
    var query = {"mealTypes.mealtype_id":id};
    if(req.query.sortKey){
        var sortKey = req.query.sortKey
        if(sortKey>1 || sortKey<-1 || sortKey==0){
            sortKey=1
        }
        sort = {cost: Number(sortKey)}
    }
    if(req.query.skip && req.query.limit){
        skip = Number(req.query.skip)
        limit = Number(req.query.limit)
    }

    if(req.query.lcost && req.query.hcost){
        var lcost = Number(req.query.lcost);
        var hcost = Number(req.query.hcost);
    }

    if(req.query.cuisine && req.query.lcost && req.query.hcost){
        query = {$and:[{cost:{$gt:lcost,$lt:hcost}}],
                "cuisines.cuisine_id":Number(req.query.cuisine),
                "mealTypes.mealtype_id":id}
    }
    else if(req.query.cuisine){
       query = {"mealTypes.mealtype_id":id,"cuisines.cuisine_id":Number(req.query.cuisine)}
       // query = {"mealTypes.mealtype_id":id,"cuisines.cuisine_id":{$in:[2,5]}}
    }else if(req.query.lcost && req.query.hcost){
        query = {$and:[{cost:{$gt:lcost,$lt:hcost}}],"mealTypes.mealtype_id":id}
    }

    db.collection('restaurants').find(query).sort(sort).skip(skip).limit(limit).toArray((err,result) =>{
        if(err) throw err;
        res.send(result) 
    })
})

// connecting with mongodb
MongoClient.connect(mongoUrl, (err,client) => {
    if(err) console.log("Error While Connecting");
    db = client.db('augintern');
    app.listen(port,()=>{
        console.log(`listening on port ${port}`)
    })
})

