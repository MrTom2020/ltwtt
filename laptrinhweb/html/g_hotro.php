<!DOCTYPE html>
<html lang="vi">

<head>
    <meta charset="utf-8" />
    <meta http-equiv="Description" content="giúp bạn quản lý tài chính tốt hơn,bạn sẽ phải bất ngờ trước sự quản lý hợp logic đến từ chúng tôi"/>
    <meta http-equiv="Keywords" content="Quản lý tiền,My wallet,Amazing"/>
    <title>AMAZING</title>
    <link rel="stylesheet" type="text/css" href="../css/bootstrap.css">
   <link rel="stylesheet" type="text/css" href="../css/css_cua_trang_chu.css">
    <?php
            session_start();
            $tendangnhaP = isset($_SESSION['tentaikhoan']) ? $_SESSION['tentaikhoan'] :'Đăng nhập';
    ?>
</head>
<body>
<a href="#dn"><img id="up" src="https://img.icons8.com/cute-clipart/64/000000/circled-chevron-up.png"/></a>  
<div class="modal fade" role="dialog" aria-labelledby ="dangky" aria-hidden="true" id="dk1" tabindex="-1" style="border:0;">
        <?php include'dang_ky.php' ?>
    </div>
    <div class="modal fade" role="dialog" aria-labelledby="dnhap" aria-hidden="true" id="dn" tabindex="-1" style="border: 0;">
        <?php include'dang_nhap.php' ?>
    </div>
    
    <header id="hder">
        <img src="../tainguyenkhac/hinh_anh/hinh_background/bk3.png" alt="Hình banner" class="img-thumbnail" style="border:none;background-color: #2cb84b;">
        <button data-toggle="modal" data-target="#dn"  id="DN" style="margin-right: 20px;"><?php  echo $tendangnhaP; ?></button>
        <button data-toggle="modal" id="dk"   data-target="#dk1"> Đăng ký</button>
    </header>
    <nav id="NAV" class="navbar nav-fill">
  <?php include'nav.php' ?>
    </nav>
    <section class="col-sm-12">
   <strong> Điều khoản và định nghĩa</strong><br/>
    Các điều khoản đại diện cho điều gì?
    <br/> 1. Ví: Ví là một tài khoản đại diện cho một đối tượng của nguồn cụ thể tạo ra thu nhập hoặc chi phí. Bạn có thể tạo nhiều ví để phân tách các nguồn khác nhau và tùy chỉnh chúng để phù hợp với mục đích của mình. Ví dụ: Tiền mặt, Tài khoản ngân hàng, Công ty, Cá nhân, Gia đình, Con trai, Con gái, Cổ phiếu, Đầu tư, v.v.
    <br/> 2. Giao dịch: Thay đổi số dư của bạn. Đó có thể là giao dịch thu nhập, giao dịch chi phí hoặc giao dịch không báo cáo (không phải giao dịch thu nhập hay chi phí)
    <br/> 3. Số dư: đại diện cho số tiền hiện có được tính toán trong ví của bạn. Vd: tiền mặt hiện có, số dư trên tài khoản ngân hàng, v.v.
    <br/> 4. Hạng mục: đại diện cho một nhóm có nguồn thu nhập tương tự hoặc loại chi tiêu tương tự.
    <br/> 5. Ngân sách: giới hạn được nhắm mục tiêu cho tất cả các danh mục của một ví cụ thể hoặc một danh mục cụ thể.
    <br/> 6. Tiết kiệm: một kế hoạch có mục tiêu để tiết kiệm tiền cho một ví cụ thể. 7. Sự kiện: một sự kiện tài chính cụ thể để theo dõi. Vd: đám cưới, du lịch, đại học, v.v.
    </section>
    <section class="col-sm-12">
        <div class="col-sm-10">
        CÂU HỎI CƠ BẢN
        <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Amazing là gì? Tôi có thể sử dụng nó để làm gì?
    </button>
     <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">
        Nếu bạn thích chủ động kiểm soát những gì đang xảy ra trong cuộc sống của mình và có toàn quyền đối với nó, Amazing là một trong những công cụ tốt nhất có thể mang lại cho bạn sức mạnh đó. Amazing cung cấp cho bạn hai giải pháp cho tài chính cá nhân của bạn: thói quen chi tiêu thông minh hơn và tiết kiệm / đầu tư tốt hơn cho tương lai của bạn. Đó là một công cụ mạnh mẽ để theo dõi tài chính cá nhân của bạn: thu nhập, chi phí, nợ và tiết kiệm.
       <br/> 1. Ghi lại và phân loại chi phí / thu nhập
      <br/>  2. Tạo ngân sách và theo dõi các kế hoạch tiết kiệm.
       <br/> 3. Theo dõi nợ / khoản vay của bạn.
       <br/> 4. Nhắc nhở hóa đơn & lên lịch cho các giao dịch định kỳ ..
      <br/>  5. Chế độ đi lại đối với khách du lịch. Bạn có thể xem thêm các blog hướng dẫn sử dụng tại</a>
    
  </div>
</div>
        </div>
    </section>
    <footer style="width: 100vw; height: 15vh;">
        <?php include'g_footer.php' ?>
    </footer>
    <script type="text/javascript" src="../js/jquery-1.10.2.min.js">
    </script>
    <script type="text/javascript" src="../js/bootstrap.min.js">
    </script>
</body>

</html>