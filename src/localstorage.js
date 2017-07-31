// definindo alguns artigos, caso desejem executar a aplicação
var predef  = [{"textInput":"JavaScript foi originalmente desenvolvido por Brendan Eich quando trabalhou na Netscape sob o nome de Mocha, posteriormente teve seu nome mudado para LiveScript e por fim JavaScript. LiveScript foi o nome oficial da linguagem quando foi lançada pela primeira vez na versão beta do navegador Netscape 2.0 em setembro de 1995, mas teve seu nome mudado em um anúncio conjunto com a Sun Microsystems em dezembro de 1995 quando foi implementado no navegador Netscape versão 2.0B3.\n\nA mudança de nome de LiveScript para JavaScript coincidiu com a época em que a Netscape adicionou suporte à tecnologia Java em seu navegador (Applets). A escolha final do nome causou confusão dando a impressão de que a linguagem foi baseada em java, sendo que tal escolha foi caracterizada por muitos como uma estratégia de marketing da Netscape para aproveitar a popularidade do recém-lançado Java.\n\nJavaScript rapidamente adquiriu ampla aceitação como linguagem de script client-side de páginas web. Como consequência, a Microsoft desenvolveu um dialeto compatível com a linguagem de nome JScript para evitar problemas de marca registrada. JScript adicionou novos métodos para consertar métodos do JavaScript relacionados a data que apresentavam problemas.","titulo":"Primeiro texto com o CMS funcionando.","subTitulo":"Este é meu primeiro texto com o CMS funcionando. Tudo feito em JS. Muito top.","imagem":"http://www.aprenderexcel.com.br//imagens/noticia/385/2901-1.jpg","name":"Felipe Ricci","idade":"23","id":0},{"textInput":"Atualmente, a Tecnologia da Informação participa do dia-a-dia das organizações, vezes como uma arma eficiente de gestão da informação e de apoio às decisões, gerando um diferencial competitivo no mercado, vezes como uma ferramenta que afeta interesses, valores e rotinas há muito tempo centralizado em pessoas. A competitividade e a sobrevivência das Organizações dependem cada vez mais de sua capacidade de perceber as mudanças e antecipar-se às novas demandas, realinhando os investimentos em competências, tecnologias, produtos, serviços e mercados. A velocidade com que a informação e o conhecimento são criados e circulam sem fronteiras, potencializa a importância do capital intelectual. As Organizações dotadas de Inteligência Empresarial, estrategicamente apoiadas pela Tecnologia da Informação (TI), certamente estarão à frente no mundo dos negócios. A tendência natural é tentar medir o valor da informação pelo quanto adicional ela traz, entretanto, o conceito mais amplo e correto é o custo de oportunidade - quanto custa não tê-la. Neste sentido, medir o valor da informação passa a ser um processo semelhante ao de um seguro ou propaganda - quanto custa não ter\". Portanto, nesta abordagem amplamente utilizada, a informação é tratada como recurso, possuindo então custo e valor, taxa de retorno, custo de oportunidade de não se ter a informação; pode existir uma sinergia ao combinar dados cujo resultado final é maior que a soma das partes. Independente do tipo de organização - privada ou pública - o administrador orienta suas decisões de investimentos adotando o princípio da racionalidade econômica: obter o máximo resultado com um dado montante de recursos ou minimizar este montante para obtenção de um determinado resultado. Para esta análise, os recursos de informações oportunas e de qualidade são fundamentais para a decisão de maneira a garantir uma atuação eficaz da administração nas áreas sob sua responsabilidade.","titulo":"A Importancia da Tecnologia da Informação","subTitulo":"A Importancia da Tecnologia da Informação","imagem":"http://www.adamsilva.com.br/wp-content/uploads/2015/10/ti-tecnologia-da-informacao.jpg","name":"Autor Desconhecido","idade":"35","id":1},{"textInput":"Se você não esteve morando em baixo de uma rocha pelos últimos meses, provavelmente conhece o automatizador de tarefas Grunt, que já dominava a área há algum tempo. Mas agora, chegou um novo automatizador chamado Gulp que promete realizar suas tarefas de forma mais rápida e simples do que seu concorrente.\n\nCaso você não saiba, automatizadores de tarefa são ferramentas que ajudam programadores preguiçosos a realizarem tarefas repetitivas mas essenciais para o desenvolvimento como: concatenação de arquivos, minificação, testes e muitas outras coisas necessárias para a criação de um código rápido e eficiente.\n\nPor que Gulp?\nSe você já utiliza o Grunt em seus projetos, deve estar se perguntando por que mudar de automatizador. A resposta é simples: O Gulp é muito mais rápido que o Grunt, já que faz uso das streams do nodejs para escrever arquivos diretamente para o disco, dispensando intermediários. Sem falar na simplicidade do Gulpfile(equivalente ao Gruntfile), que utiliza uma sintaxe de código semelhante ao código comum do nodejs.\n\nEspero que até o final do texto você fique impressionado com a simplicidade do Gulp, e pense duas vezes antes de escolher o automatizador de tarefas para o seu próximo projeto.\n\nInstalação\nLembrando que o Gulp roda no nodejs então é preciso que você o tenha instalado no seu computador, caso esteja tudo ok, basta rodar o comando abaixo na sua linha de comando para instalar o CLI:\n\nnpm install -g gulp\nCaso você esteja em um sistema baseado em Unix, talvez seja preciso rodar `sudo` antes do comando acima. Agora você vai poder rodar o Gulp na sua linha de comando. Para ver a versão instalada, execute:\n\ngulp -v\nSe o comando acima retornar a versão do Gulp instalada, a instalação foi um sucesso.\n\nIniciando com o Gulp\nAgora vamos ao que interessa, a automatização! O Gulp faz uso do Gulpfile para configuração das tarefas que ele vai rodar, que é o único arquivo necessário.\n\nPara nossos testes, criei uma estrutura desta forma:\n\n|projeto/\n|--dist/\n|--src/\n|----source.js\n|--Gulpfile.js\nVou rodar três testes diferentes: Concatenação, minificação e teste de código com o jshint. O Gulp faz uso de plugins para facilitar a criação de tarefas, então vou instalar alguns para nós rodarmos nossos testes.\n\nnpm install gulp gulp-jshint gulp-uglify gulp-concat gulp-rename --save-dev\nNote que eu instalei o próprio Gulp DE NOVO e alguns plugins. Isto é porque o Gulp instalado anteriormente foi o CLI, responsável por rodar o comando `gulp` na linha de coma","titulo":"Gulp: O novo automatizador","subTitulo":"Automatize suas tarefas repetitivas de forma simples e rápida.","imagem":"https://engineroom.teamwork.com/wp-content/uploads/2015/11/a.png","name":" Guilherme Kalani","idade":"25","id":2}];
var last = predef.length;

if(localStorage.textos == undefined){
	localStorage.txtId = predef[last-1].id;
	predef = JSON.stringify(predef);
	localStorage.textos = predef;
}