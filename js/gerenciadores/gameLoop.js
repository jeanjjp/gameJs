// CRIA OBJETOS E VARIAVEIS
var tempoInicialFps = new Date().getTime();
var frames = 0;
var fps = 0;
var tempoAtualFps = 0;
var blocoSolto = true;
var menu1 = true;
var menu2 = false;
var menu3 = false;
var menu4 = false;
var menu5 = false;
var menu6 = false;
var menu7 = false;
var menu8 = false;
var menu9 = false;
var menu10 = false;
var camada1 = true;
var camada2 = false;
var camada3 = false;
var editorON = false;
var posInicialMenu = 3;
var posInicialCriadoX = 842;
var posInicialCriadoY = 130;
var textoMenu = "Menu 1";
var textoCamada = "Piso 1";

var botaoCamada1 = new Botao(840, 40, 50, 20, "BLUE", 11, "Piso 1", "WHITE");
var botaoCamada2 = new Botao(906, 40, 50, 20, "BLUE", 12, "Piso 2", "WHITE");
var botaoCamada3 = new Botao(970, 40, 50, 20, "BLUE", 13, "Piso 3", "WHITE");

var arrayInimigo = [];
var arrayBlocos = [];
var arrayBotao = [];
var arrayCriador = [];

arrayBotao.push(botaoCamada1);
arrayBotao.push(botaoCamada2);
arrayBotao.push(botaoCamada3);

for (var i = 0; i < 10; i++) {
	var botao = new Botao(posInicialMenu, 5, 80, 20, "BLUE", (i + 1), "Menu " + (i + 1), "WHITE");
	arrayBotao.push(botao);
	posInicialMenu += 83;
}

for (var i = 1; i <= 112; i++) {
	var criador = new CriadorPersonagens(posInicialCriadoX, posInicialCriadoY, 40, 40, "RED", i);
	arrayCriador.push(criador);
	if (i % 4 == 0) {
		posInicialCriadoX = 842;
		posInicialCriadoY += 51;
	} else {
		posInicialCriadoX += 47
	}
	if (i % 40 == 0) {
		posInicialCriadoY = 130;
	}
}

var heroi = new Heroi(larguraMapa / 2 - 32, alturaMapa / 2 - 32, 64, 64, 5, 5, "WHITE", true, "hero.png");

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
			blocoSolto = true;
		} else {
			editorON = true;
		}
		teclaCPressionada = false;
	}
	
	//salvar jogo
	if(teclaGPressionada){
		teclaGPressionada = false;
		Util.salvarMapa(arrayBlocos, arrayInimigo);   
	}
	//carregar jogo
	if(teclaLPressionada){
		teclaLPressionada = false; 
		Util.carregarMapa();
	}

	// Limpa o tela
	contexto.clearRect(0, 0, canvas.width, canvas.height);
	// desenha bakground
	Util.desenhaBackGround(larguraMapa, alturaMapa, "BLACK");








	//  -----  \/  DESENHA  E ATUALIZA EM CIMA DO BACKGROUD ----- \/

	for (var i = 0; i < arrayBlocos.length; i++) {
		if (arrayBlocos[i].getCamada() === "Piso 1") {
			arrayBlocos[i].desenhaBloco();
			arrayBlocos[i].atualizaBloco();
		}
	}
	for (var i = 0; i < arrayBlocos.length; i++) {
		if (arrayBlocos[i].getCamada() === "Piso 2") {
			arrayBlocos[i].desenhaBloco();
			arrayBlocos[i].atualizaBloco();
		}
		
	}
	
	heroi.desenhaHeroi();
	heroi.atualizaHeroi();
	
	for (var i = 0; i < arrayBlocos.length; i++) {
		if (arrayBlocos[i].getCamada() === "Piso 3") {
			arrayBlocos[i].desenhaBloco();
			arrayBlocos[i].atualizaBloco();
		}
	}
	for (var i = 0; i < arrayInimigo.length; i++) {
		arrayInimigo[i].desenhaInimigo();
		arrayInimigo[i].atualizaInimigo();
	}
	
	//deleta blocos e inimigos
	for (var i = 0; i < arrayBlocos.length; i++) {
		if (Util.colide(arrayBlocos[i].getPosX(), mouseX, arrayBlocos[i].getPosY(), mouseY, arrayBlocos[i].getTamX(), 0, arrayBlocos[i].getTamY(), 0)  && editorON && teclaFPressionada) {
			arrayBlocos.splice(i, 1);
		}
	}
	for (var i = 0; i < arrayInimigo.length; i++) {
		if (Util.colide(arrayInimigo[i].getPosX(), mouseX, arrayInimigo[i].getPosY(), mouseY, arrayInimigo[i].getTamX(), 0, arrayInimigo[i].getTamY(), 0)  && editorON && teclaFPressionada) {
			arrayInimigo.splice(i, 1);
		}
	}

	//  -----  /\  DESENHA  E ATUALIZA EM CIMA DO BACKGROUD ----- /\





	//desenha menu
	if (editorON) {
		Util.desenhaMenuSuperior(larguraMapa, 30, "#6497b1");
		Util.desenhaMenuLateral(200, alturaMapa, "BLACK", textoMenu, "WHITE", mouseX, mouseY, click, textoCamada);

		for (var i = 0; i < arrayBotao.length; i++) {
			arrayBotao[i].desenhaBotao();
			arrayBotao[i].atualizaBotao();
		}

		if (menu1) {
			for (var i = 0; i < 40; i++) {
				arrayCriador[i].desenhaCriadorPersonagens();
				arrayCriador[i].atualizaCriadorPersonagens();
			}
		}
		if (menu2) {
			for (var i = 40; i < 80; i++) {
				arrayCriador[i].desenhaCriadorPersonagens();
				arrayCriador[i].atualizaCriadorPersonagens();
			}
		}
		if (menu3) {
			for (var i = 80; i < 120; i++) {
				arrayCriador[i].desenhaCriadorPersonagens();
				arrayCriador[i].atualizaCriadorPersonagens();
			}
		}
		if (menu4) {
			
		}
		if (menu5) {
			
		}
		if (menu6) {
			
		}

	}
}


// Loop do jogo
setInterval(gameLoop, 30);
