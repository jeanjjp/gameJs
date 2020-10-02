class Heroi {
	constructor(posX, posY, tamX, tamY, velX, velY, cor, vida, img) {

		this.posX = posX;
		this.posY = posY;
		this.tamX = tamX;
		this.tamY = tamY;
		this.velX = velX;
		this.velY = velY;
		this.cor = cor;
		this.vida = vida;
		this.amnimacaoMovimento = true;
		this.img = img;
		var oldX = 0;
		var oldY = 0;
	}


	atualizaHeroi() {

		this.oldX = this.posX;
		this.oldY = this.posY;

		//faz o heroi andar
		if (teclaEsquerdaPressionada || teclaAPressionada) {
			this.posX -= this.velX;
			if (this.amnimacaoMovimento) {
				this.posY += 2;
				this.amnimacaoMovimento = false;
			} else {
				this.posY -= 2;
				this.amnimacaoMovimento = true;
			}
		} else if (teclaDireitaPressionada || teclaDPressionada) {
			this.posX += this.velX;
			if (this.amnimacaoMovimento) {
				this.posY += 2;
				this.amnimacaoMovimento = false;
			} else {
				this.posY -= 2;
				this.amnimacaoMovimento = true;
			}
		} else if (tecladCimaPressionada || teclaWPressionada) {
			this.posY -= this.velY;
			if (this.amnimacaoMovimento) {
				this.posX += 2;
				this.amnimacaoMovimento = false;
			} else {
				this.posX -= 2;
				this.amnimacaoMovimento = true;
			}
		} else if (teclaBaixoPressionada || teclaSPressionada) {
			this.posY += this.velY;
			if (this.amnimacaoMovimento) {
				this.posX += 2;
				this.amnimacaoMovimento = false;
			} else {
				this.posX -= 2;
				this.amnimacaoMovimento = true;
			}
		}

		//colide com as bordas da tela
		if (this.posX + this.tamX / 2 > larguraMapa) {
			this.posX = 0 - this.tamX / 2;
		}
		if (this.posX + this.tamX / 2 < 0) {
			this.posX = larguraMapa - this.tamX / 2;
		}
		if (this.posY + this.tamY / 2 > alturaMapa) {
			this.posY = 0 - this.tamY / 2;
		}
		if (this.posY + this.tamY / 2 < 0) {
			this.posY = alturaMapa - this.tamY / 2;
		}

		for (var i = 0; i < arrayBlocos.length; i++) {
			if (Util.colide(arrayBlocos[i].getPosX() + 10, this.posX + (this.tamX / 2), arrayBlocos[i].getPosY() + 10, this.posY + (this.tamY / 2), arrayBlocos[i].getTamX() - 38, this.tamX, arrayBlocos[i].getTamY() - 17, this.tamY) && !editorON && arrayBlocos[i].getTipo() == 13) {
				this.posX = this.oldX;
				this.posY = this.oldY;
			}
			if (Util.colide(arrayBlocos[i].getPosX(), this.posX + (this.tamX / 2), arrayBlocos[i].getPosY(), this.posY + (this.tamY / 2), arrayBlocos[i].getTamX(), this.tamX, arrayBlocos[i].getTamY(), this.tamY) && !editorON && arrayBlocos[i].getTipo() >= 14 && arrayBlocos[i].getTipo() <= 19) {
				this.posX = this.oldX;
				this.posY = this.oldY;
			}
			if (Util.colide(arrayBlocos[i].getPosX() + 10, this.posX + (this.tamX / 2), arrayBlocos[i].getPosY() + 2, this.posY + (this.tamY / 2), arrayBlocos[i].getTamX() - 38, this.tamX, arrayBlocos[i].getTamY() - 17, this.tamY) && !editorON && arrayBlocos[i].getTipo() == 20) {
				this.posX = this.oldX;
				this.posY = this.oldY;
			}
			if (Util.colide(arrayBlocos[i].getPosX() + 10, this.posX + (this.tamX / 2), arrayBlocos[i].getPosY() + 22, this.posY + (this.tamY / 2), arrayBlocos[i].getTamX() - 38, this.tamX, arrayBlocos[i].getTamY() - 17, this.tamY) && !editorON && arrayBlocos[i].getTipo() == 21) {
				this.posX = this.oldX;
				this.posY = this.oldY;
			}
			if (Util.colide(arrayBlocos[i].getPosX() + 5, this.posX + (this.tamX / 2), arrayBlocos[i].getPosY() + 17, this.posY + (this.tamY / 2), arrayBlocos[i].getTamX() - 12, this.tamX, arrayBlocos[i].getTamY() - 17, this.tamY) && !editorON && arrayBlocos[i].getTipo() >= 22 && arrayBlocos[i].getTipo() <= 23) {
				this.posX = this.oldX;
				this.posY = this.oldY;
			}
			if (Util.colide(arrayBlocos[i].getPosX(), this.posX + (this.tamX / 2), arrayBlocos[i].getPosY() + 13, this.posY + (this.tamY / 2), arrayBlocos[i].getTamX(), this.tamX, arrayBlocos[i].getTamY() - 17, this.tamY) && !editorON && arrayBlocos[i].getTipo() == 24) {
				this.posX = this.oldX;
				this.posY = this.oldY;
			}
			if (Util.colide(arrayBlocos[i].getPosX(), this.posX + (this.tamX / 2), arrayBlocos[i].getPosY() + 13, this.posY + (this.tamY / 2), arrayBlocos[i].getTamX(), this.tamX, arrayBlocos[i].getTamY() - 17, this.tamY) && !editorON && arrayBlocos[i].getTipo() == 56) {
				this.posX = this.oldX;
				this.posY = this.oldY;
			}
			if (Util.colide(arrayBlocos[i].getPosX() + 10, this.posX + (this.tamX / 2), arrayBlocos[i].getPosY() + 5, this.posY + (this.tamY / 2), arrayBlocos[i].getTamX() - 22, this.tamX, arrayBlocos[i].getTamY() - 5, this.tamY) && !editorON && arrayBlocos[i].getTipo() >= 58 && arrayBlocos[i].getTipo() <= 60) {
				this.posX = this.oldX;
				this.posY = this.oldY;
			}
			if (Util.colide(arrayBlocos[i].getPosX() + 20, this.posX + (this.tamX / 2), arrayBlocos[i].getPosY() + 15, this.posY + (this.tamY / 2), arrayBlocos[i].getTamX() - 38, this.tamX, arrayBlocos[i].getTamY() - 25, this.tamY) && !editorON && (arrayBlocos[i].getTipo() == 61 || arrayBlocos[i].getTipo() == 63)) {
				this.posX = this.oldX;
				this.posY = this.oldY;
			}
			if (Util.colide(arrayBlocos[i].getPosX() + 20, this.posX + (this.tamX / 2), arrayBlocos[i].getPosY() + 20, this.posY + (this.tamY / 2), arrayBlocos[i].getTamX() - 38, this.tamX, arrayBlocos[i].getTamY() - 40, this.tamY) && !editorON && (arrayBlocos[i].getTipo() == 62 || arrayBlocos[i].getTipo() == 64)) {
				this.posX = this.oldX;
				this.posY = this.oldY;
			}
			if (Util.colide(arrayBlocos[i].getPosX() + 20, this.posX + (this.tamX / 2), arrayBlocos[i].getPosY() + 30, this.posY + (this.tamY / 2), arrayBlocos[i].getTamX() - 40, this.tamX, arrayBlocos[i].getTamY() - 40, this.tamY) && !editorON && (arrayBlocos[i].getTipo() == 65)) {
				this.posX = this.oldX;
				this.posY = this.oldY;
			}
			if (Util.colide(arrayBlocos[i].getPosX() + 5, this.posX + (this.tamX / 2), arrayBlocos[i].getPosY() + 20, this.posY + (this.tamY / 2), arrayBlocos[i].getTamX() - 10, this.tamX, arrayBlocos[i].getTamY() - 40, this.tamY) && !editorON && (arrayBlocos[i].getTipo() == 66)) {
				this.posX = this.oldX;
				this.posY = this.oldY;
			}
			if (Util.colide(arrayBlocos[i].getPosX() + 20, this.posX + (this.tamX / 2), arrayBlocos[i].getPosY() + 15, this.posY + (this.tamY / 2), arrayBlocos[i].getTamX() - 40, this.tamX, arrayBlocos[i].getTamY() - 40, this.tamY) && !editorON && (arrayBlocos[i].getTipo() == 67 || arrayBlocos[i].getTipo() == 73 || arrayBlocos[i].getTipo() == 74 || arrayBlocos[i].getTipo() == 80)) {
				this.posX = this.oldX;
				this.posY = this.oldY;
			}
			if (Util.colide(arrayBlocos[i].getPosX() + 15, this.posX + (this.tamX / 2), arrayBlocos[i].getPosY() + 15, this.posY + (this.tamY / 2), arrayBlocos[i].getTamX() - 30, this.tamX, arrayBlocos[i].getTamY() - 40, this.tamY) && !editorON && (arrayBlocos[i].getTipo() == 68 || arrayBlocos[i].getTipo() == 69 || arrayBlocos[i].getTipo() == 70 || arrayBlocos[i].getTipo() == 71 || arrayBlocos[i].getTipo() == 72 || arrayBlocos[i].getTipo() == 75 || arrayBlocos[i].getTipo() == 76 || arrayBlocos[i].getTipo() == 77 || arrayBlocos[i].getTipo() == 78 || arrayBlocos[i].getTipo() == 79)) {
				this.posX = this.oldX;
				this.posY = this.oldY;
			}
			if (Util.colide(arrayBlocos[i].getPosX() +4, this.posX + (this.tamX / 2), arrayBlocos[i].getPosY()-10, this.posY + (this.tamY / 2), arrayBlocos[i].getTamX() -8, this.tamX, arrayBlocos[i].getTamY() -10, this.tamY) && !editorON && (arrayBlocos[i].getTipo() == 84 || arrayBlocos[i].getTipo() == 85 || arrayBlocos[i].getTipo() == 87 || arrayBlocos[i].getTipo() == 91 )) {
				this.posX = this.oldX;
				this.posY = this.oldY;
			}
			if (Util.colide(arrayBlocos[i].getPosX(), this.posX + (this.tamX / 2), arrayBlocos[i].getPosY()-10, this.posY + (this.tamY / 2), arrayBlocos[i].getTamX(), this.tamX, arrayBlocos[i].getTamY() -10, this.tamY) && !editorON && (arrayBlocos[i].getTipo() == 86 )) {
				this.posX = this.oldX;
				this.posY = this.oldY;
			}
			if (Util.colide(arrayBlocos[i].getPosX() +10, this.posX + (this.tamX / 2), arrayBlocos[i].getPosY()+3, this.posY + (this.tamY / 2), arrayBlocos[i].getTamX()-20, this.tamX, arrayBlocos[i].getTamY() -10, this.tamY) && !editorON && (arrayBlocos[i].getTipo() == 88 )) {
				this.posX = this.oldX;
				this.posY = this.oldY;
			}
			if (Util.colide(arrayBlocos[i].getPosX() +4, this.posX + (this.tamX / 2), arrayBlocos[i].getPosY()+18, this.posY + (this.tamY / 2), arrayBlocos[i].getTamX() -8, this.tamX, arrayBlocos[i].getTamY() -10, this.tamY) && !editorON && (arrayBlocos[i].getTipo() == 94 || arrayBlocos[i].getTipo() == 95 || arrayBlocos[i].getTipo() == 96 || arrayBlocos[i].getTipo() == 98 )) {
				this.posX = this.oldX;
				this.posY = this.oldY;
			}
			if (Util.colide(arrayBlocos[i].getPosX() +2, this.posX + (this.tamX / 2), arrayBlocos[i].getPosY()+18, this.posY + (this.tamY / 2), arrayBlocos[i].getTamX() -4, this.tamX, arrayBlocos[i].getTamY() -10, this.tamY) && !editorON && (arrayBlocos[i].getTipo() == 89 || arrayBlocos[i].getTipo() == 97 || arrayBlocos[i].getTipo() == 99 )) {
				this.posX = this.oldX;
				this.posY = this.oldY;
			}
			if (Util.colide(arrayBlocos[i].getPosX() +13, this.posX + (this.tamX / 2), arrayBlocos[i].getPosY()+35, this.posY + (this.tamY / 2), arrayBlocos[i].getTamX() -25, this.tamX, arrayBlocos[i].getTamY()- 35, this.tamY) && !editorON && (arrayBlocos[i].getTipo() == 57 )) {
				this.posX = this.oldX;
				this.posY = this.oldY;
			}
		}

	}

	desenhaHeroi() {

		if (this.img !== null && this.img !== undefined) {
			var img = new Image();
			img.src = pastaRaizImg + this.img;
			contexto.drawImage(img, this.posX, this.posY, this.tamX, this.tamY);
			contexto.beginPath();
			contexto.fill();
			contexto.closePath();
		} else {
			contexto.beginPath();
			contexto.rect(this.posX, this.posY, this.tamX, this.tamY);
			contexto.fillStyle = this.cor;
			contexto.fill();
			contexto.closePath();
		}


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
	setPosX(posX) {
		this.posX = posX;
	}
	setCor(cor) {
		this.cor = cor;
	}
}
