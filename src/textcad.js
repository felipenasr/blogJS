// JS do cadastro do texto.
//
// passo 1: validar campos;
// passo 2: gravar dados;
// passo 3 redirecionar

(function () {

	// montando a UI
	var ui = {
		fields: document.querySelectorAll('input'),
		txt: document.querySelector('textarea'),
		button: document.querySelector('#submit')
	};
	// validando os campos
	var validaCampos = function (e){
		var errors = 0;
		var data = {};
		// subistituindo os enters por breaklines
		ui.txt.value = ui.txt.value.replace(/\n/g, '<br>');
		// desabilitando evento do button
		e.preventDefault();
		// verificando campos vazios
		if (ui.txt.value == ""){
			$(ui.txt).addClass('error');
			errors++;
		}else{
			$(ui.txt).removeClass('error');
			data[ui.txt.id] = ui.txt.value;
		}
		ui.fields.forEach(function(field, key){
			if (field.value.trim() == "") {
				$(field).addClass('error');
				errors++;
			}else{
				data[field.id] = field.value;
				$(field).removeClass('error');
			}
		});

		if (errors == 0 ){
			// gravando dados
			gravacaoDosTextos(data);
		}
	};

	var gravacaoDosTextos = function(data){
		// processo de gravaçado de dados, criaçao de ID dinamico e tratando dados com JSON
		data.id = localStorage.txtId ?parseInt(localStorage.txtId) + 1: 0;
		localStorage.txtId = parseInt(data.id);
		var textos = (localStorage.textos)?JSON.parse(localStorage.textos):[];
		textos.push(data);
		localStorage.textos = JSON.stringify(textos);
		location.replace("text.php?post=text"+localStorage.txtId);
	};

	// funcao gatilho do cadastro
	var cadastro = function(){

		ui.button.addEventListener("click", validaCampos);
	}();
})();
