const express = require('express')
const router = express.Router();
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');
const config = require('../config');
const User = require('./userModal');

router.use(bodyParser.urlencoded({extended:true}));
router.use(bodyParser.json())

//get all users
router.get('/users',(req,res) => {
    User.find({},(err,data) => {
        if(err) throw err;
        res.send(data)
    })
})

//register users
router.post('/register',(req,res) => {
    // encrypt password
    var hashpassword = bcrypt.hashSync(req.body.password,8);
    var email =req.body.email
    User.find({email:email},(err,data) => {
        if(data.length>0){
            console.log(data)
            res.status(500).send({auth:false,token:'Email Already Token'})
        }else{
            User.create({
                name:req.body.name,
                email:req.body.email,
                password:hashpassword,
                phone:req.body.phone,
                role:req.body.role?req.body.role:'User'
            },(err,data) => {
                if(err) return res.status(500).send('Error While Register')
                res.status(200).send('Register Successful')
            })
        }
    })
    
})

//login user
router.post('/login',(req,res) => {
    User.findOne({email:req.body.email},(err,user) => {
        if(err) return  res.status(500).send({auth:false,token:'Error while login'})
        if(!user) return  res.status(500).send({auth:false,token:'No user Found'})
        else{
            // compare the password
            const passIsValid = bcrypt.compareSync(req.body.password,user.password)
            if(!passIsValid) return res.status(500).send({auth:false,token:'Invalid Password'})
            // in case password is valid
            var token = jwt.sign({id:user._id}, config.secret, {expiresIn:86400}) //24 hr
            res.send({auth:true,token:token})
        }
    })
})

//Profile
router.get('/userInfo',(req,res) => {
    var token = req.headers['x-access-token']
    if(!token)  return res.status(500).send({auth:false,token:'No Token Provided'})
    // verify token
    jwt.verify(token, config.secret, (err,user) =>{
        if(err) res.status(500).send({auth:false,token:'Invalid Token'})
        User.findById(user.id,(err,result) => {
            res.send(result)
        })
    })
})




module.exports =router