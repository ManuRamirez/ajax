

function mostrar() {
    document.getElementById("formulario").innerHTML = 'Nombre: <input type="text" id="nombre" name="nombre" > <br>Departamento: <select id="departamento" onclick="datos()"></select><br>Puesto: <select id="puesto"></select><br>Email: <input type="email" id="email" name="email" ><br>Telefono : <input type="tel" id="telefono" name="telefono" ><br><br> <button onclick="enviardatos()"id="enviardatos" class="button">Enviar Datos</button>'

	ajaxdatos();
  }

  function datos() {
	$dep = document.getElementById("departamento").value;
	datos2($dep);
}


function enviardatos() {
    nombre= document.getElementById('nombre').value;
    email = document.getElementById('email').value;
    telefono = document.getElementById('telefono').value;
    puesto = document.getElementById('puesto').value;

	var sxmlhttp;
	sxmlhttp=new XMLHttpRequest();
	sxmlhttp.onreadystatechange = function() {
			if (sxmlhttp.readyState==4 && sxmlhttp.status==200) {
                document.getElementById("estado").innerHTML='Guardado con exito';
                // document.getElementById("estado").innerHTML= sxmlhttp.responseText;
		    }
		}

	sxmlhttp.open("POST","http://127.0.0.1/ajax/php1.php",true);
    sxmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	sxmlhttp.send("nombre="+nombre+"&email="+email+"&telefono="+telefono+"&puesto="+puesto);
}




function ajaxdatos() {
    var rxmlhttp;
	rxmlhttp=new XMLHttpRequest();
	rxmlhttp.onreadystatechange = function() {
			if (rxmlhttp.readyState==4 && rxmlhttp.status==200) {
				document.getElementById("departamento").innerHTML=rxmlhttp.responseText;
				$dep = document.getElementById("departamento").value;
				datos2($dep);
		    }
		}

		rxmlhttp.open("POST","http://127.0.0.1/ajax/php2.php",true);
		rxmlhttp.send();
}


function datos2($dep) {
	var rxmlhttp2;
	rxmlhttp2 = new XMLHttpRequest();
	rxmlhttp2.onreadystatechange = function () {
		if (rxmlhttp2.readyState == 4 && rxmlhttp2.status == 200) {
			document.getElementById("puesto").innerHTML = rxmlhttp2.responseText;
		}
	}

	rxmlhttp2.open("GET", "http://127.0.0.1/ajax/php3.php?dep="+$dep, true);
	rxmlhttp2.send();
}


function ver() {
	var rxmlhttp;
	rxmlhttp = new XMLHttpRequest();
	rxmlhttp.onreadystatechange = function () {
		if (rxmlhttp.readyState == 4 && rxmlhttp.status == 200) {
			document.getElementById("tabla").innerHTML = rxmlhttp.responseText;
			
			
		}
	}

	rxmlhttp.open("GET", "http://127.0.0.1/ajax/php4.php", true);
	rxmlhttp.send();
}

