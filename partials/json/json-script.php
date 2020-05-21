<?php // Database Import
   include_once __DIR__ . '/../data/data.php';
   
   header('Content-Type: application/json');
   
   echo json_encode($albums);
?>