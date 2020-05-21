<!-- Main Content -->
<?php // Database Import
   include_once __DIR__ . '/../data/data.php';
?>

<main>
   <div id="albums">
      <?php
         foreach ( $albums as $album ) { ?>
            <div class="album">
               <div class="album-cover"><img src="<?php echo $album['cover']; ?>" alt="cover"></div>
               <h2><?php echo $album['album']; ?></h2>
               <h3><?php echo $album['artist']; ?></h3>
               <span><?php echo $album['year']; ?></span>
            </div>
      <?php } ?>
   </div>
</main>

