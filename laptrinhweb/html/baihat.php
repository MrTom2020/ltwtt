<?php
    
     $username = "root";
     $dtname = "QLCT";
    $serverN = "localhost";
     $password = "";  
     $matk = isset($_SESSION['Mand']) ?  $_SESSION['Mand']:0;
    $conn = mysqli_connect($serverN,$username,$password,$dtname);
    $sql = "call xemthongbao1nguoi('$matk')";
    $ketnoi = mysqli_query($conn,$sql);
    $thuchien = mysqli_fetch_array($ketnoi);
    $_SESSION['tentieude'] = isset($thuchien[0]) ? $thuchien[0]:"Hiện tại chưa có thông báo";
    $_SESSION['noidung'] = isset($thuchien[1]) ? $thuchien[1]:"";
    
     mysqli_close($conn);
?>
<div class="modal-dialog" role="document" style="width:60%;">
                           <div class="modal-content">
                                <div class="modal-header">
                                      <h5 class="modal-title" id="exampleModalLabel">Thông báo</h5>
                                         <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                       <span aria-hidden="true">&times;</span>
                                          </button>
                                   </div>
                          <div class="modal-body">
                     <?php   $ss = isset($_SESSION['baihat']) ? $_SESSION['baihat']:""; 
                     echo "<strong>Tên thông báo </strong>";
                     echo  $_SESSION['tentieude'];
                     echo "<br/>";
                    echo "<strong>Nội dung thông báo </strong>";
                    echo $_SESSION['noidung'];
                   
                    echo "<br/>";
                   
                    ?> 
      </div>
      <?php include'thongbao.php'?>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Thoát</button>
       
      </div>
    </div>
  </div>