<style>
    nav {
  min-width: 800px;
}
 
nav ul {
  position: relative; 
}
 
nav > ul:after {
  content: "";
  position: absolute;
  width: 50%;
  border-radius: 40%;
  height: 40px;
  bottom: 0;
  left: 20%;
  box-shadow: 0 0 10px rgba(28, 110, 126, 0.5);
  z-index: -1; 
}
 
nav > ul:hover:after {
  bottom: 5px; 
}
 
nav.ph-lift {
  text-align: center;
}
  
nav.ph-lift > ul {
    display: inline-block;
    position: relative;
}
     
nav.ph-lift > ul:after {
      box-shadow: 0 0 10px rgba(0, 128, 128, 0.5); 
}
 
nav.ph-lift ul li {
    float: left;
    height: 90px;
    line-height: 90px;
    background: white;
    overflow: hidden;
    -webkit-transition: all.6s ease;
    -moz-transition: all.6s ease;
    -o-transition: all.6s ease;
    -ms-transition: all.6s ease;
    transition: all.6s ease; 
}
    
nav.ph-lift ul li:hover {
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.3) inset;
      background: teal; 
}
     
nav.ph-lift ul li a {
      display: block;
      text-decoration: none;
      color: #007e7e;
      padding: 0 45px;
      margin-top: 0;
      -webkit-transition: all.6s ease;
      -moz-transition: all.6s ease;
      -o-transition: all.6s ease;
      -ms-transition: all.6s ease;
      transition: all.6s ease; 
}
     
nav.ph-lift ul li:hover a {
      margin-top: -90px;
      color: white;
      text-shadow: 0 1px 2px  black; 
}
      
nav.ph-lift ul li a:after {
        content: attr(data-title);
        display: block; 
}
</style>
<nav class="ph-lift">
        <ul>
            <li class="active"><a href="../html/bao_cao.php" data-title="theo tuần">Báo cáo theo tuần</a></li>
            <li><a href="../html/bctheothang.php" data-title="theo tháng">Báo cáo theo tháng</a></li>
            <li><a href="../html/baocaotheoquy.php" data-title="theo quý">Báo cáo theo quý</a></li>
            <li><a href="../html/bctheonam.php" data-title="theo năm">Báo cáo theo năm</a></li>
        <ul>
</nav>    
<img src="../tainguyenkhac/hinh_anh/hinh_dong_vat/dv2.png" style="width:20%;height:20%;margin-top:5%;"/>