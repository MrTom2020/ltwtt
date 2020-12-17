<?php
   $servername = "localhost";
   $username = "root";
   $password = "";
   $dbname = "QLCT";
   $kq = $_SESSION['kqb'];
   $conn = mysqli_connect($servername,$username,$password,$dbname);
    if($kq != '' && $kq != NULL)
    {
        $SQL2  = "CALL 	danhsachbaiht('$kq')";
        $ketnoi2 = mysqli_query($conn,$SQL2);
        $row2 = mysqli_fetch_array($ketnoi2);
          $_SESSION['baihat'] = $row2[0];
        echo '<form action="#">';
        echo $row2[0];
        echo '<input type="submit" value="Đồng ý"/>';
        echo '</form>';
    }
  
   mysqli_close($conn);
 ?>