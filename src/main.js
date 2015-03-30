$( document ).ready(function() {



	//Test for local storage
	loadLocal();
	$("#hide_preview").click();
	$("#print_page").hide();

	//Statement Character Count
	var text_max = 1200;
    $('#statement_remaining').html(text_max);
    $('#personal_statement_input').keyup(function() {
        var text_length = $('#personal_statement_input').val().length;
        var text_remaining = text_max - text_length;
        $('#statement_remaining').html(text_remaining);
    });

    //If they have been to the site, show continue editing button
	if (localStorage.name) {
	    $("#intro_reset").show();
		$("#intro_begin").html("Continue Editing <i class='ion-arrow-right-c'></i>");
	}

});


//Reset local storage if it exists.
$("#intro_reset").click(function(){
	$(this).hide();
	$("#confirm_reset").show();
})
$("#clear_data_yes").click(function(){
	localStorage.clear();
	location.reload();
})
$("#clear_data_no").click(function(){
	$("#confirm_reset").hide();
	$("#intro_reset").show();
})


//Branding link
$("#branding").click(function(){
	window.open("http://mitchs.co");
})




//Navigation
function letsHide(){
	$("nav > ul > li").removeClass("activated");
	$("#promo").hide();
	$("#intro_box, #the_personal, #the_statement, #the_work, #the_education, #the_skills, #settings, #thanks").hide();
	saveFields();
}
function loadIntro(){
	letsHide();
	$("#intro_box").show();
	$("#promo").show();
	$("#progressbar").val(1);
	$("#tab_intro").addClass("activated");
}
function loadPersonal(){
	letsHide();
	$("#the_personal").show();
	$("#personal_name_input").focus();
	$("#progressbar").val(12);
	$("#tab_1").addClass("activated");
}
function loadStatement(){
	letsHide();
	$("#the_statement").show();
	$("#statement_title").focus();
	$("#progressbar").val(24);
	$("#tab_2").addClass("activated");
}
function loadWork(){
	letsHide();
	$("#the_work").show();
	$("#employer").focus();
	$("#progressbar").val(36);
	$("#tab_3").addClass("activated");
}
function loadEducation(){
	letsHide();
	$("#the_education").show();
	$("#degree").focus();
	$("#progressbar").val(48);
	$("#tab_4").addClass("activated");
}
function loadSkills(){
	letsHide();
	$("#the_skills").show();
	$("#skillsinput").focus();
	$("#progressbar").val(60);
	$("#tab_5").addClass("activated");
}
function loadSettings(){
	letsHide();
	$("#settings").show();
	$("#progressbar").val(80);
	$("#tab_6").addClass("activated");
}
function loadThanks(){
	letsHide();
	$("#thanks").show();
	$("#progressbar").val(80);
}

$("#tab_intro").click(function(){loadIntro();})
$("#tab_1, #intro_begin").click(function(){loadPersonal();})
$("#tab_2, #personal_continue").click(function(){loadStatement();})
$("#tab_3, #statement_continue").click(function(){loadWork();})
$("#tab_4, #work_continue").click(function(){loadEducation();})
$("#tab_5, #education_continue").click(function(){loadSkills();})
$("#tab_6, #skills_continue").click(function(){loadSettings();})
















