// CRIA OBJETOS E VARIAVEIS
var tempoInicialFps = new Date().getTime();
var antes = new Date().getTime();
var tempo = 0;
var podeAtirar = true;
var frames = 0;
var fps = 0;
var tempoAtualFps = 0;
var blocoSolto = true;
var inimigoSolto = true;
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
var cooldownArma1 = 0.3;
var proximoNivel = 5;

var botaoCamada1 = new Botao(840, 40, 50, 20, "BLUE", 11, "Piso 1", "WHITE");
var botaoCamada2 = new Botao(906, 40, 50, 20, "BLUE", 12, "Piso 2", "WHITE");
var botaoCamada3 = new Botao(970, 40, 50, 20, "BLUE", 13, "Piso 3", "WHITE");

var arrayInimigo = [];
var arrayArma = [];
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

for (var i = 0; i < larguraMundo; i = i + 64) {
	for (var k = 0; k < alturaMundo; k = k + 64) {
		var rdn = Math.floor(Math.random() * 24) + 1;
		if (rdn > 2 && rdn < 13) {
			rdn = 1;
		}
		var bloco = new Bloco(i, k, 64, 64, "RED", rdn, "piso/piso" + rdn + ".png", textoCamada);
		arrayBlocos.push(bloco);
	}

}

var heroi = new Heroi(larguraMapa / 2 - 32, alturaMapa / 2 - 32, 64, 64, 5, 5, "WHITE", true, "hero.png");
var arma1 = new Arma();

