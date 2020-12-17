<?php
    
     $username = "root";
     $dtname = "QLCT";
    $serverN = "localhost";
     $password = "";  
    $conn = mysqli_connect($serverN,$username,$password,$dtname);
    $sql22 ="Select * from bangthongbao";
    $ketnoi22 = mysqli_query($conn,$sql22);
    echo '<select name="maso">';
   while($row = mysqli_fetch_array($ketnoi22))
   {
    
        echo '<option value="' .$row['ID']. '">';
        echo $row['ID'];
        echo '</option>';
   }
   echo '</select>';
     mysqli_close($conn);
?>