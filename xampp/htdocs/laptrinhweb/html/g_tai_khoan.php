<!doctype html>
<html lang="vi">
<head>
    <meta charset="utf-8"/>
    <link rel="stylesheet" href="../css/css_dk.css">
</head>
<body>

  <div class="container" style="margin-top:10%; background-image: linear-gradient(to bottom right, #ffffff, #f7f7f7); border:none;">
    <div class="row" style="height:31.25em;">
    <div class="col-md-3">
    &ensp; <?php include'vi.php' ?><br/>
     <a href="vitien.php" > Ví của tôi</a>
    </div>
    <div class="col-md-3">
    &ensp;<?php include'nhom.php' ?><br/>
    <button data-toggle="modal" data-target="#nhom">Nhóm chi tiêu</button>
    </div>
    <div class="col-md-3">
    &ensp;<?php include'caidat.php' ?><br/>
    Cài đặt</div>
    <div class="col-md-3">
    &ensp;<?php include'nhom.php' ?><br/><a href="../html/tiem_ich.php">
    Tiện ích</a>
    </div>
    <div class="col-md-3" style="margin-top:15%; float:left;">
    &ensp;<?php include'cuahang.php' ?><br>
    Cửa hàng</div>
    
    <div class="col-md-3">
    &ensp;<?php include'giupdo.php' ?><br/><a href="g_hotro.php">
    Hỗ trợ</a></div>
  </div>
  </div>
  <img src="../tainguyenkhac/hinh_anh/hinh_dong_vat/dong_vat_so_1.png" class="img-container" style="position: absolute;
    top:39%;
    left: 40%;"/> 
  <script>
        function pleasewaiting()
        {
            alert("Hiện tại tính năng này còn trong quá trình phát triển xin vui lòng chờ các phiên bản cập nhật sau");
        }
        function tuansau()
        {
            top.location  = "../html/bctheothang.php";
        }
       
    </script>
</body>
</html>