$(document).ready(function() {
    $(".aboutLink").on("click", function( e ) {

        //e.preventDefault();
       $('html, body').animate({
        scrollTop: $(".about").offset().top
    	}, 300);
       $(".dropDownContent").hide();
    });

    $(".portfolioLink").on("click", function( e ) {

        //e.preventDefault();
       $('html, body').animate({
        scrollTop: $(".portfolio").offset().top
    	}, 300);
       $(".dropDownContent").hide();
    });

    $(".contactLink").on("click", function( e ) {

        //e.preventDefault();
       $('html, body').animate({
        scrollTop: $(".contact").offset().top
    	}, 300);
       $(".dropDownContent").hide();
    });
});