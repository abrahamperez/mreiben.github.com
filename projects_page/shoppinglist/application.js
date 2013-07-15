$(document).ready(function(){
//Make list sortable
	$(function() {
		$("#items_list").sortable({
			placeholder: "ui-sortable-placeholder"
		});
	});

//Add item through click
	$("#add_button").on("click", function() {
		event.preventDefault();
		var new_item = $("#item_input").val();
		var listItem = document.createElement("li");
		listItem.id = new_item;
		listItem.className = "ui-state-default";
		listItem.innerHTML= '<input type="checkbox" class="checkbox" value="'+new_item+'">'+new_item+' <select class="item_type" onchange="type_select()"><option value="undefined">Type...</option><option value="groceries">Groceries</option><option value="household supplies">Supplies</option><option value="clothing">Clothing</option><option value="entertainment">Entertainment</option></select> $<input type="text" class="clicker" class="item_price" size="6" placeholder="Price..." autocomplete="off">';
		$("#list_holder ul").append(listItem);
		$("#item_input").val("");
	});
//Add item through enter key
	document.getElementById("item_input").onkeypress= function(event) {
		if(event.keyCode == 13) {
			event.preventDefault();
			$("#add_button").click();
		};
	};
//Delete selected items
	$("#clear_button").on("click", function() {
		event.preventDefault();
		$('.checkbox').filter(':checked').parent().remove();
	});
});
/*Add colors to type	
	select.onchange = function type_select(){
		var type = this;
		if (type.value.selectedIndex == 0){
			type.parent().parent().css({background-color:#ffffff, opacity:0.5});
			};
		else if(type == 1) {
			type.parent().parent().css({background-color:#00cc00, opacity:0.5});
			};
		else if(type == 2) {
			type.parent().parent().css({background-color:#0066ff, opacity:0.5});
			};
		else if(type == 3) {
			type.parent().parent().css({background-color:#ff9900, opacity:0.5});
			};
		else if(type == 4) {
			type.parent().parent().css({background-color:#ff3300, opacity:0.5});
			};*/

	/*Hover over list items to reveal drop-down for item type
	$("li").on("mouseenter", function(){
		event.preventDefault();
		$(this).children().css("display", "inline");
	})
	$("li").on("mouseleave", function(){
		event.preventDefault();
		$(this).children(".item_type").css("display", "none");
		$(this).children(".item_price").css("display", "none");
	})*/
	

