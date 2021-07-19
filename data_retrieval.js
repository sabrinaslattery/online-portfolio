// Establish DB Connection
const mysql = require('mysql');
const express = require('express');
var app = express();
const bodyparser = require('body-parser');
app.use(bodyparser.json());

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
app.listen(3000,()=>console.log('Server running at port number 3000'));

//About Me
app.get('/aboutMe', function(request, response){
    console.log('GET req success: aboutMe for About Me')
    //get about me biography
    con.query("SELECT Synopsis FROM About", (error, synopsis)=> {
        if (error) throw error;
        else{
            response.send(synopsis);
            console.log("Synopsis retrieved.");
        }
    });
});
//get work experience
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
