<?php
header("access-control-allow-origin: *");

$dep = $_GET["dep"];

$con = mysqli_connect("localhost","root","") or die(mysqli_error());
mysqli_select_db($con,"daw") or die(mysqli_error());


$query = "SELECT nombre FROM puesto WHERE departamento LIKE '$dep'";

$result = mysqli_query($con,$query);
$numReg = mysqli_num_rows($result);
$strHTML = "";

for ($i=0; $i<$numReg; $i++) {
	$row = mysqli_fetch_array($result);
	$strHTML .="<option>".$row["nombre"]."</option>";
}
echo $strHTML;
?>