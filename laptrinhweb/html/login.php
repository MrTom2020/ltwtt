<?php
    $servername = "localhost";
    $username ="root";
    $password ="";
    $dbname = "QLCT";
    $conn = mysqli_connect($servername,$username,$password,$dbname);
    $sql = "SELECT * FROM dangnhap";
    $ket_noi =mysqli_query($conn,$sql);
    if(mysqli_num_rows($ket_noi) > 0)
    {
        while($row = mysqli_fetch_assoc($ket_noi))
        {
              if($row['Usename'] == $tennhap && $row['password'] == $matkhaunhap)
              {
                  echo $row['Usename'];
              }
              else
              {      
              }
  
        }
       
    }
    else
    {
        echo "0 results";
    }
?>