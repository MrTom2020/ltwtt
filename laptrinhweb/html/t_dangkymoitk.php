<!doctype html>
<html lang="vi">
<head>
    <tittle>KIỂM TRA KẾT NỐI THÔI</tittle>
    <meta charset="utf-8"/>
</head>
<body>
<?php 
    session_start();
    $gioitinh = "Nam";
  $hotendk = $_POST["tendangnhap"];
   $hotenhienthi = $_POST["tenhienthi"];
   $SDT = $_POST["sdt"];
   $DIACHI = $_POST["diachi"];
   $NGAYSINH = $_POST["ngaysinh"];
   $MATKHAU = $_POST["password"];
   $XACNHAN = $_POST["password1"];
   $servername = "localhost";
   $username = "root";
   $password = "";
   $dbname = "QLCT";
   $conn = mysqli_connect($servername,$username,$password,$dbname);
   if($gioitinh === '' || $gioitinh === NULL || $hotendk === '' || $hotendk === NULL || $hotenhienthi === '' || $hotenhienthi === NULL || $SDT === '' || $SDT === NULL ||$DIACHI === '' || $DIACHI === NULL ||$NGAYSINH === '' || $NGAYSINH === NULL  || $XACNHAN === '' || $XACNHAN === NULL)
   {
       echo 'Bạn phải nhập đầy đủ thông tin ';
   }
   else
   {
    if($MATKHAU === $XACNHAN)
    {
         $sql = "CALL themtaikhoan('$hotenhienthi','$hotendk','$MATKHAU','$NGAYSINH','$SDT','$DIACHI','$gioitinh','$XACNHAN')";
          mysqli_query($conn,$sql);
         $_SESSION['tentaikhoan'] = $hotenhienthi;
         header('Location: ../html/trangchu.php');

     }
    else
     {
            echo 'Mật khẩu và xác nhận mật khẩu phải trùng với nhau';
            header('Location: ../web/');
     }
    }
      
  
   mysqli_close($conn);

 ?>
</body>
</html>