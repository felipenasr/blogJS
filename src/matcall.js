$( document ).ready(function(){
	var semNumeros = function(e){
		this.value = this.value.replace(/\d/g, '');
	}
	var apenasNumeros = function(e){
		this.value = this.value.replace(/\D/g, '');
	}



	$(".button-collapse").sideNav();
	$('#idade').on('input', apenasNumeros);
	$('#name').on('input', semNumeros);
});