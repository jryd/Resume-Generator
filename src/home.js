$( document ).ready(function() {


	//Show home page promo
	setTimeout(function() {
      $("#home_pro").slideDown(500);
	}, 350);
	$("#close_home_pro").click(function(){
		$(this).hide();
		$("#home_pro").slideUp();
	});

});


//Smooth Link Scrolling
$('a').click(function(){
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
    return false;
});

//Snapchat code switch
function snapchat(){
	$("#madeinmadison").attr("src","src/snapcode.png");
}

