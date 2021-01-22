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

// Submit-Form Contact Change
    $("#contact-submit").click(function(event) {
        $('#contact-submit').val('Processing ...');
        $('#ContactForm').submit();
    });
    $('form').submit(function(event){
        setTimeout("location.reload(true);", 8000);
        $('#contact-submit').val('Thank you! Allow 2-3 days for a response.\b Page will automatically reload');
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

});

// Buttons for Dark Mode
// $(document).ready(function(){
//     $(".button-night").click(function() {
//         $("body").css({"background-color": "rgb(91, 88, 88)", "color": "black"});
//         $(".jumbotron h1").css({"color": "lightgrey"});
//         $(".sidenav").css({"background-color": "rgb(118, 72, 72)", "color": "lightgrey" });
//         $(".nav-tabs li a").css({"color": "lightgrey"});
//         $("button").css({"color": "rgb(140, 134, 134)", "background-color": "rgb(46, 44, 44)",
//         "border": "1px solid black"});
//         $
//     });
//     $(".button-reg").click(function() {
//         $("body").css({"background-color": "white", "color": "rgb(91, 88, 88)"});
//         $(".jumbotron h1").css({"color": "black"});
//         $(".sidenav").css({"background-color": "#f1f1f1", "color": "rgb(170, 108, 108)"});
//         $(".nav-tabs li a").css({"color": "rgb(170, 108, 108)"});
//         $("button").css({"color": "rgb(170, 108, 108)", "background-color": "white",
//         "border": "none"});
//     });
// });