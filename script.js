function addBola(){

	//criar elemento e setar para variável
	var bola = document.createElement("div");
	bola.setAttribute("class", "bola");

	//definir altura (p1) e largura (p2) para 
	//criação das bolas na tela
	var p1 = Math.floor(Math.random() * 500);
	var p2 = Math.floor(Math.random() * 500);

	//inserir valores na div criada (bola)
	bola.setAttribute("style", "left:"+p1+"px;top:"+p2+"px;");

	//açao de clique para estourar a bola (funçao onclick)
	bola.setAttribute("onclick", "estourar(this)");

	//função para pegar conteúdo no site adicionar
	//elemento novo. (bola)
	document.body.appendChild(bola);
}

//função para remover as bolas no clique
function estourar(elemento){
	document.body.removeChild(elemento);
}

//função para iniciar o jogo e adicionar as bolas
function iniciar(){
	setInterval(addBola, 1000);
}