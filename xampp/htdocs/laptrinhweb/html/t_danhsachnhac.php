<?php
   
   $servername = "localhost";
   $username = "root";
   $password = "";
   $dbname = "QLCT";
   $mand = $_SESSION['Mand'];
   $_SESSION['kqb'] = 1;
   $conn = mysqli_connect($servername,$username,$password,$dbname);
   $sql = "CALL   danhsachmabaihat('$mand')";
   
   $ketnoi = mysqli_query($conn,$sql);

   echo '<form action="#" method="POST">';
   echo '<select name="mabh">';
   $i = 1;      

    while($row = mysqli_fetch_array($ketnoi))
    {
        echo '<option value="' . $row['ID'] . '">';
        echo  $row['ID'];
        echo '</option>';
    }
    echo '</select>';
    echo '<input type="submit" value="Đồng ý"/>';
    echo '</form>';
     $_SESSION['kqb'] =isset($_POST['mabh']) ? $_POST['mabh']:0;
   
  
   mysqli_close($conn);
 ?>