<?php
   print_r($_POST);
   $Name= $_POST["firstName"];
   $file= fopen("Name.txt", "a");
   fwrite($file, $Name);
   fclose($file);
?>