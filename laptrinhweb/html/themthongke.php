<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<?php 
   
$maid = $_POST["maa"];
   $servername = "localhost";
   $username = "root";
   $password = "";
   $dbname = "QLCT";
   $conn = mysqli_connect($servername,$username,$password,$dbname);
    $sql1 ="SELECT tienconlaitrongvi($maid, null)";
    $sql2 ="SELECT tiendautu($maid, null)";
    $sql3 ="SELECT tienhangngay($maid, null)";
    $sql4 ="SELECT tienthunhapp($maid, null)";
    $sql = "SELECT tienshopping($maid, null)";
    $result1 = mysqli_query($conn, $sql1);
    $result2 = mysqli_query($conn, $sql2);
    $result3 = mysqli_query($conn, $sql3);
    $result4 = mysqli_query($conn, $sql4);
    $result = mysqli_query($conn, $sql);
    $row=mysqli_fetch_array($result);
    $row1=mysqli_fetch_array($result1);
    $row2 =mysqli_fetch_array($result2);
    $row3 =mysqli_fetch_array($result3);
    $row4 =mysqli_fetch_array($result4);
    $sql5 = "CALL themthongke('$row3[0]','$row[0]','$row4[0]','$row1[0]','2020-10-1','$maid')";
    mysqli_query($conn,$sql5);
   mysqli_close($conn);
 ?>
<body>
<form action="#" method="POST">
    <input type="text" name="maa">
    <input type="submit">
</form>

</body>
</html>