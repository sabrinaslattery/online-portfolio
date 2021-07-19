// Establish DB Connection
let mysql = require('mysql');
let display = express();
let con = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: 'ThePassword',
    database: 'online_portfolio'
});

//get reqs
//about biography
display.get('aboutMe', function(request, response){
    console.log('GET req success: aboutMe for About Me')
    con.query("SELECT synop FROM about", function (err, result){
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


