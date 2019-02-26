<?php 
header("access-control-allow-origin: *");

$name=$_POST["nombre"];
$email=$_POST["email"];
$telefono=$_POST["telefono"];
$puesto=$_POST["puesto"];

$con = mysqli_connect("localhost","root","") or die(mysqli_error());
mysqli_select_db($con,"daw") or die(mysqli_error());
$query = "INSERT INTO personas VALUES ('$name', '$email', $telefono, '$puesto', null)";
mysqli_query($con,$query);
?>
