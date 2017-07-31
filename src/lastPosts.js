(function () {
	// montando ui da pagina de cadastro
	var ui = {
		lastPosts: localStorage.textos,
		morePost: 0,
		button: document.querySelector('#more-post')
	}

	// função que imprime os 3 primeiros textos na pagina home
	var showMore = function(e){
		var html = [];
		var lines;
		var posts = ui.lastPosts;
		ui.morePost++;
		var lengthPost = posts.length-(3*ui.morePost);
		if(lengthPost<=0){
			lines = `
			<div class="row">
				<div class="col s12">
					<h4 class="center">Não há mais publicações</h4>
				</div>
			</div>`;
			$('#more-post-cont').remove();
			html = $('#last-cont').html();
			$('#last-cont').html(html+lines);
		}else{
			for (var i = lengthPost; i < lengthPost+3; i++) {
				lines = `
					<div class="row">
					    <div class="col s12">
					      <div class="card">
					        <div class="card-image">
					          <img src="${posts[i].imagem}">
					        </div>
					        <div class="card-content">
					          <span class="card-title">${posts[i].titulo}</span>
					          <p>${posts[i].subTitulo}</p>
					        </div>
				           <div class="card-action">
					          	<a href="text.php?posts=text${posts[i].id}" class="leia-mais">Leia mais!</a>
					        </div>
					      </div>
					    </div>
					</div>`;
				html.push(lines);
			}
			
			html = html.join("");
			var concatena = $('#last-cont').html();
			$('#last-cont').html(concatena);
		}
	}
	var showPosts = function() {
		var html = [];
		var lines;
		ui.lastPosts = JSON.parse(ui.lastPosts);
		ui.lastPosts = ui.lastPosts.slice(0).reverse();
		console.log(ui.lastPosts);
		post = ui.lastPosts;
		for(var i = 0; i<3; i++){
			var line = `
					<div class="row">
					    <div class="col s12">
					      <div class="card">
					        <div class="card-image">
					          <img src="${post[i].imagem}">
					        </div>
					        <div class="card-content">
					          <span class="card-title">${post[i].titulo}</span>
					          <p>${post[i].subTitulo}</p>
					        </div>
				           <div class="card-action">
					          	<a href="text.php?post=text${post[i].id}" class="leia-mais">Leia mais!</a>
					        </div>
					      </div>
					    </div>
					</div>`;
			html.push(line);

		}
		html = html.join("");
		$('#last-cont').html(html);
	}();
	var init = function () {
		ui.button.addEventListener("click", showMore);
	}();

})();

