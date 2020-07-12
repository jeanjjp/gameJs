// CRIA OBJETOS E VARIAVEIS
var tempoInicialFps = new Date().getTime();
var tempoAtualFps = 0;
var frames = 0;
var fps = 0;
var editorON = false;
var textoMenu = ""; 
var menu1 = false;
var menu2 = false;

var criadorInimigo = new CriadorPersonagens(1040, 64, 20, 20, "RED", 1);
var arrayInimigo = [];

var botao1 = new Botao(4, 5, 120, 20, "BLUE", 1, "Menu 1", "WHITE");
var botao2 = new Botao(128, 5, 120, 20, "BLUE", 2, "Menu 2", "WHITE");

var heroi = new Heroi(larguraMapa / 2 - 32, alturaMapa / 2 - 32, 64, 64, 1, 1, "WHITE", true);

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
		Util.desenhaMenuLateral(200, alturaMapa, "#6497b1", textoMenu, "BLACK", mouseX, mouseY, click);

		if (menu1) {
			criadorInimigo.desenhaCriadorPersonagens();
			criadorInimigo.atualizaCriadorPersonagens();
		}
		
		botao1.desenhaBotao();
		botao1.atualizaBotao();
		botao2.desenhaBotao();
		botao2.atualizaBotao();
	}
}


// Loop do jogo
setInterval(gameLoop, 0);
