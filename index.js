const express = require("express");
const app = express();
app.set('view engine', 'ejs');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))

// let Parser = require('rss-parser');
// let parser = new Parser();
// var feed;


 
// (async () => {
 
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

var tweet = [{
    name:"unname",
    tw:"Hello tweeter"
},
{
    name:"ofte",
    tw:"Welcome"
},
{
    name:"gogy",
    tw:"Hello folks"

}
]

app.get('/',(req,res)=>{
    res.render('tweet',{tweet});
})

app.get('/create',(req,res)=>{
    res.render('create')
})

app.post('/create',(req,res)=>{
    var username =req.body.username;
    var te = req.body.tweet;
    var op ={
        name:username,
        tw:te
    }
    tweet.push(op)
    res.redirect('/')
})

port = 3000;

app.listen(port,(req,res)=>{
    console.log("Server started at 3000");
});