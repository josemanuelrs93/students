var nombreOk = true;
var dniOk = true;
var grupoOk = true;

var TnombreOk = true;
var TdniOk = true;
var TgrupoOk = true;

function comprobarNombre(){
valor = document.getElementById("nombreAlu").value;
	if( valor == null || valor.length == 0 || /^\s+$/.test(valor) ) {
		document.getElementById("errorNom").innerHTML = " The name cant be empty";
		document.getElementById("nombreAlu").style.background = '#DC143C';
		nombreOk = false;
	}
		else{
		document.getElementById("errorNom").innerHTML = "";
		document.getElementById("nombreAlu").style.background = '#ffffff';
		nombreOk = true;
	}
}

function comprobarNombreT(){
valor = document.getElementById("nombreAluT").value;
	if( valor == null || valor.length == 0 || /^\s+$/.test(valor) ) {
		document.getElementById("nombreAluT").style.background = '#DC143C';
		TnombreOk = false;
	}
		else{
		document.getElementById("nombreAluT").style.background = '#ffffff';
		TnombreOk = true;
	}
}

function comprobarDNI(){
valor = document.getElementById("dniAlu").value;
var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

if( !(/^\d{8}[A-Z]$/.test(valor))) {
		document.getElementById("errorDni").innerHTML = " You must enter an ID";
		document.getElementById("dniAlu").style.background = '#DC143C';
		dniOk = false;
	}
		else{
			document.getElementById("errorDni").innerHTML = "";
			document.getElementById("dniAlu").style.background = '#ffffff';
			dniOk = true;
	}
}

function comprobarDNIT(){
valor = document.getElementById("dniAluT").value;
var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

if( !(/^\d{8}[A-Z]$/.test(valor))) {
		document.getElementById("dniAluT").style.background = '#DC143C';
		TdniOk = false;
	}
		else{
			document.getElementById("dniAluT").style.background = '#ffffff';
			TdniOk = true;
	}
}

function comprobarGrupo(){
indice = document.getElementById("grupoAlu").selectedIndex;
	if(indice == null || indice == 0){
	document.getElementById("errorGrupo").innerHTML = " You must choice a group";
	document.getElementById("grupoAlu").style.background = '#DC143C';
	grupoOk = false;
	}
		else{
			document.getElementById("errorGrupo").innerHTML = "";
			document.getElementById("grupoAlu").style.background = '#ffffff';
			grupoOk = true;
	}
}

function comprobarGrupoT(){
indice = document.getElementById("grupoAluT").selectedIndex;
	if(indice == null || indice == 0){
	document.getElementById("grupoAluT").style.background = '#DC143C';
	TgrupoOk = false;
	}
		else{
			document.getElementById("grupoAluT").style.background = '#ffffff';
			TgrupoOk = true;
	}
}
function validarDatos(){
comprobarNombre();
comprobarDNI();
comprobarGrupo();
	if(nombreOk == true && dniOk == true && grupoOk == true){
	insertarDatos();
	}
}

function insertarDatos(){
var nombre = document.getElementById("nombreAlu").value;
var dni = document.getElementById("dniAlu").value;
var grupo = document.getElementById("grupoAlu").value;
var mA = document.getElementById("edad");


var tabla = document.getElementById("miTabla");

var row = tabla.insertRow(1);
row.setAttribute("class", "fila");
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
cell5.setAttribute("id", "option");
  console.log(row);
  cell1.innerHTML = nombre;
  cell2.innerHTML = dni;
  cell3.innerHTML = grupo;
  if (mA.checked){
	cell4.innerHTML = "Yes";
	}else{
		cell4.innerHTML = "No";
}
  cell5.innerHTML = "<button type='button' id='edit' onclick='editarFila(this)'>Edit</button><button type='button' id='delete' onclick='eliminarFila();totalAlumnos()'>Delete</button>";
 }

var editando = false;
function editarFila(nodo) {

if (editando == false) {
	var nodoTd = nodo.parentNode;
	var nodoTr = nodoTd.parentNode;
	var nodosEnTr = nodoTr.getElementsByTagName('td');
	var nombre = nodosEnTr[0].textContent;
	var dni = nodosEnTr[1].textContent;

	var nuevoCodigoHtml =
'<td><input type="text" id="nombreAluT" value="'+nombre+'" size="10"></td>'+
'<td><input type="text" id="dniAluT" value="'+dni+'" size="10"</td>'+
'<td><select name="grupo" id="grupoAluT"><option value="">(Choice a group)</option><option value="1smr">1ºSMR</option><option value="2smr">2ºSMR</option><option value="1daw">1ºDAW</option><option value="2daw">2ºDAW</option><option value="fp">1ºFPB</option></select></td>'+
'<td><input type="checkbox" value="mayorEdad" id="edadT"></input></td>'+
'<td><button type="button" id="save" onclick="guardarEdicion(this)">Save edit</button>';
	nodoTr.innerHTML = nuevoCodigoHtml;
	} else {
	alert ('Solo se puede editar una línea. Recargue la página para poder editar otra');
	}
}

function guardarEdicion(nodo){

var nodoTd = nodo.parentNode;
	var nodoTr = nodoTd.parentNode;
	var nodosEnTr = nodoTr.getElementsByTagName('td');
	var nombre = document.getElementById("nombreAluT").value;
	var dni = document.getElementById("dniAluT").value;
	var curso = document.getElementById("grupoAluT").value;
	var mayorEdad = document.getElementById("edadT");

	if (mayorEdad.checked){
	var edad = "Yes";
	}else{
		edad = "No";
	}

	var nuevoCodigo =
'<td>'+nombre+'</td>'+
'<td>'+dni+'</td>'+
'<td>'+curso+'</td>'+
'<td>'+edad+'</td>'+
'<td><button type="button" id="edit" onclick="editarFila(this)">Editar</button><button type="button" id="delete" onclick="eliminarFila();totalAlumnos()">Eliminar</button></td>';
console.log(nodosEnTr);

comprobarNombreT();
comprobarDNIT();
comprobarGrupoT();
	if(TnombreOk == true && TdniOk == true && TgrupoOk == true){
	nodoTr.innerHTML = nuevoCodigo;
	}
}

function eliminarFila(){
var tabla = document.getElementById("miTabla");
	{
	var row = tabla.deleteRow(1);
	}
}


function totalAlumnos(){

document.getElementById('oculto').style.visibility = "visible";

var alumnos = document.getElementsByClassName('fila').length;
console.log(alumnos);
document.getElementById('contador').innerHTML = alumnos;

}
