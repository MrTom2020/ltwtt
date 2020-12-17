<?php
    session_start();
     $username = "root";
     $dtname = "QLCT";
     $serverN = "localhost";
     $password = "";  
     $matk = isset($_SESSION['Mand']) ?  $_SESSION['Mand']:0;
    $conn = mysqli_connect($serverN,$username,$password,$dtname);
    $sql = "call xemthongbaotatcanguoi()";
    $ketnoi = mysqli_query($conn,$sql);
   $i=0;
    while($row = mysqli_fetch_array($ketnoi))
   {
        echo '<br/>';
        echo '<strong>Tên thông báo số </strong>';
        echo $i;
        echo " ";
        echo $row[0];
        echo '<br/>';
        echo '<strong>Nội dung thông báo số </strong>';   
        echo $i;
        echo " "; 
        echo $row[1];
        $i+=1;
   }
     mysqli_close($conn);
?>