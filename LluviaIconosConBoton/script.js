
const botonEmpezar = document.getElementById('botonEmpezar');
botonEmpezar.onclick = empezarJuego;


function empezarJuego(){
	setInterval(insertarIcono, 1000);
	botonEmpezar.classList.add("oculta");
}


function eliminarIcono(icono){
	icono.remove();
}
function insertarIcono(){
	//Creamos un nuevo elemento en el documento
	const icono = document.createElement('div');

	icono.classList.add('icono');

	icono.innerHTML = '🏈';

	icono.style.left = Math.random() * 100 + "vw";
	icono.style.animationDuration = Math.random() * 2 + 3 +"s";

	//Insertar el elemento creado dentrode la etiqueta body
	document.body.appendChild(icono);

	setTimeout(eliminarIcono, 4000, icono);
}