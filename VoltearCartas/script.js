
//Obtengo todos los elementos con la clase carta
const cartas = document.getElementsByClassName("carta");

//Creo una lista que asignará a cada id una imagen
let listaImagenes = new Array( 
	{id: '0', imagen: "wizard.png"},
	{id: '1', imagen: "archer.png"},
	{id: '2', imagen: "barbarian.png"},
	{id: '3', imagen: "giant.png"},
	{id: '4', imagen: "wizard.png"},
	{id: '5', imagen: "archer.png"},
	{id: '6', imagen: "barbarian.png"},
	{id: '7', imagen: "giant.png"}
);

//Recorro la lista de cartas y a cada una le añado un evento click que ejecutará la función darVuelta
for (i=0; i<cartas.length; i++){
	cartas[i].addEventListener("click", darVuelta);
}


function darVuelta(){

	//Obtengo el elemento carta (el div) que he seleccionado por medio de su atributo id
	let cartaSeleccionada = document.getElementById(this.id);

	//Dentro de la carta seleccionada, obtengo todos las etiquetas con el tag img
	let imagenesCartaSeleccionada = cartaSeleccionada.getElementsByTagName("img");
		
	//Si la carta seleccionada contiene una clase estaDadaLaVuelta, modificará su imagen 
	//y la pondrá boca abajo, para ello, como nuestro elemento div sólo contiene una imagen
	//tendremos que obtener el primer elemento [0] como si de un array si tratara, sobre ese
	//elemento imagen, le cambio su imagen mediante .src
	if(cartaSeleccionada.classList.contains('estaDadaLaVuelta')){
		imagenesCartaSeleccionada[0].src = "back.png";
		//Finalmente le quito la clase estaDadaLaVuelta 
		cartaSeleccionada.classList.remove("estaDadaLaVuelta");
	
	//En caso de no tener la clase estaDadaLaVuelta, asigno a la imagen de la carta seleccionada, 
	//la imagen que obtengo mediante listaImagenes, que era un array de objetos, por lo tanto, 
	//de ese array, me quedo con el objeto cuyo id sea el de la carta seleccionada y obtengo 
	//su atributo imagen para asignarsela a nuestra carta.
	}else{
		imagenesCartaSeleccionada[0].src = listaImagenes[this.id].imagen;
		//Finalmente le añado la clase estaDadaLaVuelta 	
		cartaSeleccionada.classList.add("estaDadaLaVuelta");
	}


}
