$( document ).ready(function() {


    if (localStorage.getItem("name") === null || localStorage.getItem("name") == "") {
        $("#welcome_back").hide();
    }else{
        $("#welcome_back").show();
    }



});




$("#mobile_menu_btn").click(function(){
    $("#mobile_menu_btn_icon").toggleClass("ion-navicon");
    $("#mobile_menu_btn_icon").toggleClass("ion-close");
    $("nav").toggleClass("navexpanded");
});
function normalMenu(){
    $("#mobile_menu_btn_icon").addClass("ion-navicon");
    $("#mobile_menu_btn_icon").removeClass("ion-close");
}



$("#welcome_close").click(function(){
    $("#welcome_back").fadeOut(300);
});

$("#welcome_load").click(function(){
    $("#welcome_back").fadeOut(300);
    $('input[type="text"]').each(function(){    
        var id = $(this).attr('id');
        var value = localStorage.getItem(id);
        $(this).val(value);
    }); 
    $('textarea').each(function(){    
        var id = $(this).attr('id');
        var value = localStorage.getItem(id);
        $(this).val(value);
    }); 
});



//Save/get local storage
function saveLocal(){
    $('input[type="text"]').each(function(){    
        var id = $(this).attr('id');
        var value = $(this).val();
       	localStorage.setItem(id, value);
    }); 
    $('textarea').each(function(){    
        var id = $(this).attr('id');
        var value = $(this).val();
       	localStorage.setItem(id, value);
    });   
}


//===========================
//Generate the PDF, fill text
//===========================
function generatePDF(){

    // Personal Info
    $("#namefill").html($("#name").val());
    $("#emailfill").html($("#email").val());
    $("#phonefill").html($("#phone").val());
    $("#locationfill").html($("#location").val());
    $("#linkfill").html($("#link").val());

    // Statement
    $("#statement-titlefill").html($("#statement-title").val());
    $("#statementfill").html($("#statement").val());

    // Work1
    $("#emp11fill").html($("#emp11").val());
    $("#emp12fill").html($("#emp12").val());
    $("#emp13fill").html($("#emp13").val());
    $("#emp14fill").html($("#emp14").val());
    $("#emp15fill").html($("#emp15").val());
    emp1bullet = $("#emp16").val().replace(/\*/g, '&nbsp; &nbsp; \u2219');
    emp1final = emp1bullet.replace(/\n\r?/g, '<br/>');
    $("#emp16fill").html(emp1final);

    // Work2
    $("#emp21fill").html($("#emp21").val());
    $("#emp22fill").html($("#emp22").val());
    $("#emp23fill").html($("#emp23").val());
    $("#emp24fill").html($("#emp24").val());
    $("#emp25fill").html($("#emp25").val());
    emp2bullet = $("#emp26").val().replace(/\*/g, '&nbsp; &nbsp; \u2219');
    emp2final = emp2bullet.replace(/\n\r?/g, '<br/>');
    $("#emp26fill").html(emp2final);

    // Work3
    $("#emp31fill").html($("#emp31").val());
    $("#emp32fill").html($("#emp32").val());
    $("#emp33fill").html($("#emp33").val());
    $("#emp34fill").html($("#emp34").val());
    $("#emp35fill").html($("#emp35").val());
    emp3bullet = $("#emp36").val().replace(/\*/g, '&nbsp; &nbsp; \u2219');
    emp3final = emp3bullet.replace(/\n\r?/g, '<br/>');
    $("#emp36fill").html(emp3final);

    // Projects
    $("#projsectiontitlefill").html($("#projsectiontitle").val());
    // Project 1
    $("#proj1titlefill").html($("#proj1title").val());
    proj1descbullet = $("#proj1desc").val().replace(/\*/g, '&nbsp; &nbsp; \u2219');
    proj1descfinal = proj1descbullet.replace(/\n\r?/g, '<br/>');
    $("#proj1descfill").html(proj1descfinal);

    // Project 2
    $("#proj2titlefill").html($("#proj2title").val());
    proj2descbullet = $("#proj2desc").val().replace(/\*/g, '&nbsp; &nbsp; \u2219');
    proj2descfinal = proj2descbullet.replace(/\n\r?/g, '<br/>');
    $("#proj2descfill").html(proj2descfinal);

    // Project 3
    $("#proj3titlefill").html($("#proj3title").val());
    proj1descbullet = $("#proj3desc").val().replace(/\*/g, '&nbsp; &nbsp; \u2219');
    proj1descfinal = proj1descbullet.replace(/\n\r?/g, '<br/>');
    $("#proj3descfill").html(proj1descfinal);




    // Education 1
    $("#edu11fill").html($("#edu11").val());
    $("#edu12fill").html($("#edu12").val());
    $("#edu13fill").html($("#edu13").val());
    $("#edu14fill").html($("#edu14").val());
    $("#edu15fill").html($("#edu15").val());

    // Education 2
    $("#edu21fill").html($("#edu21").val());
    $("#edu22fill").html($("#edu22").val());
    $("#edu23fill").html($("#edu23").val());
    $("#edu24fill").html($("#edu24").val());
    $("#edu25fill").html($("#edu25").val());

    // Education 3
    $("#edu31fill").html($("#edu31").val());
    $("#edu32fill").html($("#edu32").val());
    $("#edu33fill").html($("#edu33").val());
    $("#edu34fill").html($("#edu34").val());
    $("#edu35fill").html($("#edu35").val());

    // Skills
    skillssplit = $("#skills").val().replace(/,/g, ' \u2219');
    $("#skillsfill").html(skillssplit);

}