// Settings Control
$("#settings > ul > li").click(function(){
	if($(this).find("input").is(':checked')){$(this).find("input").attr('checked', false);
	}else{$(this).find("input").attr('checked', true);
	}
	updateSettings();
})
$('input[type=checkbox]').click(function(){
	updateSettings();
	event.stopPropagation();
})
//Line height and element spacing
lineHeight = 1.6;
defaultLineHeight = 0;
$("#increase_line_height").click(function(){
	lineHeight = lineHeight+0.1;
	defaultLineHeight++;
	$("#line_height_counter").text(defaultLineHeight);
	$(".fill p").css("lineHeight", lineHeight+"em");
})
$("#decrease_line_height").click(function(){
	lineHeight = lineHeight-0.1;
	defaultLineHeight--;
	$("#line_height_counter").text(defaultLineHeight);
	$(".fill p").css("lineHeight", lineHeight+"em");
})
function updateSettings(){

	if ($('#serifyes').is(':checked')) {
		$("#print_page").removeClass("sans_resume");
		$("#print_page").fadeIn(0);
		$("#print_page").fadeOut(100);
		$("#print_page").addClass("serif_resume");
	}else {
		$("#print_page").addClass("sans_resume");
		$("#print_page").fadeIn(0);
		$("#print_page").fadeOut(100);
		$("#print_page").removeClass("serif_resume");
	}
	if ($('#serifyes').is(':checked')) {
		$("#print_page").removeClass("sans_resume");
		$("#print_page").addClass("serif_resume");
	}else {
		$("#print_page").addClass("sans_resume");
		$("#print_page").removeClass("serif_resume");
	}

	//Remove HRs
	if($("#removehr").is(':checked')){
		$("hr").css("opacity", "0");
	}else{
		$("hr").css("opacity", "1");
	}

}









// Final button, generate PDF
$("#generate").click(function(){


	updateSettings();

	$("#print_page").show();
	generatePDF();
	$("#tips").show();
	window.print();
	saveLocal(); 
	$("#tips").hide();
	$("#print_page").hide();

	$("#settings").hide();
	$("#thanks").show();
	$("#tab_6").removeClass("activated");

})

//After generation, return to editing
$("#backtoedit").click(function(){
	navCounter =  10;
	$("nav > ul > li").removeClass("activated");
	$("#thanks").hide();
	checkNavPos();
})


// Preview Button
$("#preview_btn").click(function(){
	saveFields();
	updateSettings();
	generatePDF();
	checkEmpty();
	$("#print_page").animate({ zIndex: 1000000 });
	$("#pdf_lightbox").fadeIn(100);
	$("#save_from_preview").fadeIn(100);
	$("#print_page").fadeIn(100);
})
// Hide Preview
$("#hide_preview").click(function(){
	$("#print_page").fadeOut(0);

	// $("#adjustments").fadeOut(0);
	$("#pdf_lightbox").delay(100).fadeOut(100);

	$("#print_page").animate({ zIndex: 0 });
})



function saveFields(){
	user_name = $("#personal_name_input").val();
	user_email = $("#personal_email_input").val();
	user_phone = $("#personal_phone_input").val();
	user_location = $("#personal_location_input").val();
	user_link = $("#personal_link_input").val();

	user_statement_title = $("#statement_title").val();
	user_statement = $("#personal_statement_input").val();

	job_1_emp = $("#employer").val();
	job_1_loc = $("#job_location").val();
	job_1_time = $("#job_time").val();
	job_1_emp_desc = $("#employer_desc").val();
	job_1_title = $("#title").val();
	job_1_desc = $("#job_desc").val();
	job_2_emp = $("#employer2").val();
	job_2_loc = $("#job_location2").val();
	job_2_time = $("#job_time2").val();
	job_2_emp_desc = $("#employer_desc2").val();
	job_2_title = $("#title2").val();
	job_2_desc = $("#job_desc2").val();
	job_3_emp = $("#employer3").val();
	job_3_loc = $("#job_location3").val();
	job_3_time = $("#job_time3").val();
	job_3_emp_desc = $("#employer_desc3").val();
	job_3_title = $("#title3").val();
	job_3_desc = $("#job_desc3").val();

	degree_1 = $("#degree").val();
	school_1 = $("#school").val();
	school_loc_1 = $("#school_location").val();
	grad_1 = $("#graduation").val();
	gpa_1 = $("#gpa").val();
	degree_2 = $("#degree2").val();
	school_2 = $("#school2").val();
	school_loc_2 = $("#school_location2").val();
	grad_2 = $("#graduation2").val();
	gpa_2 = $("#gpa2").val();
	degree_3 = $("#degree3").val();
	school_3 = $("#school3").val();
	school_loc_3 = $("#school_location3").val();
	grad_3 = $("#graduation3").val();
	gpa_3 = $("#gpa3").val();

	
	user_skills = $("#skillsinput").val();

	saveLocal();
}

