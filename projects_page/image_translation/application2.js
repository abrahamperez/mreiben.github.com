$(document).ready(function() {
    var search_array = [];
    var api_array = [];
    var url_array = [];
    var flickr_url = 0;
    var photo_url = 0;
    $('#submit_button').on('click', function(){
        event.preventDefault();
        search_array = [];
        api_array = [];
        url_array = [];
        $('#status_holder').css("display", "inline");
        $('#image_canvas').html("");
        var search_term = $('#user_input').val().toLowerCase();
        var array = search_term.split(" ");
        for (var i = 0; i < array.length; i++) {
            var term = array[i];
            if (term != "i" && term != "he" && term != "she" && term != "it" && term != "you" && term != "is" && term != "was" && term != "am" && term != "are" && term != "were" && term != "a" && term != "an" && term != "if" && term != "when" && term != "where" && term != "the") {
                flickr_url = "http://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=bdfe5cec66a44b4617d2b096f5770cb0&text="+term+"&format=json&jsoncallback=?";
                url_array.push(flickr_url);
            }
        }
        console.log(url_array);
        for (var j = 0; j < url_array.length; j++) {
            $.ajax({
                url: url_array[j],
                type: 'get',
                dataType: 'json',
                async: false,
                success: function (json) {
                    var x = Math.floor((Math.random()*10)+1);
                    var photo = json.photos.photo[x];
                    var photo_farm = photo.farm;
                    var photo_server = photo.server;
                    var photo_id = photo.id;
                    var photo_secret = photo.secret;
                    photo_url = "http://farm"+photo_farm+".staticflickr.com/"+photo_server+"/"+photo_id+"_"+photo_secret+".jpg";
                }
            }).done($('#image_canvas').append("<img class='photo' src='"+photo_url+"' alt='image' />"));
        }
    })
});