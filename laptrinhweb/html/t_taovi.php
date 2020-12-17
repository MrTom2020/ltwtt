<?php
    session_start();
   $servername = "localhost";
   $username = "root";
   $password = "";
   $dbname = "QLCT";
   $conn = mysqli_connect($servername,$username,$password,$dbname);
   $today = date("d/m/Y");
   $tenvi = $_POST['tenvi']; 
  $tientrongvi =  $_POST['tientrongvi'];
  $mota =  $_POST['mota'];
  $mand = $_SESSION['Mand'];
  $sql2 = "CALL kiemtravi($mand)";
  $thuchien1 = mysqli_query($conn,$sql2);
  $row1 = mysqli_fetch_array($thuchien1);

  if($row1 === "True")
  {
     $sql = "CALL themvi('$tenvi','$tientrongvi','$today','$mota','$mand')";
    mysqli_query($conn,$sql);
    $_SESSION["thongbao"] = "Thêm thành công";
  }
  else
  {
    $_SESSION["thongbao"] = "Thêm không thành công";
  }
  header('Location: ../html/trangchu2.php');
   mysqli_close($conn);
 ?>