<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <!-- Stylesheet -->
   <link rel="stylesheet" href="dist/css/main.css">
   <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap">
   <title>PHP AJAX Dischi</title>
</head>
<body>
   
   <!--
      MILESTONE 2
      Attraverso l’utilizzo di AJAX:
      al caricamento della pagina ajax chiederà attraverso una chiamata i dischi a php e li stamperà attraverso handlebars.
      
      Parte opzionale:
      Attraverso un’altra chiamata ajax, filtrare gli album per artista.
   -->
   
   <?php // Header
      include_once __DIR__ . '/partials/template/header.php';
   ?>
   
   <!-- Main Content -->
   <main>
      <div id="albums">
         
      </div>
   </main>

   <!-- Handlebars Template -->
   <script id="album-template" type="text/x-handlebars-template">
      <div class="album" data-album="{{ albumData }}">
         <div class="album-cover"><img src="{{ albumCover }}" alt="cover"></div>
         <h2>{{ albumName }}</h2>
         <h3>{{ albumArtist }}</h3>
         <span>{{ albumYear }}</span>
      </div>
   </script>

   <!-- JS -->
   <script src='https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.7.6/handlebars.min.js'></script>
   <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js'></script>
   <script src="dist/js/script.js"></script>

</body>
</html>