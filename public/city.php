<?php
require('init.php');
$cid = $_REQUEST['cid'];
$sql = "select * from  city where cid=$cid";
$result = mysqli_query($conn,$sql);
echo json_encode(mysqli_fetch_all($result,1));
