<!DOCTYPE html>
<html lang="vn">

<head>
    <meta charset="utf-8" />
    <meta http-equiv="Description" content="giúp bạn quản lý tài chính tốt hơn,bạn sẽ phải bất ngờ trước sự quản lý hợp logic đến từ chúng tôi"/>
    <meta http-equiv="Keywords" content="Quản lý tiền,My wallet,Amazing"/>
    <title>AMZING</title>
    <link rel="stylesheet" type="text/css" href="../css/bootstrap.css">
    <link rel="stylesheet" type="text/css" href="../css/css_cua_trang_chu.css">
    <?php
            session_start();
            $tendangnhaP = isset($_SESSION['tentaikhoan']) ? $_SESSION['tentaikhoan'] :'Đăng nhập';
    ?>
</head>
<body>
<div class="modal fade" role="dialog" aria-labelledby ="dangky" aria-hidden="true" id="dk1" tabindex="-1" style="border:0;">
        <?php include'dang_ky.php' ?>
    </div>
    <div class="modal fade" role="dialog" aria-labelledby="dnhap" aria-hidden="true" id="dn" tabindex="-1" style="border: 0;">
        <?php include'dang_nhap.php' ?>
        </div>
    </div>
    <header id="hder">
        <img src="../tainguyenkhac/hinh_anh/hinh_background/bk3.png" alt="Hình banner" class="img-thumbnail row mt-3" style="border:none;background-color: #2cb84b;">
        <button data-toggle="modal" data-target="#dn"  id="DN" style="margin-right: 20px;"><?php  echo $tendangnhaP; ?></button>
        <button data-toggle="modal" id="dk"  data-target="#dk1"> Đăng ký</button>
    </header>
    <nav id="NAV" class="navbar navbar-default">
   <?php include'nav.php' ?>
    </nav>
    <article>
        <?php include'g_trang_gioi_thieu.php' ?>
    </article>
    <script type="text/javascript" src="../js/jquery-1.10.2.min.js">
    </script>
    <script type="text/javascript" src="../js/bootstrap.min.js">
    </script>
</body>
</html>