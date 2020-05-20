<!-- Main Content -->
<main id="albums-container">
   <div id="albums">
      <?php
         foreach ( $albums as $album ) { ?>
            <div>
               <div><img class="album-cover" src="<?php echo $album['cover']; ?>" alt="cover"></div>
               <span><?php echo $album['album']; ?></span>
               <span><?php echo $album['artist']; ?></span>
               <span><?php echo $album['year']; ?></span>
            </div>
      <? } ?>
   </div>
</main>

