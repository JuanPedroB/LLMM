const contenedorCentral = document.getElementById('columna-central');
const contenedorDerecho = document.getElementById('columna-derecha'); 
const contenedorSugerencia = document.getElementById('contenedorSugerencias');
const contenedorTendencia = document.getElementById('contenedorTendencias');
var salto = false;

function openFile(event) {
    var input = event.target;
    var reader = new FileReader();

    reader.readAsText(input.files[0]);

    reader.onload = function(){
        var text = reader.result;
        var XMLdocument = removeWhiteSpace(text);

        getDocumentXML(XMLdocument);
    };

};

function getDocumentXML(xmlDocument){
	var parser = new DOMParser();
	var xmlDOM = parser.parseFromString(xmlDocument, "text/xml");
	addNotice(xmlDOM);
}

function addNotice(xmlDoc){
	var listaTweet = xmlDoc.getElementsByTagName('tweet');
	var listaSugerencia = xmlDoc.getElementsByTagName('sugerencia');
	var listaTendencia = xmlDoc.getElementsByTagName('tendencia');

	for (var tweet = 0; tweet < listaTweet.length; tweet++) {
		
		var currentTweet= listaTweet[tweet];

		var noticia = document.createElement("div");
		noticia.classList.add("tweet");

		var nombre = document.createElement('h2');
		nombre.classList.add("tweeth2");
		nombre.innerText = currentTweet.childNodes[0].firstChild.nodeValue;
		noticia.appendChild(nombre);

		var texto = document.createElement('p');
		texto.classList.add("tweetp");
		texto.innerText = currentTweet.childNodes[1].firstChild.nodeValue;
		noticia.appendChild(texto);

		var img = document.createElement('img');
		img.classList.add("imagenTweet");
		img.src = currentTweet.childNodes[2].firstChild.nodeValue;
		noticia.appendChild(img);

		var saltoLinea = document.createElement("hr");
		noticia.appendChild(saltoLinea);

		contenedorCentral.appendChild(noticia);
	}



	for (var sugerencia = 0; sugerencia < listaSugerencia.length; sugerencia++) {

		var currentSugerencia = listaSugerencia[sugerencia];

		var noticia = document.createElement("div");
		noticia.classList.add("sugerencia");

		var img = document.createElement("img");
		img.classList.add("imagenSugerencia");
		img.src = currentSugerencia.childNodes[0].firstChild.nodeValue;
		noticia.appendChild(img);

		var nombre = document.createElement("h2");
		nombre.innerText = currentSugerencia.childNodes[1].firstChild.nodeValue;
		nombre.classList.add("nombreH2");
		noticia.appendChild(nombre);

		var botonSeguir = document.createElement("div");
		botonSeguir.classList.add("botonSeguir");
		
		var boton = document.createElement("button");
		boton.innerText = currentSugerencia.childNodes[2].firstChild.nodeValue;
		boton.classList.add("boton");
		botonSeguir.appendChild(boton);

		noticia.appendChild(botonSeguir);

		contenedorSugerencia.appendChild(noticia);
		contenedorDerecho.appendChild(contenedorSugerencia);
	}

		var saltoEntreContenedores = document.createElement("br");
		contenedorDerecho.appendChild(saltoEntreContenedores);

	for (var tendencia = 0; tendencia < listaTendencia.length; tendencia++) {
		
		var currentTendencia = listaTendencia[tendencia];

		var noticia = document.createElement("div");
		noticia.classList.add("tendencia");

		var titulo = document.createElement('h3');
		titulo.innerText = currentTendencia.childNodes[0].firstChild.nodeValue;
		titulo.classList.add("tituloH3");
		noticia.appendChild(titulo);

		var img = document.createElement("img");
		img.classList.add("imagenTendencia");
		img.src = currentTendencia.childNodes[1].firstChild.nodeValue;
		noticia.appendChild(img);

		if(salto == true){
			var saltoLinea = document.createElement("hr");
			contenedorTendencia.appendChild(saltoLinea);
		}else{
			salto = true;
		}

		contenedorTendencia.appendChild(noticia);
		contenedorDerecho.appendChild(contenedorTendencia);
	}
	salto = false;
}

function removeWhiteSpace(xmlDoc){
	xmlDoc = xmlDoc.replace(/>\s*/g, '>');  // Reemplaza el signo y todos los espacios en blanco a continuación "> " por ">" 
	xmlDoc = xmlDoc.replace(/\s*</g, '<');  // Reemplaza lo mismo pero con el otro signo "< " por "<"
	return xmlDoc;
}