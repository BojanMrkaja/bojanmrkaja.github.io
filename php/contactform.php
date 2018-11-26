<?php

if(isset($_POST['submit'])){
   $name = $_POST['name'];
   $mailFrom = $_POST['mail'];
   $message = $_POST['message'];
    
   $maillTo = "boki1988@bojanmrkaja.com";
   $headers = "From: ".$mailFrom;
   $txt = "You have received an e-mail from ".$name.".\n\n".$message;

   mail($maillTo, $txt, $headers);
   header("Location: index-2.html?mailsend");
}

