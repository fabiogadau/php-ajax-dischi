<?php // IMPORTS
   include_once __DIR__ . '/partials/data/data.php';
?>

<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>PHP AJAX Dischi</title>
</head>
<body>
   
   <!--
      Stampare a schermo una decina di dischi musicali.
      Utilizzare solo PHP per ora e non AJAX.
      Stampare direttamente i dischi in pagina: al caricamento della pagina ci saranno tutti i dischi.
      Utilizzare Html, Sass e PHP.
   -->

   <main id="albums">
      <?php
         foreach ( $albums as $album ) { ?>
            <div>
               <img src="<?php echo $album['cover']; ?>" alt="cover">
               <?php echo $album['album']; ?>
               <?php echo $album['artist']; ?>
               <?php echo $album['year']; ?>
            </div>
         <? } ?>
   </main>

</body>
</html>