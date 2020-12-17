
<!doctype html>
<html lang="vi">
    <head>
       <meta charset="utf-8"/> 
    </head>
    <body>
       <?php
        session_start();
            $dangnhap =$_POST["dangnhap"];
            $matkhau = $_POST["matkhau"];
            if($login_correct)
            {
                $_SESSION["username"] = $dangnhap;
                $_SESSION["logged"] = true;
                header("ttt.php");
                exit;
            }
            else
            {
                $_SESSION["logged"] = false;
                header("ve_chung_toi.php");
                exit;
            }
        ?>
    </body>
</html>