// Local storage stuff
function saveLocal(){
	localStorage.setItem('name', user_name);
	localStorage.setItem('email', user_email);
	localStorage.setItem('phone', user_phone);
	localStorage.setItem('location', user_location);
	localStorage.setItem('url', user_link);

	localStorage.setItem('statementTitle', user_statement_title);
	localStorage.setItem('statement', user_statement);

	localStorage.setItem('emp1', job_1_emp);
	localStorage.setItem('jobLoc1', job_1_loc);
	localStorage.setItem('jobTime1', job_1_time);
	localStorage.setItem('jobEmpDesc1', job_1_emp_desc);
	localStorage.setItem('jobTitle1', job_1_title);
	localStorage.setItem('jobDesc1', job_1_desc);
	localStorage.setItem('emp2', job_2_emp);
	localStorage.setItem('jobLoc2', job_2_loc);
	localStorage.setItem('jobTime2', job_2_time);
	localStorage.setItem('jobEmpDesc2', job_2_emp_desc);
	localStorage.setItem('jobTitle2', job_2_title);
	localStorage.setItem('jobDesc2', job_2_desc);
	localStorage.setItem('emp3', job_3_emp);
	localStorage.setItem('jobLoc3', job_3_loc);
	localStorage.setItem('jobTime3', job_3_time);
	localStorage.setItem('jobEmpDesc3', job_3_emp_desc);
	localStorage.setItem('jobTitle3', job_3_title);
	localStorage.setItem('jobDesc3', job_3_desc);

	localStorage.setItem('degree1', degree_1);
	localStorage.setItem('school1', school_1);
	localStorage.setItem('schoolLoc1', school_loc_1);
	localStorage.setItem('grad1', grad_1);
	localStorage.setItem('gpa1', gpa_1);
	localStorage.setItem('degree2', degree_2);
	localStorage.setItem('school2', school_2);
	localStorage.setItem('schoolLoc2', school_loc_2);
	localStorage.setItem('grad2', grad_2);
	localStorage.setItem('gpa2', gpa_2);
	localStorage.setItem('degree3', degree_3);
	localStorage.setItem('school3', school_3);
	localStorage.setItem('schoolLoc3', school_loc_3);
	localStorage.setItem('grad3', grad_3);
	localStorage.setItem('gpa3', gpa_3);

	localStorage.setItem('skills', user_skills);

}
function loadLocal(){
	$("#personal_name_input").val(localStorage.getItem('name'));
	$("#personal_email_input").val(localStorage.getItem('email'));
	$("#personal_phone_input").val(localStorage.getItem('phone'));
	$("#personal_location_input").val(localStorage.getItem('location'));
	$("#personal_link_input").val(localStorage.getItem('url'));

	$("#personal_statement_input").val(localStorage.getItem('statementTitle'));
	$("#statement_title").val(localStorage.getItem('statement'));

	$("#employer").val(localStorage.getItem('emp1'));
	$("#job_location").val(localStorage.getItem('jobLoc1'));
	$("#job_time").val(localStorage.getItem('jobTime1'));
	$("#employer_desc").val(localStorage.getItem('jobEmpDesc1'));
	$("#title").val(localStorage.getItem('jobTitle1'));
	$("#job_desc").val(localStorage.getItem('jobDesc1'));
	$("#employer2").val(localStorage.getItem('emp2'));
	$("#job_location2").val(localStorage.getItem('jobLoc2'));
	$("#job_time2").val(localStorage.getItem('jobTime2'));
	$("#employer_desc2").val(localStorage.getItem('jobEmpDesc2'));
	$("#title2").val(localStorage.getItem('JobTitle2'));
	$("#job_desc2").val(localStorage.getItem('JobDesc2'));
	$("#employer3").val(localStorage.getItem('emp3'));
	$("#job_location3").val(localStorage.getItem('JobLoc3'));
	$("#job_time3").val(localStorage.getItem('jobTime3'));
	$("#employer_desc3").val(localStorage.getItem('jobEmpDesc3'));
	$("#title3").val(localStorage.getItem('jobTitle3'));
	$("#job_desc3").val(localStorage.getItem('jobDesc3'));


	$("#degree").val(localStorage.getItem('degree1'));
	$("#school").val(localStorage.getItem('school1'));
	$("#school_location").val(localStorage.getItem('schoolLoc1'));
	$("#graduation").val(localStorage.getItem('grad1'));
	$("#gpa").val(localStorage.getItem('gpa1'));
	$("#degree2").val(localStorage.getItem('degree2'));
	$("#school2").val(localStorage.getItem('school2'));
	$("#school_location2").val(localStorage.getItem('schoolLoc2'));
	$("#graduation2").val(localStorage.getItem('grad2'));
	$("#gpa2").val(localStorage.getItem('gpa2'));
	$("#degree3").val(localStorage.getItem('degree3'));
	$("#school3").val(localStorage.getItem('school3'));
	$("#school_location3").val(localStorage.getItem('schoolLoc3'));
	$("#graduation3").val(localStorage.getItem('grad3'));
	$("#gpa3").val(localStorage.getItem('gpa3'));


	$("#skillsinput").val(localStorage.getItem('skills'));

	if (localStorage.edu1) {
		$("#enable_edu_1").prop('checked', true);
		$('#edu_one > input').prop('disabled', false);
	}
	if (localStorage.edu2) {
		$("#enable_edu_2").prop('checked', true);
		$('#edu_two > input').prop('disabled', false);
	}
	if (localStorage.edu3) {
		$("#enable_edu_3").prop('checked', true);
		$('#edu_three > input').prop('disabled', false);
	}
	if (localStorage.work1) {
		$("#enable_work_1").prop('checked', true);
		$('#work_one > input, #work_one > textarea').prop('disabled', false);
	}
	if (localStorage.work2) {
		$("#enable_work_2").prop('checked', true);
		$('#work_two > input, #work_two > textarea').prop('disabled', false);
	}
	if (localStorage.work3) {
		$("#enable_work_3").prop('checked', true);
		$('#work_three > input, #work_three > textarea').prop('disabled', false);
	}
}

