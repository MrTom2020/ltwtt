<?php
            session_start();
            $TENDN = $_SESSION['tentaikhoan11'];
            $MATKHAU = $_SESSION["password1"] ;
            $lct = $_POST['tenkhoanchitieu3'];
            $loaiddt = $_POST['loaidt'];
            $tienct = $_POST['tiena3'];
            $mota1 = $_POST['mota3'];
            $ngaygd = $_POST['ngaygd3'];
            $servername = "localhost";
             $username = "root";
             $password = "";
             $dbname = "QLCT";
            $conn = mysqli_connect($servername,$username,$password,$dbname);
            if( $_SESSION['tentaikhoan'] == '' ||  $_SESSION['tentaikhoan'] == ' ')
            {
                header('local:../web/');
            }
            $ma =isset($_SESSION['Mand']) ? $_SESSION['Mand']:0;
            $sql2 = "CALL themtiendautu('$loaiddt','$tienct','$ngaygd','$mota1','$ma', '$loaiddt')";
            if( mysqli_query($conn,$sql2))
            {
                $_SESSION['THONGBAO'] = "Thêm giao dịch  thành công";
              header('Location: ../html/trangchu2.php');
              exit();
            }
            else
            {
                $_SESSION['THONGBAO'] ="Thêm giao dịch không thành công";
              header('Location: ../html/trangchu2.php');
              exit();
            }
          mysqli_close($conn);
?>