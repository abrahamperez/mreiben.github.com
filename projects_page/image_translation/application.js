$(document).ready(function() {
	function ui_sort() {
		$("#image_canvas").sortable({placeholder: "ui-sortable-placeholder"});
	}
	ui_sort();
    var url_array = [];
    var imgCollect = [];
    $('#submit_button').on('click', function(){
        event.preventDefault();
        url_array = [];
        $('#image_canvas').fadeOut(750);
        $('#progress').fadeIn(750);
        $('#image_canvas').html("");
        var search_term = $('#user_input').val().toLowerCase();
        var array = search_term.split(" ");

        // ommit common pronouns
        for (var i = 0; i < array.length; i++) {
            var flickr_url;
            var term = array[i];
            if (term != "and" && term != "i" && term != "he" && term != "she" && term != "it" && term != "you" && term != "is" && term != "was" && term != "am" && term != "are" && term != "were" && term != "a" && term != "an" && term != "if" && term != "when" && term != "where" && term != "the") {
                flickr_url = "http://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=bdfe5cec66a44b4617d2b096f5770cb0&text="+term+"&safe_search=1&format=json&jsoncallback=?";
                url_array.push(flickr_url);
            }
        }
        console.log(url_array);
        for (var k = 0; k < url_array.length; k++) {
            var img_id = "img_"+k;
            // load JSON for term
            loadJSON(url_array[k]);
        }
        function loadJSON(imgId) {
            var photo_url;
            // load in each image id
            $.when($.getJSON(imgId, function(json){
                var x = Math.floor((Math.random()*20)+1);
                var photo = json.photos.photo[x];
                var photo_farm = photo.farm;
                var photo_server = photo.server;
                var photo_id = photo.id;
                var photo_secret = photo.secret;
                photo_url = "http://farm"+photo_farm+".staticflickr.com/"+photo_server+"/"+photo_id+"_"+photo_secret+"_m.jpg";

        function fetchImage(imgIndex, imgArr) {
            var imgId, photo_url;

            getJSON(imgIndex);

            function getJSON(itemIndex) {
                imgId = imgArr[imgIndex];

                // fetch JSON for specific image
                $.when($.getJSON(imgId, function(json){
                    var x = Math.floor((Math.random()*20)+1);
                    var photo = json.photos.photo[x];
                    var photo_farm = photo.farm;
                    var photo_server = photo.server;
                    var photo_id = photo.id;
                    var photo_secret = photo.secret;
                    photo_url = "http://farm"+photo_farm+".staticflickr.com/"+photo_server+"/"+photo_id+"_"+photo_secret+".jpg";
                
                })).done(function(){
                    // flash loading graphic
                    $('#image_canvas').delay(2200).fadeIn(750);

                    // push image to collection of photo urls
                    imgCollect.push(photo_url);

                    if (imgIndex+1 !== imgArr.length) {
                        // if there are more images fetch next one
                        fetchImage(imgIndex+1, url_array);
                    } else {
                        // fade out loading graphic
                        $('#progress').delay(1000).fadeOut(750);
                        
                        // if not, append all images to page
                        appendToPage(imgCollect);
                    }
                });

            }
        }

        // fetch first image
        fetchImage(0, url_array);

        function appendToPage(imgArray) {
            

            // append each image to page    
            for (var k = 0; k < imgArray.length; k++) {
                $('#image_canvas').append("<img class='photo' src='"+imgArray[k]+"' id='photo-"+k+"' alt='image' />"); 
            }
        }
        
    });
});
