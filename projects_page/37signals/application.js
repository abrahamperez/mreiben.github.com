$(document).ready(function() {
	$("#basecamp-box").on("mouseenter", function() {
		event.preventDefault();
		$("#banner").hide();
		$("#basecamp-banner").show();
	});
	$("#basecamp-box").on("mouseleave", function() {
		event.preventDefault();
		$("#basecamp-banner").hide();
		$("#banner").show();
	});
	$("#highrise-box").on("mouseenter", function() {
		event.preventDefault();
		$("#banner").hide();
		$("#highrise-banner").show();
	});
	$("#highrise-box").on("mouseleave", function() {
		event.preventDefault();
		$("#highrise-banner").hide();
		$("#banner").show();
	});
	$("#campfire-box").on("mouseenter", function() {
		event.preventDefault();
		$("#banner").hide();
		$("#campfire-banner").show();
	});
	$("#campfire-box").on("mouseleave", function() {
		event.preventDefault();
		$("#campfire-banner").hide();
		$("#banner").show();
	});
	var today = new Date();
	var weekList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	$("#dayOfWeek").html(weekList[today.getDay()]);
});
