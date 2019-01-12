<?php
header("Content-Type,text/json;charset=utf8");
$conn = mysqli_connect('127.0.0.1','root','','china',3306);
mysqli_query($conn,"set names utf8");