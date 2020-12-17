<?php
    $usename ="root";
    $servername = "localhost";
    $password = "";
    $dataname ="QLCT";
    $conn = mysqli_connect($servername,$usename,$password,$dataname);
    if(!$conn)
    {
    die('Kết nối thất bại:'.mysqli_connect_error());
   }else{
       echo"kết nối thành công";
   }
   $sql = "CALL hienthidanhsachkh()";
   $KETNOI = mysqli_query($conn,$sql);
   while($row = mysqli_fetch_array($KETNOI))
   {
       $rr = 0;
         echo "<table border=1 cellspacing=0 cellpading=0>
         <tr><td width='50'>$row[0]</td>
         <td width='100'>$row[1]</td>
         <td width='100'>$row[2]</td>
         <td width='100'>$row[3]</td>
         <td width='100'>$row[4]</td>
         </tr>
         </table>";
   }
?>