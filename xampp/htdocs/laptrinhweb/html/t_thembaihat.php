<?php
    session_start();
   $servername = "localhost";
   $username = "root";
   $password = "";
   $dbname = "QLCT";
   $conn = mysqli_connect($servername,$username,$password,$dbname);
   $today = date("d/m/Y");
  $link11 = $_POST['link1'];
  $mand = $_SESSION['Mand'];
  $sql2 = "CALL themnhac('$link11','$mand')";
   mysqli_query($conn,$sql2);
  
  header('Location: http://localhost:8080/html/trangchu2.php');
   mysqli_close($conn);
 ?>