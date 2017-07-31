(function () {
	var ui = {
		lastPosts: localStorage.textos,
		button: document.querySelector('.more-posts')
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
					          	<a href="#" class="leia-mais">Leia mais!</a>
					        </div>
					      </div>
					    </div>
					</div>`;
			console.log(line);
			html.push(line);

		}
		html = html.join("");
		$('#last-cont').html(html);
	}();

})();