for (let i = 0; i < 20; i++) {
	var rdn = Math.floor(Math.random() * 4) + 1;
	if (rdn == 1) {
		var inimigo = new Inimigo(Math.random() * larguraMapa, alturaMinMapa, 64, 64, Math.random() * 1, Math.random() * 1, "RED", 2, textoCamada, "npc/npc1.png");
	} else if (rdn == 2) {
		var inimigo = new Inimigo(Math.random() * larguraMapa, alturaMapa, 64, 64, Math.random() * 1, Math.random() * 1, "RED", 2, textoCamada, "npc/npc1.png");
	} else if (rdn == 3) {
		var inimigo = new Inimigo(larguraMapa, Math.random() * alturaMapa, 64, 64, Math.random() * 1, Math.random() * 1, "RED", 2, textoCamada, "npc/npc1.png");
	} else {
		var inimigo = new Inimigo(larguraMinMapa, Math.random() * alturaMapa, 64, 64, Math.random() * 1, Math.random() * 1, "RED", 2, textoCamada, "npc/npc1.png");
	}

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
		if (editorON) {
			editorON = false;
			blocoSolto = true;
		} else {
			editorON = true;
		}
		teclaCPressionada = false;
	}

	//salvar jogo
	if (teclaGPressionada) {
		teclaGPressionada = false;
		Util.salvarMapa(arrayBlocos, arrayInimigo);
	}
	//carregar jogo
	if (teclaLPressionada) {
		teclaLPressionada = false;
		Util.carregarMapa();
	}

	//cooldown da arma
	tempo = (new Date().getTime() - antes) / 1000;
	if (tempo >= arma1.getCooldown()) {
		podeAtirar = true
		tempo = 0;
		antes = new Date().getTime();
	}


	if (arrayInimigo.length < 20) {
		var rdn = Math.floor(Math.random() * 4) + 1;
		if (rdn == 1) {
			var inimigo = new Inimigo(Math.random() * (larguraMapa - larguraMinMapa), alturaMinMapa, 64, 64, Math.random() * 1, Math.random() * 1, "RED", 2, textoCamada, "npc/npc1.png");
		} else if (rdn == 2) {
			var inimigo = new Inimigo(Math.random() * (larguraMapa - larguraMinMapa), alturaMapa, 64, 64, Math.random() * 1, Math.random() * 1, "RED", 2, textoCamada, "npc/npc1.png");
		} else if (rdn == 3) {
			var inimigo = new Inimigo(larguraMapa, Math.random() * (alturaMapa - alturaMinMapa), 64, 64, Math.random() * 1, Math.random() * 1, "RED", 2, textoCamada, "npc/npc1.png");
		} else {
			var inimigo = new Inimigo(larguraMinMapa, Math.random() * (alturaMapa - alturaMinMapa), 64, 64, Math.random() * 1, Math.random() * 1, "RED", 2, textoCamada, "npc/npc1.png");
		}

		arrayInimigo.push(inimigo);
	}

	//Atirar
	if (click && podeAtirar && !editorON) {
		var angulo = Math.atan2(mouseY - heroi.getPosY() - (heroi.getTamY() / 2) + alturaMinMapa, mouseX - heroi.getPosX() - (heroi.getTamX() / 2) + larguraMinMapa);
		arma1 = new Arma(heroi.getPosX() + (heroi.getTamX() / 2), heroi.getPosY() + (heroi.getTamY() / 2), 3, 3, angulo, 10, "WHITE", true, 2, cooldownArma1);
		arrayArma.push(arma1);
		podeAtirar = false;
	}


	for (var t = 0; t < arrayArma.length; t++) {
		if (arrayArma[t].getPosX() > 0 || arrayArma[t].getPosY() > 0) {
			for (var h = 0; h < arrayInimigo.length; h++) {
				if (Util.colide(arrayInimigo[h].getPosX() + 15 - larguraMinMapa, arrayArma[t].getPosX() - larguraMinMapa, arrayInimigo[h].getPosY() + 15 - alturaMinMapa, arrayArma[t].getPosY() - alturaMinMapa, arrayInimigo[h].getTamX() - 30, arrayArma[t].getTamX(), arrayInimigo[h].getTamY() - 30, arrayArma[t].getTamY())) {

					var posicaoTiro = Array.from(arrayArma).indexOf(arrayArma[t]);
					arrayArma.splice(posicaoTiro, 1);

					arrayInimigo[h].setVida(arrayInimigo[h].getVida() - 1);
					if (arrayInimigo[h].getVida() <= 0) {
						heroi.setXP(heroi.getXP() + arrayInimigo[h].getXP()); 
						var posicaoInimigo = Array.from(arrayInimigo).indexOf(arrayInimigo[h]);
						arrayInimigo.splice(posicaoInimigo, 1);

						if (heroi.getXP() >= proximoNivel) {
							cooldownArma1 -= 0.003;
							proximoNivel += heroi.getXP();
							heroi.setNivel(heroi.getNivel()+1);
						}
						
					}
					break;
				}
			}
		};
	}
	console.log("proximo Nivel = " + proximoNivel + " | Cooldwon arma = "  + cooldownArma1);
	//console.log("Cooldwon arma" + cooldownArma1);

	for (var x = 0; x < arrayArma.length; x++) {
		if (arrayArma[x].getVida() == false) {
			posicaoTiro = Array.from(arrayArma).indexOf(arrayArma[x]);
			arrayArma.splice(posicaoTiro, 1);
		}
	}


	// Limpa o tela
	contexto.clearRect(0, 0, canvas.width, canvas.height);
	// desenha bakground
	//Util.desenhaBackGround(larguraMapa, alturaMapa, "BLACK");
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
	for (var i = 0; i < arrayArma.length; i++) {
		arrayArma[i].desenhaArma();
		arrayArma[i].atualizaArma();
	}
	//deleta blocos e inimigos
	if (editorON) {
		for (var i = 0; i < arrayBlocos.length; i++) {
			if (Util.colide(arrayBlocos[i].getPosX() - larguraMinMapa, mouseX, arrayBlocos[i].getPosY() - alturaMinMapa, mouseY, arrayBlocos[i].getTamX(), 0, arrayBlocos[i].getTamY(), 0) && teclaFPressionada) {
				arrayBlocos.splice(i, 1);
			}
		}
		for (var i = 0; i < arrayInimigo.length; i++) {
			if (Util.colide(arrayInimigo[i].getPosX() - larguraMinMapa, mouseX, arrayInimigo[i].getPosY() - alturaMinMapa, mouseY, arrayInimigo[i].getTamX(), 0, arrayInimigo[i].getTamY(), 0) && teclaFPressionada) {
				arrayInimigo[i].desenharApagarStatus(0);
				arrayInimigo.splice(i, 1);
			}
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
			for (var i = 80; i < 112; i++) {
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

	}else{
		Util.desenhaUI();
	}
}


// Loop do jogo
setInterval(gameLoop, 30);
