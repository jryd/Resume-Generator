// Education Switch Control
$("#select_edu_1").click(function(){
	saveFields();
	$("#select_edu_2, #select_edu_3").removeClass("select_active");
	$(this).addClass("select_active");
	$("#edu_two, #edu_three").hide();
	$("#edu_one").show();
})

$("#select_edu_2").click(function(){
	saveFields();
	$("#select_edu_1, #select_edu_3").removeClass("select_active");
	$(this).addClass("select_active");
	$("#edu_one, #edu_three").hide();
	$("#edu_two").show();
})

$("#select_edu_3").click(function(){
	saveFields();
	$("#select_edu_1, #select_edu_2").removeClass("select_active");
	$(this).addClass("select_active");
	$("#edu_two, #edu_one").hide();
	$("#edu_three").show();
})


//Work Switch Control
$("#select_work_1").click(function(){
	saveFields();
	$("#select_work_2, #select_work_3").removeClass("select_active");
	$(this).addClass("select_active");
	$("#work_two, #work_three").hide();
	$("#work_one").show();
})

$("#select_work_2").click(function(){
	saveFields();
	$("#select_work_1, #select_work_3").removeClass("select_active");
	$(this).addClass("select_active");
	$("#work_one, #work_three").hide();
	$("#work_two").show();
})

$("#select_work_3").click(function(){
	saveFields();
	$("#select_work_1, #select_work_2").removeClass("select_active");
	$(this).addClass("select_active");
	$("#work_two, #work_one").hide();
	$("#work_three").show();
})




$('#enable_edu_1').click(function(){
    if (this.checked) {
        $('#edu_one > input').prop('disabled', false);
        $("#pdf_edu_1").hide();
        localStorage.setItem("edu1", "yes");
    }else{
    	$('#edu_one > input').prop('disabled', true);
    	$("#pdf_edu_1").show();
    	$(this).prop('disabled', false);
    	localStorage.removeItem("edu1");
    }
}) 

$('#enable_edu_2').click(function(){
    if (this.checked) {
        $('#edu_two > input').prop('disabled', false);
        $("#pdf_edu_2").hide();
        localStorage.setItem("edu2", "yes");
    }else{
    	$('#edu_two > input').prop('disabled', true);
    	$("#pdf_edu_2").show();
    	$(this).prop('disabled', false);
    	localStorage.removeItem("edu2");
    }
}) 

$('#enable_edu_3').click(function(){
    if (this.checked) {
        $('#edu_three > input').prop('disabled', false);
        $("#pdf_edu_3").hide();
        localStorage.setItem("edu3", "yes");
    }else{
    	$('#edu_three > input').prop('disabled', true);
    	$("#pdf_edu_3").show();
    	$(this).prop('disabled', false);
    	localStorage.removeItem("edu3");
    }
}) 

function hideSections(){
	if(!$("#enable_edu_1").is(':checked') && !$("#enable_edu_2").is(':checked') && !$("#enable_edu_3").is(':checked')){
		$("#pdf_education_section").hide();
	}else{
		$("#pdf_education_section").show();
	}
}





$('#enable_work_1').click(function(){
    if (this.checked) {
        $('#work_one > input, #work_one > textarea').prop('disabled', false);
        $("#pdf_job1").hide();
        localStorage.setItem("work1", "yes");
    }else{
    	$('#work_one > input, #work_one > textarea').prop('disabled', true);
    	$("#pdf_job1").show();
    	$(this).prop('disabled', false);
    	localStorage.removeItem("work1");
    }
}) 

$('#enable_work_2').click(function(){
    if (this.checked) {
        $('#work_two > input, #work_two > textarea').prop('disabled', false);
        $("#pdf_job2").hide();
        localStorage.setItem("work2", "yes");
    }else{
    	$('#work_two > input, #work_two > textarea').prop('disabled', true);
    	$("#pdf_job2").show();
    	$(this).prop('disabled', false);
    	localStorage.removeItem("work2");
    }
}) 

$('#enable_work_3').click(function(){
    if (this.checked) {
        $('#work_three > input, #work_three > textarea').prop('disabled', false);
        $("#pdf_job3").hide();
        localStorage.setItem("work3", "yes");
    }else{
    	$('#work_three > input, #work_three > textarea').prop('disabled', true);
    	$("#pdf_job3").show();
    	$(this).prop('disabled', false);
    	localStorage.removeItem("work3");
    }
}) 



