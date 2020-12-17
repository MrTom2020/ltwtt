<?php
   session_start();
   echo $_SESSION['tui'];
   if($_SESSION['tui'] == '5')
   {
       echo '<a href="../gentelella/production/">';
       echo 'Quản trị viên';
       echo '</a>';
      // header("location:http://localhost:8080/gentelella/production/");
   }
   else
   {
       echo 'Bạn có đủ quyền để truy cập nội dung';
       header("location:../html/trangchu2.php");
   }

?>
