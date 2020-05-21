$(document).ready(function(){

   // Variables
   var myAPI = 'http://localhost:3000/Boolean/php-ajax-dischi/partials/json/json-script.php';
   var albumsContainer = $('#albums');
   var albumsInput = $('#album-input');

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
               albumYear: item.year,
               albumData: i
            };

            var output = template(context);
            albumsContainer.append(output);
         };
      },
      error: function(){
         console.log('Error API Call');
      }
   }); // End AJAX Call

   // Filtering artists and albums by writing in the input using AJAX
   albumsInput.keyup(function(){
      var newSearch = $(this).val().trim().toLowerCase();
      albumsContainer.html('');
      // Start AJAX Call
      $.ajax({
         url: myAPI,
         method: 'GET',
         success: function(res){
            for ( var i = 0; i < res.length; i++ ){
               var item = res[i];

               if ( item.artist.toLowerCase().includes(newSearch) ){
                  var context = {
                     albumCover: item.cover,
                     albumName: item.album,
                     albumArtist: item.artist,
                     albumYear: item.year,
                     albumData: i
                  };

                  var output = template(context);
                  albumsContainer.append(output);
               };
            };
         },
         error: function(){
            console.log('Error API Call');
         }
      }); // End AJAX Call
   });

   // Filtering artists and albums by writing in the input
   /*albumsInput.keyup(function(){
      var newSearch = $(this).val().trim().toLowerCase();

      $('.album').each(function(){
         var albumArtist = $(this).children('h3').text().toLowerCase();
         var albumName = $(this).children('h2').text().toLowerCase();

         if ( albumArtist.includes(newSearch) || albumName.includes(newSearch) ){
            $(this).show();
         }
         else {
            $(this).hide();
         }
      });
   });*/

}); // End Ready Document