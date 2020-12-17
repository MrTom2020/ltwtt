<?php
            session_start();
            $tendangnhaP = isset($_SESSION['tentaikhoan']) ? $_SESSION['tentaikhoan'] :'Đăng nhập';
            $k = isset($_SESSION['tui']) ? $_SESSION['tui']:0;
           if($k == '5')
          {
          echo '<strong style="margin-left:92%;">';
             echo '<a href="../gentelella/production/">';
             echo 'Quản trị viên';
                echo '</a>';
                echo '</strong>';
           }
           
    ?>
               <div class="navbar-header">
                    <button class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                         <span class="icon icon-bar"></span>
                         <span class="icon icon-bar"></span>
                         <span class="icon icon-bar"></span>
                    </button>
                    
               </div>
               <div class="modal fade" id="dd" tabindex="-1" role="dialog" data-backdrop="false" aria-labelledby="exampleModalLabel" aria-hidden="true" >
                   <?php include'baihat.php'?>
               </div>
               <!-- MENU LINKS -->
               <div class="collapse navbar-collapse">
                    <ul class="nav navbar-nav navbar-nav-first">
                         <li><a href="../html/trangchu2.php" class="smoothScroll">Trang chủ</a></li>
                         <li><a href="../html/lap_ke_hoach.php" class="smoothScroll">Lập kế hoạch</a></li>
                         <li><a href="../html/goi_dich_vu.php" class="smoothScroll">gói dịch vụ</a></li>
                         <li><a href="../html/bao_cao.php" class="smoothScroll">Báo cáo khoản chi</a></li>
                         <li><a href="../html/dangkytaikhoanmoi.php" class="smoothScroll">Đăng ký tài khoản thành viên</a></li>
                         <li><a href="../html/so_giao_dich.php" class="smoothScroll">Sổ giao dịch</a></li>
                         <li><a href="../html/taikhoan2.php" class="smoothScroll">Tài khoản</a></li>
                         <button data-toggle="modal"    data-target="#dd"> Thông báo</button>

                    </ul>

                    <ul class="nav navbar-nav navbar-right">
                         <li><a href="#"><i class="fa fa-phone"></i>Xin chào bạn</a></li>
                         <a href="#" class="navbar-brand"><?php echo $tendangnhaP;?> </a><a href="../web/" class="btn btn-success">Thoát</a>
                    </ul>
               </div>