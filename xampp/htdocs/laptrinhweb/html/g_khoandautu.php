<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link id="btcss" href="../css/bootstrap_amazing.css" rel="stylesheet" media="(max-width: 996px)">
    <link rel="stylesheet" type="text/css" href="../css/amazing.css">
    <link rel="stylesheet" type="text/css" href="../css/css_tinhlaisuat.css">
    <link rel="stylesheet" type="text/css" href="../css/bootstrap.css">
</head>
<body>
<div class="page_wrap bg1 ">
    <div class="page">
        <div class="column_left">

            
<style type="text/css">.column_left p,.column_left a,.column_left div,.leftmenu > li > a{font-size:13px !important;}
</style>
<div class="caption">Cá nhân</div>
    <ul class="leftnav" style="margin-left:-100%;">
		<?php include'nav/menu_so_giao_dich.php' ?>
    </ul>
         </div>
        <div class="column_middle" style="margin-top:-3%;width:80%;height:100%;">
                <h1>Khoản thu nhập</h1>
          <table bgcolor="#fafafa" border="0" bordercolor="#e2e2e2" cellpadding="0" cellspacing="0" class="tbl-loan-repayment"> 
                <div class="slideshow">
                  <form action="t_khoandautu.php" method="post"  class="form">
                  <label for="loaidt">Loại đầu tư</label>
                  <input type="text" class="form-control" name="loaidt"/>
                  
                  <br/>
                   <br/>
                  <label for="tenkhoanchitieu3">Tên khoản thu nhập</label>
                  <input type="text" class="form-control" name="tenkhoanchitieu3"/>
                  
                  <br/>
                   <br/>
                   
                  <label for="tiena3">Tiền</label><input type="text" class="form-control" name="tiena3" style=" text-align: right;">
                  <br/>
                   <br/>
                  <label for="ngaygd3">Ngày giao dịch</label><input type="date" class="form-control" name="ngaygd3" style=" text-align: right;">
                  <br/>
                   <br/>
                  <label for="mota3">Mô tả</label><input type="text" class="form-control" name="mota3">
                  <input type="submit" value="Đồng ý" class="btn btn-link" style="border:1px solid; border-radius:15%;margin-top:2%;">
                  <a class="btn btn-link" href="../html/trangchu2.php" style="border:1px solid; border-radius:15%;margin-top:2%;">Quay lại</a>
                  </form>
                </div>
        </table>
        <div id="listRepayment">&nbsp;</div>
        <div class="line-bar">&nbsp;</div>     
        <div class="clear"></div>
                <div class="clear"></div>
                <div class="clear"></div>
                <div class="clear"></div>




            <div class="clear"></div>
            <div class="content_footer">
                <div class="float-left"> </div>
            </div>

        </div>
    </div>
</div>
</body>
</html>