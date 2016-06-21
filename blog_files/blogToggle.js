$(document).ready(function(){

	
	$(".dropDownContent").hide();
	

	$('.dropDown').click(function(){
		$(this).parent().next(".dropDownContent").slideToggle();
		console.log("in dropDown");
	});

});