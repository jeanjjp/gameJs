// CRIA OBJETOS E VARIAVEIS
var tempoInicialFps = new Date().getTime();
var tempoAtualFps = 0;
var frames = 0;
var fps = 0;

var heroi = new Heroi(canvas.width / 2 - 10, canvas.height / 2 - 10, 64, 64, 1, 1, "WHITE", true);

var arrayInimigo = [];
var quantidadeInimigo = 20;
for (var i = 0; i < quantidadeInimigo; i++) {
	var inimigo = new Inimigo(Math.random() * canvas.width, Math.random() * canvas.height, 20, 20, Math.random() * -2+1, Math.random() * -2+1, "RED", true);
	arrayInimigo.push(inimigo);
}

/*FUNÇÕES DO JOGO*/
// Função que desenha todos os componentes do jogo a cada loop
function gameLoop() {
	"use strict";

	// calcula FPS
	this.tempoAtualFps = (new Date().getTime() - this.tempoInicialFps) / 1000;
	this.fps = this.frames / this.tempoAtualFps;
	if (this.tempoAtualFps >= 1) {
		this.frames = 1;
		this.tempoInicialFps = new Date().getTime();
	} else {
		this.frames += 1
	}
	//console.log(tempoAtualFps);
	// Limpa o tela
	contexto.clearRect(0, 0, canvas.width, canvas.height);

	// desenha bakground
	Util.desenhaBackGround(canvas.width, canvas.height, "BLACK");


	//  -----  \/  DESENHA  E ATUALIZA EM CIMA DO BACKGROUD ----- \/

	heroi.desenhaHeroi();
	heroi.atualizaHeroi();

	for (var i = 0; i < arrayInimigo.length; i++) {
		arrayInimigo[i].desenhaInimigo();
		arrayInimigo[i].atualizaInimigo();
	}
	
	//  -----  /\  DESENHA  E ATUALIZA EM CIMA DO BACKGROUD ----- /\
	
	
	//desenha menu
	Util.desenhaMenu(canvas.width, 30, fps, "WHITE", "BLACK");
}


// Loop do jogo
setInterval(gameLoop, 0);
