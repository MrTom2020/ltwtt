<?php
  $to = 'tomhumchin2@gmail.com';
  $subject = 'hihi';
  $message = 'jjjjjjjj';
  $header = "From:tomhumchinvn@gmail.com.vn";
  if(mail($to,$subject,$message,$header)== true)
  {
      echo 'ok';
  }
  else
  {
      echo 'ko';
  }
  ?>