// Change settings
function getFont(fam) {
    $("#print_page").removeClass("default_lato");
    $("#print_page").css("font-family", fam.value);
}
function getAlignment(where) {
   $("#print_page").css("text-align", where.value);
   $("#namefill").css("text-align", where.value);
}
function getSpacing(height) {
   $(".increaseLH").css("line-height", height.value);
   alert(height.value);
}
function getHR(answer) {
   if(answer.value == "no"){
        $(".hor").css({'opacity':0});
   }else if(answer.value == "yes"){
        $(".hor").css({'opacity':1});
   }
}


// Printing Function;
function printPage(){
    $("#print_page").removeClass("shrunken");
    window.print();
    $("#print_page").addClass("shrunken");
}


//Check for empty values, hide empties.
function checkEmpty(){

   

    //Email
    if($("#emailfill").html() == ""){$("#emailwrap").hide(); }else{$("#emailwrap").show();}
    //Email
    if($("#phonefill").html() == ""){$("#phonewrap").hide(); }else{$("#phonewrap").show();}
    //Location
    if($("#locationfill").html() == ""){$("#locationwrap").hide(); }else{$("#locationwrap").show();}
    //Link
    if($("#linkfill").html() == ""){$("#linkfill").hide(); }else{$("#linkfill").show();}

    //Statement
    if($("#statement-titlefill").html() == ""){$(this).hide();}else{$(this).show();}
    if($("#statementfill").html() == "" && $("#statement-titlefill").html() == ""){
        $("#pdf_statement_section").hide();
    }else{
        $("#pdf_statement_section").show();
    }

    //Work Control
    // Hide sections if title missing
    if($("#emp11fill").html()==""){$("#pdf_job1").hide();}else{$("#pdf_job1").show();}
    if($("#emp21fill").html()==""){$("#pdf_job2").hide();}else{$("#pdf_job2").show();}
    if($("#emp31fill").html()==""){$("#pdf_job2").hide();}else{$("#pdf_job3").show();}
    if($("#emp11fill").html()=="" && $("#emp21fill").html()=="" && $("#emp31fill").html()==""){$("#pdf_experience_section").hide();}else{$("#pdf_experience_section").show();}

    var a = ["#emp12fill", "#emp13fill", "#emp14fill", "#emp15fill", "#emp16fill", "#emp22fill", "#emp23fill", "#emp24fill", "#emp25fill", "#emp26fill", "#emp32fill", "#emp33fill", "#emp34fill", "#emp35fill", "#emp36fill", "#projsectiontitlefill", "#edu12fill", "#edu13fill", "#edu14fill", "#edu15fill", "#edu22fill", "#edu23fill", "#edu24fill", "#edu25fill", "#edu32fill", "#edu33fill", "#edu34fill", "#edu35fill"];
    a.forEach(function(entry) {
        if($(entry).html()==""){$(entry).hide();}else{$(entry).show();}
    });


    //Hide projs if no title
    if($("#proj1titlefill").html()==""){$("#pdf_proj_1").hide();}else{$("#pdf_proj_1").show();}
    if($("#proj2titlefill").html()==""){$("#pdf_proj_2").hide();}else{$("#pdf_proj_2").show();}
    if($("#proj3titlefill").html()==""){$("#pdf_proj_3").hide();}else{$("#pdf_proj_3").show();}
    if($("#proj1titlefill").html()=="" && $("#proj2titlefill").html()=="" && $("#proj3titlefill").html()==""){$("#pdf_projects_section").hide();}else{$("#pdf_projects_section").show();}


    //Hide educations if no degree
    if($("#edu11fill").html()==""){$("#pdf_edu_1").hide();}else{$("#pdf_edu_1").show();}
    if($("#edu21fill").html()==""){$("#pdf_edu_2").hide();}else{$("#pdf_edu_2").show();}
    if($("#edu31fill").html()==""){$("#pdf_edu_3").hide();}else{$("#pdf_edu_3").show();}
    if($("#edu11fill").html()=="" && $("#edu21fill").html()=="" && $("#edu31fill").html()==""){$("#pdf_education_section").hide();}else{$("#pdf_education_section").show();}


    //Hide skills if empty
    if($("#skillsfill").html()==""){$("#pdf_skills_section").hide();}else{$("#pdf_skills_section").show();}

}