// Generate the Actual PDF and call print function
function generatePDF(){

	checkEmpty();

	$("#pdf_name").html(user_name);
	$("#pdf_email").html(user_email);
	$("#pdf_phone").html(user_phone);
	$("#pdf_location").html(user_location);
	$("#pdf_link").html(user_link);
	$("#pdf_statement_title").html(user_statement_title);
	$("#pdf_statement").html(user_statement);

	job_1_desc_bullets = job_1_desc.replace(/\*/g, '&nbsp; &nbsp; \u2219');
	job_2_desc_bullets = job_2_desc.replace(/\*/g, '&nbsp; &nbsp; \u2219');
	job_3_desc_bullets = job_3_desc.replace(/\*/g, '&nbsp; &nbsp; \u2219');
	job_1_desc_html = job_1_desc_bullets.replace(/\n\r?/g, '<br/>');
	job_2_desc_html = job_2_desc_bullets.replace(/\n\r?/g, '<br/>');
	job_3_desc_html = job_3_desc_bullets.replace(/\n\r?/g, '<br/>');

	$("#job_1_employer").html(job_1_emp);
	$("#job_1_loc").html(job_1_loc);
	$("#job_1_time").html(job_1_time);
	$("#pdf_job1_emp_desc").html(job_1_emp_desc);
	$("#job1_title").html(job_1_title);
	$("#pdf_job1_job_desc").html(job_1_desc_html);
	$("#job_2_employer").html(job_2_emp);
	$("#job_2_loc").html(job_2_loc);
	$("#job_2_time").html(job_2_time);
	$("#pdf_job2_emp_desc").html(job_2_emp_desc);
	$("#job2_title").html(job_2_title);
	$("#pdf_job2_job_desc").html(job_2_desc_html);
	$("#job_3_employer").html(job_3_emp);
	$("#job_3_loc").html(job_3_loc);
	$("#job_3_time").html(job_3_time);
	$("#pdf_job3_emp_desc").html(job_3_emp_desc);
	$("#job3_title").html(job_3_title);
	$("#pdf_job3_job_desc").html(job_3_desc_html);
	
	
	$("#pdf_degree").html(degree_1);
	$("#pdf_school").html(school_1);
	$("#pdf_school_loc").html(school_loc_1);
	$("#pdf_graduation").html(grad_1);
	$("#pdf_gpa").html(gpa_1 + " GPA");
	$("#pdf_degree2").html(degree_2);
	$("#pdf_school2").html(school_2);
	$("#pdf_school_loc2").html(school_loc_2);
	$("#pdf_graduation2").html(grad_2);
	$("#pdf_gpa2").html(gpa_2 + " GPA");
	$("#pdf_degree3").html(degree_3);
	$("#pdf_school3").html(school_3);
	$("#pdf_school_loc3").html(school_loc_3);
	$("#pdf_graduation3").html(grad_3);
	$("#pdf_gpa3").html(gpa_3 + " GPA");


	user_skills_split = user_skills.replace(/,/g, ' \u2219');
	$("#pdf_skills").html(user_skills_split);

}

