const express = require("express");
const app = express();
app.set('view engine', 'ejs');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
app.use(bodyParser.urlencoded({ extended: false }));



mongoose.connect('mongodb://localhost:27017/sih', {useNewUrlParser: true, useUnifiedTopology: true});


var tweetSchema = new mongoose.Schema({
    name:String,
    tw:String
})

var tweeter = mongoose.model('tweet', tweetSchema);


// let Parser = require('rss-parser');
// let parser = new Parser();
// var feed;


 
// (async () => {n
 
//     feed = await parser.parseURL('https://news.google.com/rss');

// })();


// app.get('/',(req,res)=>{
//     var title=[]
//     var link =[]
//     feed.items.forEach(obj => {
//         title.push(obj.title);
//         title.push(obj.link);
//     });
//     res.render('index',{news:title,newslink:link})
// });

// var tweet = [{
//     name:"unname",
//     tw:"Hello tweeter"
// },
// {
//     name:"ofte",
//     tw:"Welcome"
// },
// {
//     name:"gogy",
//     tw:"Hello folks"

// }
// ]

app.get('/',(req,res)=>{
    var tweet ;
    tweeter.find({},(err,twe)=>{
        tweet=twe;
        res.render('tweet',{tweet});
    })
    
})

app.get('/create',(req,res)=>{
    res.render('create')
})

user = [
    {
        username:"basith",
        password:"basith"
    }
]

app.get('/login',(req,res)=>{
    res.render('login')
})

app.post('/login',(req,res)=>{
    var username=  req.body.username;
    var password = req.body.password;
    user.forEach(obj => {
        if(obj["username"]===username){
            if(obj["password"]===password){
                res.redirect("/")
            }
            else{
                res.send("failed password");
            }
        }
        else{
            res.send("user not found");
        }
        
    });
})

app.post('/create',(req,res)=>{
    var username = req.body.username;
    var te = req.body.tweet;
    var stu = new tweeter({
        name : username,
        tw : te
    });
    stu.save();
    // tweet.push(stu)
    res.redirect('/')
})

port = 3000;

app.listen(port,(req,res)=>{
    console.log("Server started at 3000");
});