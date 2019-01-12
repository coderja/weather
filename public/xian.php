<?php
require('init.php');
//$xid = $_REQUEST['xid'];
$cname = $_REQUEST['cname'];
$sql = "select * from  xian where ctitle like '%$cname%'  ";
$result = mysqli_query($conn,$sql);
echo json_encode(mysqli_fetch_all($result,1));
