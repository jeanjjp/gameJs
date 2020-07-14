// CRIA OBJETOS E VARIAVEIS
var tempoInicialFps = new Date().getTime();
var tempoAtualFps = 0;
var frames = 0;
var fps = 0;
var editorON = false;
var textoMenu = "Menu 1";
var menu1 = true;
var menu2 = false;
var blocoSolto = true;

var criadorInimigo = new CriadorPersonagens(1045, 64, 60, 60, "RED", 1);
var criadorIGrama1 = new CriadorPersonagens(1120, 64, 60, 60, "RED", 2, "grama1.png");
var criadorGrama2 = new CriadorPersonagens(1045, 135, 60, 60, "RED", 3, "grama2.png");
var criadorArvore1 = new CriadorPersonagens(1120, 135, 60, 60, "RED", 4, "arvore1.png");

var arrayInimigo = [];
var arrayBlocos = [];

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

	for (var i = 0; i < arrayBlocos.length; i++) {
		arrayBlocos[i].desenhaBloco();
		arrayBlocos[i].atualizaBloco();
	}
	for (var i = 0; i < arrayInimigo.length; i++) {
		arrayInimigo[i].desenhaInimigo();
		arrayInimigo[i].atualizaInimigo();
	}
	
	heroi.desenhaHeroi();
	heroi.atualizaHeroi();
	//  -----  /\  DESENHA  E ATUALIZA EM CIMA DO BACKGROUD ----- /\





	//desenha menu
	if (editorON) {
		Util.desenhaMenuSuperior(larguraMapa, 30, fps, "#6497b1", "BLACK", mouseX, mouseY, click);
		Util.desenhaMenuLateral(200, alturaMapa, "BLACK", textoMenu, "WHITE", mouseX, mouseY, click);

		botao1.desenhaBotao();
		botao1.atualizaBotao();
		botao2.desenhaBotao();
		botao2.atualizaBotao();

		if (menu1) {
			criadorInimigo.desenhaCriadorPersonagens();
			criadorInimigo.atualizaCriadorPersonagens();
			criadorIGrama1.desenhaCriadorPersonagens();
			criadorIGrama1.atualizaCriadorPersonagens();
			criadorGrama2.desenhaCriadorPersonagens();
			criadorGrama2.atualizaCriadorPersonagens();
			criadorArvore1.desenhaCriadorPersonagens();
			criadorArvore1.atualizaCriadorPersonagens();
		}


	}
}


// Loop do jogo
setInterval(gameLoop, 0);
