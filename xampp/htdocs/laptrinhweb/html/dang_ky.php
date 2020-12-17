<!DOCTYPE html>
<html lang="vn">

<head>
    <meta charset="utf-8" />
    
</head>
<body>

<div class="modal fade in" role="dialog" aria-labelledby="dangky" aria-hidden="false" id="dk1" tabindex="-1" style="border: 0px; display: block;">
        
<div class="modal-dialog" role="document">
        <div class="modal-content col-sm-10">
        <div class="modal-header">
        <h4 class="modal-title text-center" aria-labelledby="dangky" col-sm-3>Đăng ký</h4>
        <button type="button" class="close" data-dismiss="modal" aria-label="close"><span aria-hidden="true">&times;</span></button>
        </div>
        <div class="modal-body">
        <div class="container">
        <div class="row">
        <div class="col-sm-12">
        <form  action="t_dang_ky.php" method="POST" role="form" class="row">
       
        <div class="form-group row">
           <label for="tentkdk">Tên hiển thị</label>
            <br>
         <input type="text" placeholder="Xin hãy nhập tài khoản " class="col-sm-3" id="tentkdk" name="tentkdk">
         </div>
         <div class="form-group row mt-5">
           <label for="tentkht">Tên tài khoản</label>
            <br>
         <input type="text" placeholder="Xin hãy nhập hiển thị " class="col-sm-3" id="tentkht" name="tentkht">
         </div>
         
         <div class="form-group row mt-5">
           <label for="SDT">Số điện thoại</label>
            <br>
         <input type="text" placeholder="Xin hãy nhập tài khoản " class="col-sm-3" id="SDTDK" name="SDTDK">
         </div>
         <div class="form-group row mt-5">
           <label for="DIACHI">Địa chỉ</label>
            <br>
         <input type="text" placeholder="Xin hãy nhập tài khoản " class="col-sm-3" id="DIACHIDK" name="DIACHIDK">
         </div>
         <div class="form-group row mt-3">
           <label for="ngaysinhtkdk">Ngày sinh</label>
            <br>
         <input type="date" class="col-sm-3 icon-align-right text-right" id="ngaysinhtkdk" name="ngaysinhtkdk">
         </div>
         <div class="form-group row mt-3">
           <label>Giới tính</label>
            <br>
            <select name="sex">
               <option value="NAM">Nam</option>
               <option value="NU">Nữ</option>
            </select>
         </div>
          <div class="form-group row mt-3">
          <label for="mktk">Mật khẩu</label>
          <br>
             <input class="col-sm-3" id="mktkdk" name="mktkdk" placeholder="Xin hãy nhập mật khẩu" type="password">
           </div>
           <div class="form-group row mt-3">
          <label for="mktkdkxn">Xác nhận mật khẩu</label>
          <br>
             <input class="col-sm-3" id="mktkdkxn" name="mktkdkxn" placeholder="Xin hãy xác nhận mật khẩu" type="password">
           </div>
        <div class="modal-footer col-sm-3" >
             <input type="submit" class="btn btn-primary" name="ok"> 
              <button class="btn btn-primary" data-dismiss="modal" aria-label="close">Thoát</button>
         </div>
        </form>
        </div>
       
        </div>
        </div>
        </div>
        </div>
        </div>


    </div>

</body>
</html>