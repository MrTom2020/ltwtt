<?php
    $usename ="root";
    $servername = "localhost";
    $password = "";
    $dataname ="QLCT";
    $ma = $_SESSION['Mand'];
    $conn = mysqli_connect($servername,$usename,$password,$dataname);
   $sql = "CALL danhsachviduocquanly('$ma')";
   $KETNOI = mysqli_query($conn,$sql);
   echo "<table border=1 cellspacing=0 cellpading=0>
    <tr> <td width='50'>Stt</td>
    <td width='180'>Họ tên</td>
    <td width='100'>Tên ví tiền</td>
    <td width='200'>Mật khẩu</td>
    <td width='200'>Ngày tạo</td>
    <td width='100'>Ghi chú</td>
    </tr>
    </table>";
    $i = 1;
   while($row = mysqli_fetch_array($KETNOI))
   {
    $date = date_create($row[3]); 
    $date2 = date_format($date,'d-m-Y'); 
    echo "<table border=1 cellspacing=0 cellpading=0>";
    echo "<tr><td width='50'>$i</td>";
   echo "<td width='180'>$row[0]</td>";
    echo "<td width='100'>$row[1]</td>";
   echo "<td width='200'>$row[2]</td>";
   echo "<td width='200'>$date2</td>";
   echo "<td width='100'>$row[4]</td>";
   echo "</tr>";
   echo "</table>";
    $i+=1;
   }
?>