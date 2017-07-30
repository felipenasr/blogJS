<main class="row">
	<form class="col-s12" action="#">
		<div class="row">
			<div class="input-field col s12">
				<input id="titulo" type="text" data-length="70">
				<label for="titule">título</label>
			</div>
			<div class="input-field col s12">
				<input id="sub-titulo" type="text" data-length="150">
				<label for="sub-titulo">subtitulo</label>
			</div>

			<div class="input-field col s12">
				<textarea id="text-input" class="materialize-textarea" data-length="2500"></textarea>
				<label for="text-input">texto</label>
			</div>

			<div class="input-field col s12">
				<input id="imagem" type="text" maxlength=1060 >
				<label for="imagem">coloque o link da sua imagem</label>
			</div>

			<div class="input-field col s6">
				<input id="name" maxlength=45 type="text">
				<label for="name" >nome</label>
			</div>

			<div class="input-field col s6">
				<input id="email" maxlength=60 type="email">
				<label for="email" >e-mail</label>
			</div>

			<div class="input-field col s6">
				<input id="twitter" maxlength=200 type="text">
				<label for="twitter">rede social ou contato</label>
			</div>
			<div class="input-field col s3">
				<input id="cidade" maxlength=30 type="text">
				<label for="cidade" >cidade</label>
			</div>
			<div class="input-field col s3">
				<input id="idade" maxlength=2 type="text">
				<label for="idade" >idade</label>
			</div>
			<div class="input-field col s12">
				<button class="btn waves-effect waves-light btn-large right" type="submit" name="action" id="submit">Submit
	    			<i class="material-icons right">send</i>
	  			</button>
			</div>
		</div>
	</form>
</main>