


//Configurações do canvas e criação do contexto.
var canvas = window.document.getElementById("canvas-jogo");
canvas.width = 1000;
canvas.height = 900;

var contexto = canvas.getContext("2d");

//Estado dos controladores do jogo
var teclaEsquerdaPressionada = false;
var teclaDireitaPressionada = false;
var tecladCimaPressionada = false;
var teclaBaixoPressionada = false;
var teclaEspacoPressionada = false;
var teclaShiftPressionada = false;
var teclaEnterPressionada = false;
var teclaCPressionada = false;

var larguraBloco = 50;
var alturaBloco = 50;


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
	}
}


//Leitores de eventos do teclado
document.addEventListener("keydown", trataTeclaPrecionada, false);
document.addEventListener("keyup", trataTeclaSolta, false);
