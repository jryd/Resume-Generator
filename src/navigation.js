function allCalls(){
	saveLocal();
	
	normalMenu();
	$("section, .formwrap").hide();
	loadit();
	$("li").removeClass("active");
	$("#print_page").hide();
	$("html, body").animate({ scrollTop: 0 }, "slow");
}

function toggleMobileMenu(){
	$("nav").toggleClass("navexpanded");
}

function showPersonalInfo(){
	allCalls();
	$("#form, #section_information").show();
	$("#nav2").addClass("active");
}
function showStatement(){
	allCalls();
	$("#form, #section_statement").show();
	$("#nav3").addClass("active");
}
function showWork(){
	allCalls();
	$("#form, #section_work").show();
	$("#nav4").addClass("active");
}
function showProjects(){
	allCalls();
	$("#form, #section_projects").show();
	$("#nav5").addClass("active");
}
function showEducation(){
	allCalls();
	$("#form, #section_education").show();
	$("#nav6").addClass("active");
}
function showSkills(){
	allCalls();
	$("#form, #section_skills").show();
	$("#nav7").addClass("active");
}
function showSettings(){
	allCalls();
	$("#nav8").addClass("active");
	$("#print_page").show();
}



// Progress Bar Loading
function loadit(){
	var interval = 5, //How much to increase the progressbar per frame
        updatesPerSecond = 1000/60, //Set the nr of updates per second (fps)
        progress =  $('#loadProgress'),
        animator = function(){
            progress.val(progress.val()+interval);
            $('#val').text(progress.val());
            if ( progress.val()+interval < progress.attr('max')){
               setTimeout(animator, updatesPerSecond);
            } else { 
                progress.val(progress.attr('max'));
                setTimeout(clearLoad, 300);
            }
        }
    setTimeout(animator, updatesPerSecond);
}
// Reset loader back to 0;
function clearLoad(){
	$("#loadProgress").val(0);
}




//Job switching control
function loadJob1(){
	$("#job2btn, #job3btn").removeClass("activedot");
	$("#job1btn").addClass("activedot");
	$("#job2, #job3").fadeOut(250);
	$("#job1").delay(250).fadeIn(250);
}
function loadJob2(){
	$("#job1btn, #job3btn").removeClass("activedot");
	$("#job2btn").addClass("activedot");
	$("#job1, #job3").fadeOut(250);
	$("#job2").delay(250).fadeIn(250);
}
function loadJob3(){
	$("#job2btn, #job1btn").removeClass("activedot");
	$("#job3btn").addClass("activedot");
	$("#job1, #job2").fadeOut(250);
	$("#job3").delay(250).fadeIn(250);
}

//Project switching control
function loadProj1(){
	$("#proj2btn, #proj3btn").removeClass("activedot");
	$("#proj1btn").addClass("activedot");
	$("#proj2, #proj3").fadeOut(250);
	$("#proj1").delay(250).fadeIn(250);
}
function loadProj2(){
	$("#proj1btn, #proj3btn").removeClass("activedot");
	$("#proj2btn").addClass("activedot");
	$("#proj1, #proj3").fadeOut(250);
	$("#proj2").delay(250).fadeIn(250);
}
function loadProj3(){
	$("#proj2btn, #proj1btn").removeClass("activedot");
	$("#proj3btn").addClass("activedot");
	$("#proj1, #proj2").fadeOut(250);
	$("#proj3").delay(250).fadeIn(250);
}


//Education switching control
function loadEdu1(){
	$("#edu2btn, #edu3btn").removeClass("activedot");
	$("#edu1btn").addClass("activedot");
	$("#edu2, #edu3").fadeOut(250);
	$("#edu1").delay(250).fadeIn(250);
}
function loadEdu2(){
	$("#edu1btn, #proj3btn").removeClass("activedot");
	$("#edu2btn").addClass("activedot");
	$("#edu1, #edu3").fadeOut(250);
	$("#edu2").delay(250).fadeIn(250);
}
function loadEdu3(){
	$("#edu2btn, #edu1btn").removeClass("activedot");
	$("#edu3btn").addClass("activedot");
	$("#edu1, #edu2").fadeOut(250);
	$("#edu3").delay(250).fadeIn(250);
}