class Botao {
	constructor(posX, posY, tamX, tamY, cor, tipo, texto, corTexto) {

		this.posX = posX;
		this.posY = posY;
		this.tamX = tamX;
		this.tamY = tamY;
		this.cor = cor;
		this.tipo = tipo;
		this.texto = texto;
		this.corTexto = corTexto;

	}


	atualizaBotao() {

		if (Util.colide(this.posX, mouseX, this.posY, mouseY, this.tamX, 0, this.tamY, 0) && editorON && click) {

			if (this.tipo == 1) {
				menu1 = true;
				menu2 = false;
			} else if (this.tipo == 2) {
				menu2 = true;
				menu1 = false;
			}
			textoMenu = this.texto
			click = false;
		}
	}

	desenhaBotao() {
		contexto.beginPath();
		contexto.rect(this.posX, this.posY, this.tamX, this.tamY);
		contexto.fillStyle = this.cor;
		contexto.fill();
		contexto.closePath();

		contexto.beginPath();
		contexto.fillStyle = this.corTexto;
		contexto.font = "normal 10pt Arial";
		contexto.fillText(this.texto, this.posX + 4, this.posY + this.tamY - 5);
		contexto.fill();
		contexto.closePath();
	}

	getPosX() {
		return this.posX;
	}
	getPosY() {
		return this.posY;
	}
	getTamX() {
		return this.tamX;
	}

	getTamY() {
		return this.tamY;
	}
	getVelX() {
		return this.velX;
	}
	getVelY() {
		return this.velY;
	}
	getCor() {
		return this.cor;
	}
	getVida() {
		return this.vida;
	}
	getTempo() {
		return this.tempo;
	}
}
