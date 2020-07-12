//Configurações do canvas e criação do contexto.
var canvas = window.document.getElementById("canvas-jogo");
canvas.width = 1200;
canvas.height = 900;

var larguraMapa = 1024;
var alturaMapa = 896;

var larguraBloco = 64;
var alturaBloco = 64;

var contexto = canvas.getContext("2d");

//MOUSE
var mouseX = 0;
var mouseY = 0;
var click = 0;

//TECLAS
//setas
var teclaEsquerdaPressionada = false;
var teclaDireitaPressionada = false;
var tecladCimaPressionada = false;
var teclaBaixoPressionada = false;
//
var teclaEspacoPressionada = false;
var teclaShiftPressionada = false;
var teclaEnterPressionada = false;
//
var teclaWPressionada = false;
var teclaAPressionada = false;
var teclaSPressionada = false;
var teclaDPressionada = false;
var teclaCPressionada = false;
var teclaFPressionada = false;


//Funções que tratam os eventos keydown e keyup
function trataTeclaPrecionada(evento) {
	"use strict";

	if (evento.keyCode === 39) {
		teclaDireitaPressionada = true;
	} else if (evento.keyCode === 37) {
		teclaEsquerdaPressionada = true;
	} else if (evento.keyCode === 38) {
		tecladCimaPressionada = true;
	} else if (evento.keyCode === 40) {
		teclaBaixoPressionada = true;
	} else if (evento.keyCode === 32) {
		teclaEspacoPressionada = true;
	} else if (evento.keyCode === 16) {
		teclaShiftPressionada = true;
	} else if (evento.keyCode === 13) {
		teclaEnterPressionada = true;
	} else if (evento.keyCode === 67) {
		teclaCPressionada = true;
	} else if (evento.keyCode === 87) {
		teclaWPressionada = true;
	} else if (evento.keyCode === 65) {
		teclaAPressionada = true;
	} else if (evento.keyCode === 83) {
		teclaSPressionada = true;
	} else if (evento.keyCode === 68) {
		teclaDPressionada = true;
	} else if (evento.keyCode === 70) {
		teclaFPressionada = true;
	}
}

function trataTeclaSolta(evento) {
	"use strict";

	if (evento.keyCode === 39) {
		teclaDireitaPressionada = false;
	} else if (evento.keyCode === 37) {
		teclaEsquerdaPressionada = false;
	} else if (evento.keyCode === 38) {
		tecladCimaPressionada = false;
	} else if (evento.keyCode === 40) {
		teclaBaixoPressionada = false;
	} else if (evento.keyCode === 32) {
		teclaEspacoPressionada = false;
	} else if (evento.keyCode === 16) {
		teclaShiftPressionada = false;
	} else if (evento.keyCode === 13) {
		teclaEnterPressionada = false;
	} else if (evento.keyCode === 67) {
		teclaCPressionada = false;
	} else if (evento.keyCode === 87) {
		teclaWPressionada = false;
	} else if (evento.keyCode === 65) {
		teclaAPressionada = false;
	} else if (evento.keyCode === 83) {
		teclaSPressionada = false;
	} else if (evento.keyCode === 68) {
		teclaDPressionada = false;
	} else if (evento.keyCode === 70) {
		teclaFPressionada = false;
	}

}

function pegarPosicaoMouse(e) {
	//menos 8 pra compensar as bordas do navegador
	mouseX = e.clientX -8;
	mouseY= e.clientY -8;
}

function mouseClick(event){
	click = true;
}

function mouseSolto(event){
	click = false;
}


//Leitores de eventos do teclado
document.addEventListener("keydown", trataTeclaPrecionada, false);
document.addEventListener("keyup", trataTeclaSolta, false);
