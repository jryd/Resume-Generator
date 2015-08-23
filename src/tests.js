function loadTestData(){

	$( document ).ready(function() {
    
    $("#name").val("Mitch Samuels");
    $("#email").val("mitch@mitchs.co");
    $("#phone").val("5073305897");
    $("#location").val("Madison WI");
    $("#link").val("mitchs.co");
    

    $("#statement-title").val("Personal Statement");
    $("#statement").val("It's completely free so we must collect and sell your information, right? Nah. Nothing you enter on this site is stored or sent over servers. ever. but we do use HTML5's localstorage to save what you entered on your computer so you can come back end edit it later (so don't clear your cache!) It's completely free so we must collect and sell your information, right? Nah. Nothing you enter on this site is stored or sent over servers. ever. but we do use HTML5's localstorage to save what you entered on your computer so you can come back end edit it later (so don't clear your cache!) It's completely free so we must collect and sell your information, right? Nah. Nothing you enter on this site is stored or sent over servers. ever. but we do use HTML5's localstorage to save what you entered on your computer so you can come back end edit it later (so don't clear your cache!) It's completely free so we must collect and sell your information, right? Nah. Nothing you enter on this site is stored or sent over servers. ever. but we do use HTML5's localstorage to save what you entered on your computer so you can come back end edit it later (so don't clear your cache!)");

    $("#emp11, #emp21, #emp31").val("Export Abroad");
    $("#emp12, #emp22, #emp32").val("Madison WI");
    $("#emp13, #emp23, #emp33").val("July 2014 - Present");
    $("#emp14, #emp24, #emp34").val("Export abroad is a big data company who helps other large companies and corporations identify target markets and expand across the globe.");
    $("#emp15, #emp25, #emp35").val("Front End Engineer");
    $("#emp16, #emp26, #emp36").val("It's completely free so we must collect and sell your information, right? Nah. Nothing you enter on this site is stored or sent over servers. ever. but we do use HTML5's localstorage to save what you entered on your computer so you can come back end edit it later (so don't clear your cache!) ");

    $("#projsectiontitle").val("Volunteer Experience");
    $("#proj1title, #proj2title, #proj3title").val("Volunteering at animal shelter");
    $("#proj1desc, #proj2desc, #proj3desc").val("It's completely free so we must collect and sell your information, right? Nah. Nothing you enter on this site is stored or sent over servers. ever. but we do use HTML5's localstorage to save what you entered on your computer so you can come back end edit it later (so don't clear your cache!) ");

    $("#edu11, #edu21, #edu31").val("Bachelor of Arts in Computer Science");
    $("#edu12, #edu22, #edu32").val("University of Wisconsin - Madison");
    $("#edu13, #edu23, #edu33").val("Madison WI");
    $("#edu14, #edu24, #edu34").val("2019");
    $("#edu15, #edu25, #edu35").val("2.85");

    $("#skills").val("html, css, javascript, whatever, other, another, cool, dogs, cats");






    // Statement
    $("#pdf_statement_title").html($("#statement-title").val());
    $("#pdf_statement").html($("#statement").val());

    // Work1
    $("#emp11fill").html($("#emp11").val());
    $("#emp12fill").html($("#emp12").val());
    $("#emp13fill").html($("#emp13").val());
    $("#emp14fill").html($("#emp14").val());
    $("#emp15fill").html($("#emp15").val());
    $("#emp16fill").html($("#emp16").val());

    // Work2
    $("#emp21fill").html($("#emp21").val());
    $("#emp22fill").html($("#emp22").val());
    $("#emp23fill").html($("#emp23").val());
    $("#emp24fill").html($("#emp24").val());
    $("#emp25fill").html($("#emp25").val());
    $("#emp26fill").html($("#emp26").val());

    // Work3
    $("#emp31fill").html($("#emp31").val());
    $("#emp32fill").html($("#emp32").val());
    $("#emp33fill").html($("#emp33").val());
    $("#emp34fill").html($("#emp34").val());
    $("#emp35fill").html($("#emp35").val());
    $("#emp36fill").html($("#emp36").val());

    
});

}