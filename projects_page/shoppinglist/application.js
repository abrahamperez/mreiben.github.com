$(document).ready(function() {
//Make list sortable
	function ui_sort() {
		$("#items_list").sortable({placeholder: "ui-sortable-placeholder"});
	}
	ui_sort();
//List item arrays

//Add item through click
	$("#add_button").on("click", function() {
		event.preventDefault();
		var new_item = $("#item_input").val();
		var listItem = document.createElement("li");
		listItem.id = new_item;
		listItem.className = "ui-state-default";
		listItem.innerHTML= '<input type="checkbox" class="checkbox" value="'+new_item+'">'+new_item+' <select class="item_type"><option value="undefined">Type...</option><option value="groceries">Groceries</option><option value="supplies">Supplies</option><option value="clothing">Clothing</option><option value="entertainment">Entertainment</option></select> $<input type="text" class="item_price" size="6" placeholder="Price..." autocomplete="off">';
		$("#list_holder ul").append(listItem);
		$("#item_input").val("");
	});
//Add item through enter key
	document.getElementById("item_input").onkeypress= function(event) {
		if(event.keyCode == 13) {
			event.preventDefault();
			$("#add_button").click();
		}
	};
//Delete selected items
	$("#clear_button").on("click", function() {
		event.preventDefault();
		$('.checkbox').filter(':checked').parent().remove();
	});
//Add colors to type
	var x = $('.item_type')
	$('ul').on('change', 'li select', (function() {
		var clicked = this;
		if($(clicked).val() === "undefined"){
			$(clicked).parent().css({'background-color':'#ffffff'});
			}
		else if($(clicked).val() === "groceries"){
			$(clicked).parent().css({'background-color':'#85E085'});
			}
		else if($(clicked).val() === "supplies"){
			$(clicked).parent().css({'background-color':'#71C6FF'});
			}
		else if($(clicked).val() === "clothing"){
			$(clicked).parent().css({'background-color':'#FFFF99'});
			}
		else if($(clicked).val() === "entertainment"){
			$(clicked).parent().css({'background-color':'#FF8080'});
			}
		}))
});