<?php 
  
   $username = "root";
   $dtname = "QLCT";
   $serverN = "localhost";
   $password = "";
   $conn = mysqli_connect($serverN,$username,$password,$dtname);
   $row1;
   $row2;
   $maid = isset($_SESSION['Mand']) ? $_SESSION['Mand']:0;
   //if($maid != '' && $maid != NULL)
   {
     $sql = "CALL BAOCAOTHEOthangmuasam('$maid')";
     $result = mysqli_query($conn, $sql);
     if($result)
    {
       $row = mysqli_fetch_array($result);
    }
   $sql1 = "CALL 	BAOCAOTHEOthangdautu('$maid')";

   $result1 = mysqli_query($conn, $sql1);
   if($result1)
   {
       $row1 = mysqli_fetch_array($result1);
   }
   
 $sql2 = "CALL BAOCAOTHEOthangmuasamhangngay('$maid')";
 $result2 = mysqli_query($conn, $sql2);
 if($result2)
 {
     $row2= mysqli_fetch_array($result2);
 }
    $r1 = isset($row[0]) ? $row[0]:0;
    $r2 = isset($row1[0]) ? $row1[0]:0;
    $r3 = isset($row2[0]) ? $row2[0]:0;
    $conlai = 100 - $r1 - $r2 - $r3;
    if($r1 == 100)
    {
        $conlai = 0;
        $r2 = 0;
        $r3 = 0;
    } if($r2 == 100)
    {
        $conlai = 0;
        $r1 = 0;
        $r3 = 0;
    }
    if($r3 == 100)
    {
        $conlai = 0;
        $r2 = 0;
        $r1 = 0;
    }
    $dd = array();
     array_push($dd,
     array(
     "label"=> "Tiền shopping",
     "y"=> $r1),
     array(
     "label"=> "Tiền Mua sắm hằng ngày",
     "y"=> $r3),
     array(
       "label"=> "Tiền đầu tư",
       "y"=> $r2),
       array(
         "label"=>  "Tiền còn lại",
         "y"=> $conlai));
  }
  mysqli_close($conn);
?>
<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<script>
window.onload = function()
 {
var chart = new CanvasJS.Chart("chartContainer", {
	theme: "light2",
	animationEnabled: true,
	title: {
		text: "Báo cáo theo tháng"
	},
	data: [{
		type: "pie",
		indexLabel: "{y}",
		yValueFormatString: "#,##0.00\"%\"",
		indexLabelPlacement: "inside",
		indexLabelFontColor: "#36454F",
		indexLabelFontSize: 18,
		indexLabelFontWeight: "bolder",
		showInLegend: true,
		legendText: "{label}",
		dataPoints: <?php echo json_encode($dd, JSON_NUMERIC_CHECK); ?>
	}]
});
chart.render();
 
}
</script>
</head>
<body>
<div id="chartContainer" style="height: 370px; width: 100%;"></div>
<script src="https://canvasjs.com/assets/script/canvasjs.min.js"></script>
</body>
</html>
