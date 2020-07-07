// CRIA OBJETOS E VARIAVEIS
var tempoInicialFps = new Date().getTime();
var tempoAtualFps = 0;
var frames = 0;
var fps = 0;
var editorON = false;

var heroi = new Heroi(larguraMapa / 2 - 32, alturaMapa / 2 - 32, 64, 64, 1, 1, "WHITE", true);

var arrayInimigo = [];
var quantidadeInimigo = 20;
for (var i = 0; i < quantidadeInimigo; i++) {
	var inimigo = new Inimigo(Math.random() * larguraMapa, Math.random() * alturaMapa, 20, 20, Math.random() * -2 + 1, Math.random() * -2 + 1, "RED", true);
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

	//entra e sai do modo editor
	if (teclaShiftPressionada && teclaCPressionada) {
		editorON = true;
	} else if (teclaShiftPressionada && teclaFPressionada) {
		editorON = false;
	}
	
	// Limpa o tela
	contexto.clearRect(0, 0, canvas.width, canvas.height);
	// desenha bakground
	Util.desenhaBackGround(larguraMapa, alturaMapa, "BLACK");



	
	

	//  -----  \/  DESENHA  E ATUALIZA EM CIMA DO BACKGROUD ----- \/

	heroi.desenhaHeroi();
	heroi.atualizaHeroi();


	if (editorON) {
		for (var i = 0; i < arrayInimigo.length; i++) {
			arrayInimigo[i].desenhaInimigo();
		}
	} else if (!editorON) {
		for (var i = 0; i < arrayInimigo.length; i++) {
			arrayInimigo[i].desenhaInimigo();
			arrayInimigo[i].atualizaInimigo();
		}
	}

	//  -----  /\  DESENHA  E ATUALIZA EM CIMA DO BACKGROUD ----- /\





	//desenha menu
	if (editorON) {
		Util.desenhaMenuSuperior(larguraMapa, 30, fps, "#6497b1", "BLACK", mouseX, mouseY, click);
		Util.desenhaMenuLateral(200, alturaMapa, "#6497b1");
	}

}


// Loop do jogo
setInterval(gameLoop, 0);
