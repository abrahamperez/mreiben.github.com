$(document).ready(function() {
//Make list sortable
	function ui_sort() {
		$("#items_list").sortable({placeholder: "ui-sortable-placeholder"});
	}
	ui_sort();
//Add item through click
	$("#add_button").on("click", function() {
		event.preventDefault();
		var new_item = $("#item_input").val();
		if (new_item === '') {
			return;
		}
		else {
			var listItem = document.createElement("li");
			listItem.id = new_item;
			listItem.className = "ui-state-default";
			listItem.innerHTML= '<div class="item_container"><input type="checkbox" class="checkbox" value="'+new_item+'">'+new_item+' <select class="item_type"><option value="undefined">Type...</option><option value="groceries">Groceries</option><option value="supplies">Supplies</option><option value="clothing">Clothing</option><option value="entertainment">Entertainment</option></select><div class="price_input"><span class="new_item_tag"> $</span><input type="text" class="item_price" size="6" placeholder="Price..." autocomplete="off"></div></div>';
			$("#list_holder ul").append(listItem);
			$("#item_input").val("");	
		}
		
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
		$('.checkbox').filter(':checked').parent().parent().remove();
	});
//Add colors to type
	var x = $('.item_type')
	$('ul').on('change', 'li select', (function() {
		if($(this).val() === "undefined"){
			$(this).parent().parent().css({'background-color':'#ffffff'});
			}
		else if($(this).val() === "groceries"){
			$(this).parent().parent().css({'background-color':'#85E085'});
			}
		else if($(this).val() === "supplies"){
			$(this).parent().parent().css({'background-color':'#71C6FF'});
			}
		else if($(this).val() === "clothing"){
			$(this).parent().parent().css({'background-color':'#FFFF99'});
			}
		else if($(this).val() === "entertainment"){
			$(this).parent().parent().css({'background-color':'#FF8080'});
			}
		}));
//update price totals
	$('ul').on('change', '.item_price', (function() {
			var total_price = 0;
			$('ul li').each(function(){
				var price = parseFloat($(this).find(".item_price").val());
				if ($.isNumeric(price)) {
					total_price = (parseFloat(price) + parseFloat(total_price)).toFixed(2);
				}
			})
			$('#totalPrice').html(total_price);
		}));
});