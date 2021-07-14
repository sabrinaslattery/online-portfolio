// import React from 'react'

//Section Tag Animation
$(document).ready(function() {
    $(".animation1").click(function() {
        var section1 = $("Portfolio.html");
        section1.animate({opacity: '0.0'}, "slow");
        section1.animate({opacity: '1.0'}, "slow");
    });

    $(".animationC").click(function() {
        var sectionC = $("PortfolioProjects&Resume.html");
        sectionC.animate({opacity: '0.0'}, "slow");
        sectionC.animate({opacity: '1.0'}, "slow");
    });

    $(".animation2").click(function() {
        var section2 = $("PortfolioPhotos.html");
        section2.animate({opacity: '0.0'}, "slow");
        section2.animate({opacity: '1.0'}, "slow");
    });

    $(".animation3").click(function() {
        var section3 = $("PortfolioContactMe.html");
        section3.animate({opacity: '0.0'}, "slow");
        section3.animate({opacity: '1.0'}, "slow");
    });

    $("#contact-submit").click(function(event) {
        $('#contact-submit').val('Processing ...');
        $('#ContactForm').submit();
    });

    $('form').submit(function(event){
        setTimeout("location.reload(true);", 8000);
        $('#contact-submit').val('Thank you! Allow 1-2 days for a response.\b Page will automatically reload');
    });
    
// Collapsible buttons
    var coll = document.getElementsByClassName("collapsible");
    var i;
    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "inherit") {
                content.style.display = "none";
            } else {
                content.style.display = "inherit";
            }
        });
    }

// Establish Connection to DB
    let mysql = require('mysql');
    let con = mysql.createConnection({
        host:'localhost',
        user: 'root',
        password: 'ThePassword',
        database: 'online_portfolio'
    });
    con.connect(function(error) {
        if (err) throw err;
        con.query("SELECT * FROM online_portfolio", function(err, result, fileds){
            if (err) throw err;
            console.log(result);
        });
    });


// Retrieve Data
    function getProjects(link) {
        if (link = "") {
            document.getElementById("projectLink").innerHTML = "";
            return;
        }
        const xhttp  = new XMLHttpRequest();
        //load project information
        xhttp.onload = function() {
            document.getElementById("projectLink").innerHTML = this.responseText;
        }
        xhttp.open("GET", "")
    }
});