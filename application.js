$(document).ready(function(){
	$("#programming").on("mouseenter", function() {
		event.preventDefault();
		$(".interest_info").hide();
		$("#programming_info").fadeIn(1000);
	});
	$("#3d").on("mouseenter", function() {
		event.preventDefault();
		$(".interest_info").hide();
		$("#3d_info").fadeIn(1000);
	});
	$("#coffee").on("mouseenter", function() {
		event.preventDefault();
		$(".interest_info").hide();
		$("#coffee_info").fadeIn(1000);
	});
	$("#bio_link").on("click", function() {
    	$('html, body').animate({
        	scrollTop: $("#bio_anchor").offset().top
   		}, 1000);
	});
	$("#skills_link").on("click", function() {
    	$('html, body').animate({
        	scrollTop: $("#skills_anchor").offset().top
   		}, 1000);
	});
	$("#interests_link").on("click", function() {
    	$('html, body').animate({
        	scrollTop: $("#interests_anchor").offset().top
   		}, 1000);
	});
	$("#contact_link").on("click", function() {
    	$('html, body').animate({
        	scrollTop: $("#contact_anchor").offset().top
   		}, 1000);
	});
})
