$(document).ready(function() {
    $('#submit_button').on('click', function(){
        event.preventDefault();
        var search_term = $('#user_input').val().toLowerCase();
        var array = search_term.split(" ");
        var search_array = [];
        for (var i in array) {
            if (i != "i" && i != "he" && i != "she" && i != "it" && i != "you" && i != "is" && i != "was" && i != "am" && i != "are" && i != "were" && i != "a" && i != "an" && i != "if" && i != "when" && i != "where" && i != "the") {
                search_array.push(array[i]);
            };
        };
        //var search_array = array.reverse();
        console.log(search_array);
        $('#status_holder').css("display", "inline");
        $('#image_canvas').html("");
        //for (var i in search_array) {
            //$.getJSON("https://api.instagram.com/v1/tags/"+i+"/media/recent?client_id=d437c029184f4946934704f5957c114d&callback=?", function(json){
            //console.log(json);
            //var url = json.data[0].images.standard_resolution.url;
            //$('#image_canvas').html("<img src='"+url+"' class='photo'>");
            //});
        //}
        for (var i in search_array) {
            var flickr_url = "http://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=bdfe5cec66a44b4617d2b096f5770cb0&text="+search_array[i]+"&format=json&jsoncallback=?";
            console.log(search_array[i]);
            $.getJSON(flickr_url).done(function(json){
                console.log(json);
                var x = Math.floor((Math.random()*10)+1);
                var photo = json.photos.photo[x];
                var photo_farm = photo.farm;
                var photo_server = photo.server;
                var photo_id = photo.id;
                var photo_secret = photo.secret;
                var photo_url = "http://farm"+photo_farm+".staticflickr.com/"+photo_server+"/"+photo_id+"_"+photo_secret+".jpg";
                $('#status_holder').css("display", "none");
                $('#image_canvas').append("<img src='"+photo_url+"' class='photo' id='"+search_array[i]+"'>");
            });
        }
    });
});

/*flickr api information:
 *Key:
bdfe5cec66a44b4617d2b096f5770cb0

http://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg

Secret:
bb6f6272254226ea
*/