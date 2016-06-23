$(document).ready(function(){

	
	$(".dropDownContent").hide();
	

	$('.dropDown').click(function(){
		$(this).parent().next(".dropDownContent").slideToggle();
		console.log("in dropDown");
	});


	//modal
	$(".modal").hide();

	$('#asteroidsImg').click(function(){
		$("#asteroidsModal").slideDown();
	});
	$('#bubblemanImg').click(function(){
		$("#bubblemanModal").slideDown();
	});
	$('#habitloopImg').click(function(){
		$("#habitloopModal").slideDown();
	});
	$('#punchsystemImg').click(function(){
		$("#punchsystemModal").slideDown();
	});

	$('.close').click(function(){
		$(this).closest('.modal').slideUp();
		console.log("click close");
	});

});