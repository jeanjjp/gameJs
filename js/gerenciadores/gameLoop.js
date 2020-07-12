// CRIA OBJETOS E VARIAVEIS
var tempoInicialFps = new Date().getTime();
var tempoAtualFps = 0;
var frames = 0;
var fps = 0;
var editorON = false;

var criadorInimigo = new CriadorPersonagens(1040, 50, 20, 20, "RED", 1);

var heroi = new Heroi(larguraMapa / 2 - 32, alturaMapa / 2 - 32, 64, 64, 1, 1, "WHITE", true);

var arrayInimigo = [];

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
		if (editorON) {
			editorON = false;
		} else {
			editorON = true;
		}
		teclaCPressionada = false;
	}

	// Limpa o tela
	contexto.clearRect(0, 0, canvas.width, canvas.height);
	// desenha bakground
	Util.desenhaBackGround(larguraMapa, alturaMapa, "BLACK");








	//  -----  \/  DESENHA  E ATUALIZA EM CIMA DO BACKGROUD ----- \/

	heroi.desenhaHeroi();
	heroi.atualizaHeroi();

	for (var i = 0; i < arrayInimigo.length; i++) {
		arrayInimigo[i].desenhaInimigo();
		arrayInimigo[i].atualizaInimigo();
	}


	//  -----  /\  DESENHA  E ATUALIZA EM CIMA DO BACKGROUD ----- /\





	//desenha menu
	if (editorON) {
		Util.desenhaMenuSuperior(larguraMapa, 30, fps, "#6497b1", "BLACK", mouseX, mouseY, click);
		Util.desenhaMenuLateral(200, alturaMapa, "#6497b1");
		criadorInimigo.desenhaCriadorPersonagens();
		criadorInimigo.atualizaCriadorPersonagens();
	}

}


// Loop do jogo
setInterval(gameLoop, 0);
