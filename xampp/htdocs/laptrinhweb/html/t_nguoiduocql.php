<?php 
   $username = "root";
   $dtname = "QLCT";
   $serverN = "localhost";
   $password = "";
   $conn = mysqli_connect($serverN,$username,$password,$dtname);
   $maid =  $_SESSION['Mand'];
    $i = 0;
   if($maid != '' && $maid != NULL)
   {
       $sql = "CALL danhsachtaikhoanduocquanly('$maid')";
       $thuchien = mysqli_query($conn,$sql);
       echo '<select name="tendql">';
       while($row = mysqli_fetch_array($thuchien))
       {
           echo '<option value="'. $row['hoten'] .'">';
           echo $row['hoten'];
           echo '</option>';
            $i +=1;
       }
       echo '</select>';
   }
   $_SESSION['soluong'] = $i;
   if($i == 0)
{
    echo 'Hiện tại bạn không có tài khoản quản lý';
}
  mysqli_close($conn);
?>

