

//Theme control in lightbox
currentTheme = 1;
$("#current_theme").text(currentTheme);
availThemes = 3;
$("#available_themes").text(availThemes);

$("#prev_theme").click(function(){
	currentTheme--;
	console.log("Next");
	$("#current_theme").text(currentTheme);
	checkThemePos();
	switchTheme();
});
$("#next_theme").click(function(){
	currentTheme++;
	console.log("Back");
	$("#current_theme").text(currentTheme);
	checkThemePos();
	switchTheme();
});
function checkThemePos(){
	if(currentTheme==availThemes){
		$("#next_theme").prop("disabled",true);
	}else{
		$("#next_theme").prop("disabled",false);
	}
	if(currentTheme==1){
		$("#prev_theme").prop("disabled",true);
	}else{
		$("#prev_theme").prop("disabled",false);
	}
}
function switchTheme(){
	if(currentTheme==1){
		$(".xcss").attr("disabled", "disabled");
		$("#css_theme_1").removeAttr("disabled");
		refreshTheme();
		
	}else if(currentTheme==2){
		$(".xcss").attr("disabled", "disabled");
		$("#css_theme_2").removeAttr("disabled");
		refreshTheme();
	}
	else if(currentTheme==3){
		$(".xcss").attr("disabled", "disabled");
		$("#css_theme_3").removeAttr("disabled");
		refreshTheme();
	}
}
function refreshTheme(){
	$("#print_page").fadeOut(0);
	$("#print_page").animate({ zIndex: 0 });
	$("#print_page").animate({ zIndex: 1000000 });
	$("#print_page").fadeIn(100);
}












//Arrow key function
$(document).keydown(function(e){

	if(e.keyCode == 9 && !event.shiftKey){

		if($("#personal_name_input, #personal_email_input, #personal_phone_input, #personal_location_input, #personal_link_input, #personal_statement_input, #job_desc, #graduation, #skillsinput").is(":focus") && navCounter<10){

	    	e.preventDefault();
		    	saveFields();
		    	$("nav > ul > li").removeClass("activated");
				$(".hideall, #intro_box, #body_wrap, #work, #schooling, #skills, #statement, #settings, #finished").hide();
				$("#intro_box").toggleClass("pulse, pulse2");
				$("#body_wrap").toggleClass("pulse, pulse2");
		    	navCounter++;
		    	// alert("tab");
		    	checkNavPos();
		    	

		}

	}

	if(e.keyCode == 9 && event.shiftKey){


		if($("#personal_email_input, #personal_phone_input, #personal_location_input, #personal_link_input, #statement_title, #employer, #degree, #skillsinput").is(":focus") && navCounter>0){
				saveFields();
		    	$("nav > ul > li").removeClass("activated");
				$(".hideall, #intro_box, #body_wrap, #work, #schooling, #skills, #statement, #settings, #finished").hide();
				$("#intro_box").toggleClass("pulse, pulse2");
				$("#body_wrap").toggleClass("pulse, pulse2");
		    	navCounter--;
		    	checkNavPos();		    	

		}

		$("body").find("input").focus();

	}

});