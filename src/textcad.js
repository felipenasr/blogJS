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
	var validaCampos = function (e){
		e.preventDefault();
		var errors = 0;
		if (ui.txt.value == ""){
			$(ui.txt).addClass('error');
			errors++;
		}else{
			$(ui.txt).removeClass('error');
		}
		ui.fields.forEach(function(field, key){
			if (field.value.trim() == "") {
				$(field).addClass('error');
				errors++;
			}else{
				$(field).removeClass('error');
			}
		});
		if (errors == 0 ){
      		document.querySelector('.error').focus();
		}
	};



	// funcao gatilho do cadastro
	var cadastro = function(){
		ui.button.addEventListener("click", validaCampos);
	}();
})();
