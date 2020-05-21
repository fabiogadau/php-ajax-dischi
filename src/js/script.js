$(document).ready(function(){

   // Variables
   var myAPI = 'http://localhost:3000/Boolean/php-ajax-dischi/partials/json/json-script.php';
   var albumsContainer = $('#albums');

   // Init Handlebars
   var source = $('#album-template').html();
   var template = Handlebars.compile(source);

   // Start AJAX Call
   $.ajax({
      url: myAPI,
      method: 'GET',
      success: function(res){
         for ( var i = 0; i < res.length; i++ ){
            var item = res[i];

            var context = {
               albumCover: item.cover,
               albumName: item.album,
               albumArtist: item.artist,
               albumYear: item.year
            };

            var output = template(context);
            albumsContainer.append(output);
         };
      },
      error: function(){
         console.log('Error API Call');
      }
   }); // End AJAX Call

}); // End Ready Document