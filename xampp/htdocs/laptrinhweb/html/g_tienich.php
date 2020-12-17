<!DOCTYPE html>
<html lang="vi">

<head>
    <meta charset="utf-8" />
    <meta http-equiv="Description" content="giúp bạn quản lý tài chính tốt hơn,bạn sẽ phải bất ngờ trước sự quản lý hợp logic đến từ chúng tôi"/>
    <meta http-equiv="Keywords" content="Quản lý tiền,My wallet,Amazing"/>
    <title>AMAZING</title>
    <link rel="stylesheet" type="text/css" href="../css/bootstrap.css">
   <link rel="stylesheet" type="text/css" href="../css/css_cua_trang_chu.css">
   <link rel="stylesheet" type="text/css" href="../css/css_tien_ich.css">
    <?php
           
            $tendangnhaP = isset($_SESSION['tentaikhoan']) ? $_SESSION['tentaikhoan'] :'Đăng nhập';
    ?>
</head>
<body>
<a href="#dn"><img id="up" src="https://img.icons8.com/cute-clipart/64/000000/circled-chevron-up.png"/></a>  
    <div class="modal fade" role="dialog" aria-labelledby="dnhap" aria-hidden="true" id="dn" tabindex="-1" style="border: 0;">
        <?php include'dang_nhap.php' ?>
    </div>
    <div class="modal fade" role="dialog" aria-labelledby="maytinh" aria-hidden="true" id="maytinh" tabindex="-1" style="border: 0;">
        <?php include'g_maytinh.php' ?>
    </div>
    <div class="modal fade" role="dialog" aria-labelledby="laisuat" aria-hidden="true" id="laisuat" style="width:50%;height:70%;background-color:#ffffff;border:none;" tabindex="-1" style="border: 0;">
        <?php include'g_tinhlaisuattietkiem.php' ?>
    </div>
   
    <aside class="main-app-container" name="gioithieu" id="tienich1">
        <article class="container">
             <br/>
               <br/>
               <a href="chiatien.php" class="btn btn-link col-sm-4"><h4>Chia tiền</h4></a>
              <a href="#" class="btn btn-light col-sm-4"><h4>Tính lãi suất vay</h4></a>
               <a href="tinhtietkiem.php" class="btn btn-light col-sm-4"><h4>Tính lãi suất tiết kiệm</h4></a>
               <br/>
               <br/>
               <br/>
               <br/>
               <br/>
               <br/>
               <a href="chuyendoi.php" class="btn btn-light col-sm-4"><h4>Tra cứu tỷ giá</h4></a>
               <a href="#" class="btn btn-light col-sm-4"><h4>Chọn ngôn ngữ</h4></a>
               <a href="#" class="btn btn-light col-sm-4"><h4>Nhập dữ liệu</h4></a>
               <br/>
               <br/>
               <br/>
               <br/>
               <br/>
               <br/>
               <a href="danhsachnhac.php" class="btn btn-light col-sm-4"><h4>Nghe nhạc</h4></a>
               <a href="#" class="btn btn-light col-sm-4"><h4>Xuất dữ liệu</h4></a>
               <a class="btn btn-light col-sm-4" data-toggle="modal"   data-target="#maytinh"><h4>Máy tính</h4></a>
        </article>
    </aside>
    <script type="text/javascript" src="../js/jquery-1.10.2.min.js">
    </script>
    <script type="text/javascript" src="../js/bootstrap.min.js">
    </script>
</body>

</html>