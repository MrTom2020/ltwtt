<!doctype html>
<html lang="vi">
<head>
    <tittle>KIỂM TRA KẾT NỐI THÔI</tittle>
    <meta http-equiv="refresh" content="1,url=http://lethanhhiep.com:8080/html/trangchu2.php">
    <meta charset="utf-8"/>
</head>
<body>
<?php 
    session_start();
    $gioitinh = $_POST["sex"];
  $hotendk = $_POST["tentkdk"];
   $hotenhienthi = $_POST["tentkht"];
   $SDT = $_POST["SDTDK"];
   $DIACHI = $_POST["DIACHIDK"];
   $NGAYSINH = $_POST["ngaysinhtkdk"];
   $MATKHAU = $_POST["mktkdk"];
   $XACNHAN = $_POST["mktkdkxn"];
   $mand =  $_SESSION['Mand'];
   $servername = "localhost";
   $username = "root";
   $password = "";
   $dbname = "QLCT";
   $conn = mysqli_connect($servername,$username,$password,$dbname);
    //echo $mand;

   if($gioitinh === '' || $gioitinh === NULL || $hotendk === '' || $hotendk === NULL || $hotenhienthi === '' || $hotenhienthi === NULL || $SDT === '' || $SDT === NULL ||$DIACHI === '' || $DIACHI === NULL ||$NGAYSINH === '' || $NGAYSINH === NULL  || $XACNHAN === '' || $XACNHAN === NULL)
   {
       echo 'Bạn phải nhập đầy đủ thông tin ';
   }
   else
   {
    if($MATKHAU === $XACNHAN)
    {
         // $sql = "INSERT INTO dangnhap VALUES('$MADK','$hotendk','$hotenhienthi','$MADK','$NGAYSINH','$SDT','$DIACHI','NAM','$XACNHAN')";
         $sql = "CALL themtaikhoanduocquanly('$hotenhienthi','$hotendk','$MATKHAU','$NGAYSINH','$SDT','$DIACHI','$gioitinh','$XACNHAN','$mand')";
          mysqli_query($conn, $sql);
          echo 'Thêm thành công';
    }
    else
    {
        echo 'Mật khẩu và xác nhận mật khẩu phải trùng với nhau';
    }
   }
  
   mysqli_close($conn);

 ?>
</body>
</html>