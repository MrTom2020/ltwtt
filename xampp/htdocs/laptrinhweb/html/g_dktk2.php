<!DOCTYPE html>
<html>
<head>
	<title>Registation Form * Form Tutorial</title>
	<!-- Latest compiled and minified CSS -->
	<link rel="stylesheet" href="../css/bootstrap.min.css">

	<!-- jQuery library -->
	<script src="../js/jquery-3.3.1.min.js"></script>

	<!-- Popper JS -->
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>

	<!-- Latest compiled JavaScript -->
	<script src="../js/bootstrap.min.js"></script>
</head>
<body>
	<div class="container">
		<div class="panel panel-primary" style="margin-top:5%;">
			<div class="panel-heading">
				<h2 class="text-center">Đăng ký tài khoản cho thành viên</h2>
			</div>
			<div class="panel-body">
				<div class="form-group">
                <form action="../html/t_dang_ky.php" method="POST" class="js_ajax-forms" data-url="core/signup.php"> 
				  <label for="tentkht">Họ tên hiển thị</label>
				  <input required="true" type="text" class="form-control" name="tentkht">
				</div>
				<div class="form-group">
				  <label for="tentkdk">Tên đăng nhập</label>
				  <input required="true" type="text" class="form-control"name="tentkdk">
				</div>
				<div class="form-group">
				  <label for="ngaysinhtkdk">Ngày sinh</label>
				  <input type="date" class="form-control" name="ngaysinhtkdk">
				</div>
				<div class="form-group">
				  <label for="SDTDK">Số điện thoại</label>
				  <input required="true" type="text" class="form-control" name="SDTDK">
				</div>
                <div class="form-group">
				  <label for="DIACHIDK">Địa chỉ</label>
				  <input required="true" type="text" class="form-control" name="DIACHIDK">
				</div>
                <div class="form-group">
                <select name="sex" id="gender" class="form-control" required="">
                     <option value="none">Chọn giới tính:</option>
                     <option value="male">Nam</option>
                     <option value="female">Nữ</option> 
                     <option value="other">Khác</option> </select> 
				</div>
                <div class="form-group">
				  <label for="mktkdk">Mật khẩu</label>
				  <input required="true" type="password" class="form-control" name="mktkdk">
				</div>
                <div class="form-group">
				  <label for="mktkdkxn">Xác nhận mật khẩu</label>
				  <input required="true" type="password" class="form-control" name="mktkdkxn">
				</div>
				
				<button class="btn btn-success">Đồng ý</button>
                </form>
			</div>
		</div>
	</div>
</body>
</html>