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
<div class="caption">Danh mục chọn</div>
    <ul class="leftnav">
		<?php include'g_menu_vitien.php' ?>
    </ul>
         </div>
        <div class="column_middle">
                <h1>Ví của tôi</h1>
                <div class="slideshow">
                <form action="t_taovi.php" method="POST" class="form">
                    <lable for="tenvi">Tên ví</lable>
                    <input type="text" class="form-control" placeholder="Nhập tên ví..." name="tenvi">
                    <br/>
                    <br/>
                    <lable for="tientrongvi">Tiền trong ví</lable>
                    <input type="text" class="form-control" placeholder="Nhập tiền trong ví..." name="tientrongvi">
                    <br/>
                    <br/>
                    <lable for="mota">Ghi chú</lable>
                    <input type="text" class="form-control" placeholder="Nhập ghi chú..." name="mota">
                    <br/><br/>
                    <input type="submit" class="btn btn-sm" value="Đồng ý">
                    </form>
                </div>

 <div class="clear"></div>
<div class="clear"></div>
<div class="clear"></div>
 <div class="clear"></div>
     <div class="clear"></div>
            <div class="content_footer">
                <div class="float-left">
                </div>
                
            </div>

        </div>
    </div>
</div>
</body>
</html>