// Establish DB Connection
const mysql = require('mysql');
const express = require('express');
var app = express();

var con = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: 'ThePassword',
    database: 'online_portfolio'
});

//check connection
con.connect((err)=>{
    if(!err)
        console.log("Connection success!");
    else
        console.log("Connection failure: \n Error:"+ JSON.stringify(err,undefined,2));
});
//establish port
app.listen(3000,()=>console.log('Server running at port number 3000'));

// Set up HTML views
app.set('view engine', 'pug');
const url = require('url');
const webURL = new URL('https://sabrinaslattery.github.io/online-portfolio/index.html');

//Access css files and images
app.use(express.static('../Online-portfolio'));
app.use(express.static('../Online-portfolio/portfolio_images'));

//Get page data
app.get('/', function(req, res){
    res.sendFile('PortfolioAboutMe.html', {root: __dirname})
});
app.use(express.json());
app.use(express.json({extended:false}));

//Get About Me Synopsis
app.get('/aboutMe', function(request, response){
    console.log('GET req success: aboutMe for About Me')
    con.query("SELECT Synopsis FROM About", (error, synopsis)=> {
        if (error) throw error;
        else{
            response.send(synopsis);
            response.render('/synopsis',{synopsis: synopsis});
            console.log("Synopsis retrieved.");
        }
    });
});

//Get work experience
app.get('/workEx', function(req,res){
    console.log('GET req success: workEx for About Me')
    con.query("SELECT * FROM WorkExperience", (err, workex)=>{
        if (err) throw err;
        else{
            res.send(workex);
            console.log("Work experience retrieved.");
        }
    });
});
//get coursework
app.get('/coursework', function(req,res){
    console.log('GET req success: Coursework for About Me')
    con.query("SELECT * FROM Courses", (e, courses)=>{
        if (e) throw e;
        else{
            res.send(courses);
            console.log("Coursework retrieved.");
        }
    });
});

//get all project titles and descriptions
app.get('/projectsDesc', function(request, response){
    console.log('GET req success: projectsDesc for Portfolio')
    con.query("SELECT * FROM Projects", function (error, result){
        if (error) throw error;
        else{
            response.send(result);
            console.log("Project details retrieved.")
        }
    });
});


//rendering
const http = require('http');

function onRequest(req, res) {

};