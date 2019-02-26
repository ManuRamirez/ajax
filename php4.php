<?php
header("access-control-allow-origin: *");

$con = mysqli_connect("localhost","root","") or die(mysqli_error());
mysqli_select_db($con,"daw") or die(mysqli_error());

if(!isset($_GET["dep"])){
	$query = "SELECT * FROM personas";

	$result = mysqli_query($con,$query);
	$numReg = mysqli_num_rows($result);
	$strHTML = "<table><tr><th>Nombre</th><th>Email</th><th>Telefono</th><th>Puesto</th></tr>";

	echo "<b> <h2>Estos son los usuarios registrados en la base de datos </h2></b> <br>";


	for ($i=0; $i<$numReg; $i++) {
		$row = mysqli_fetch_array($result);
		$strHTML .="<tr><td>".$row["nombre"]."</td><td>".$row["email"]."</td><td>".$row["telefono"]."</td><td>".$row["puesto"]."</td></tr>";
	}
	$strHTML .="</table>";
}

echo $strHTML;
?>