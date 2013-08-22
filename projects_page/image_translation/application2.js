
$(document).ready(function() {
    var search_array = [];
    var api_array = [];
    var url_array = [];
    var flickr_url = 0;

    $('#submit_button').on('click', function(){
        event.preventDefault();

        $('#status_holder').css("display", "inline");
        $('#image_canvas').html("");
        var search_term = $('#user_input').val().toLowerCase();
        var array = search_term.split(" ");

        // ommit common pronouns
        for (var i = 0; i < array.length; i++) {
            var term = array[i];
            if (term != "i" && term != "he" && term != "she" && term != "it" && term != "you" && term != "is" && term != "was" && term != "am" && term != "are" && term != "were" && term != "a" && term != "an" && term != "if" && term != "when" && term != "where" && term != "the") {
                search_array.push(array[i]);
            }
        }
        // generate feed URL for each valid search term
        for (var k = 0; k < search_array.length; k++) {
            flickr_url = "http://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=bdfe5cec66a44b4617d2b096f5770cb0&text="+search_array[k]+"&format=json&jsoncallback=?";
            var img_id = "img_"+k;
            // load JSON for term
            loadJSON(img_id);
        }

        function loadJSON(imgId) {
            var photo_url;

            // load in each image id
            $.when($.getJSON(flickr_url, function(json){
                var x = Math.floor((Math.random()*10)+1);
                var photo = json.photos.photo[x];
                var photo_farm = photo.farm;
                var photo_server = photo.server;
                var photo_id = photo.id;
                var photo_secret = photo.secret;
                photo_url = "http://farm"+photo_farm+".staticflickr.com/"+photo_server+"/"+photo_id+"_"+photo_secret+".jpg";
            })).done(function(){
                // append the photo to the page
                $('#image_canvas').append("<img class='photo' src='"+photo_url+"' id='"+imgId+"' alt='image' />");
            });
        }
    })
});