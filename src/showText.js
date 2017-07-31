(function () {
	// montando página de textos
	var uiText;

	var recebeTexto = function(){

		var textos = JSON.parse(localStorage.textos);
		var textoPrincipal = textos[uiText];
		var imprimeTexto = `<div class="col s12">
			<h3>${textoPrincipal.titulo}</h3>
			<h5>${textoPrincipal.subTitulo}</h5>
			<img src="${textoPrincipal.imagem}" class="responsive-img">
			<p class="flow-text">${textoPrincipal.textInput}</p>

			<ul class="collection">
				<li class="collection-item avatar">
			      <i class="material-icons circle">person</i>
			      <p><span class="title">${textoPrincipal.name}</span><br>
			         <span>${textoPrincipal.idade} </span> anos
			      </p>
			      <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
			    </li>
		    </ul>
		</div>`;
		$('#textSpace').html(imprimeTexto);
	}



	// recebendo as informações da URL
	var catchTextID = function(){
		uiText = location.search;
		uiText = uiText.replace(/\D/g, '');
		recebeTexto();
	}();
})();