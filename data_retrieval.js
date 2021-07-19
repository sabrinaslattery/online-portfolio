// Establish DB Connection
var mysql = require('mysql');
var express = require('express');
var display = express();
var con = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: 'ThePassword',
    database: 'online_portfolio'
});

//get reqs
//about biography
display.get('aboutMe', function(request, response){
    console.log('GET req success: aboutMe for About Me')
    con.query("SELECT Synopsis FROM About", function (err, result){
        if (err) throw err;
        else{
            response.send(result)
        }
    });
});

//project titles and descriptions
display.get('projectsDesc', function(request, response){
    console.log('GET req success: projectsDesc for Portfolio')
    con.query("SELECT * FROM Projects", function (error, result){
        if (error) throw error;
        else{
            response.send(result)
        }
    });
});


