// CRIA OBJETOS E VARIAVEIS
var tempoInicialFps = new Date().getTime();
var tempoAtualFps = 0;
var frames = 0;
var fps = 0;
var heroi = new Heroi(canvas.width/2-10, canvas.height/2-10, 20, 20, 2, 2, "WHITE", true);




/*FUNÇÕES DO JOGO*/
// Função que desenha todos os componentes do jogo a cada loop
function gameLoop() {
	"use strict";

	// calcula FPS
	this.tempoAtualFps = (new Date().getTime() - this.tempoInicialFps) / 1000;
	this.fps = this.frames / this.tempoAtualFps;
	if (this.tempoAtualFps >= 1) {
		this.frames = 0;
		this.tempoInicialFps = new Date().getTime();
	} else {
		this.frames += 1
	}

	// Limpa o tela
	contexto.clearRect(0, 0, canvas.width, canvas.height);

	// desenha bakground
	Util.desenhaBackGround(canvas.width, canvas.height, fps, "BLACK");
	heroi.desenhaHeroi();
	heroi.atualizaHeroi();

}


// Loop do jogo
setInterval(gameLoop, 0);