function checkEmpty(){

	//Show all initially
	$(".fill").show();

	if(user_name==""){$("#pdf_name").hide();}
	if(user_email==""){
		$("#pdf_email").hide();
		$("#email_icon").removeClass("ion-ios-email-outline");
	}else{$("#email_icon").addClass("ion-ios-email-outline");}
	if(user_phone==""){
		$("#pdf_phone").hide();
		$("#phone_icon").removeClass("ion-ios-telephone-outline");
	}else{$("#phone_icon").addClass("ion-ios-telephone-outline");}
	if(user_location==""){
		$("#pdf_location").hide();
		$("#loc_icon").removeClass("ion-ios-location-outline");
	}else{$("#loc_icon").addClass("ion-ios-location-outline");}
	if(user_link==""){$("#pdf_link").hide();}
	if(user_link=="" && user_email=="" && user_phone=="" && user_location==""){
		$("#pdf_contact").hide();
	}

	if(user_statement_title=="" && user_statement ==""){$("#pdf_statement_section").hide();}
	if(user_statement_title==""){$("#pdf_statement_title").hide();}
	if(user_statement==""){$("#pdf_statement").hide();}


	// work
	if(!$("#enable_work_1").is(':checked')){
		$("#pdf_job1").hide();
	}else{
		$("#pdf_job1").show();
	}
	if(!$("#enable_work_2").is(':checked')){
		$("#pdf_job2").hide();
	}else{
		$("#pdf_job2").show();
	}
	if(!$("#enable_work_3").is(':checked')){
		$("#pdf_job3").hide();
	}else{
		$("#pdf_job3").show();
	}
	if(!$("#enable_work_1").is(':checked') && !$("#enable_work_2").is(':checked') && !$("#enable_work_3").is(':checked')){
		$("#pdf_experience_section").hide();
	}else{
		$("#pdf_experience_section").show();
	}

	// Education
	if(!$("#enable_edu_1").is(':checked')){
		$("#pdf_edu_1").hide();
	}else{
		$("#pdf_edu_1").show();
	}
	if(!$("#enable_edu_2").is(':checked')){
		$("#pdf_edu_2").hide();
	}else{
		$("#pdf_edu_2").show();
	}
	if(!$("#enable_edu_3").is(':checked')){
		$("#pdf_edu_3").hide();
	}else{
		$("#pdf_edu_3").show();
	}
	if(!$("#enable_edu_1").is(':checked') && !$("#enable_edu_2").is(':checked') && !$("#enable_edu_3").is(':checked')){
		$("#pdf_education_section").hide();
	}else{
		$("#pdf_education_section").show();
	}
	if(gpa_1==""){
		$("#pdf_gpa").hide();
	}else{
		$("#pdf_gpa").show();
	}
	if(gpa_2==""){
		$("#pdf_gpa2").hide();
	}else{
		$("#pdf_gpa2").show();
	}
	if(gpa_3==""){
		$("#pdf_gpa3").hide();
	}else{
		$("#pdf_gpa3").show();
	}


	if(user_skills==""){$("#pdf_skills_section").hide();}
	
}