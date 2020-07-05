class Heroi {
	constructor(posX, posY, tamX, tamY, velX, velY, cor, vida) {

		this.posX = posX;
		this.posY = posY;
		this.tamX = tamX;
		this.tamY = tamY;
		this.velX = velX;
		this.velY = velY;
		this.cor = cor;
		this.vida = vida;
		this.amnimacaoMovimento = true;
	}


	atualizaHeroi() {

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
		if (this.posX + this.tamX/2 > larguraMapa) {
			this.posX = 0 - this.tamX/2;
		}
		if (this.posX + this.tamX/2 < 0) {
			this.posX = larguraMapa - this.tamX/2;
		}
		if (this.posY + this.tamY/2 > alturaMapa) {
			this.posY = 0 - this.tamY/2;
		}
		if (this.posY + this.tamY/2 < 0) {
			this.posY = alturaMapa - this.tamY/2;
		}

	}

	desenhaHeroi() {

		var img = new Image();
		img.src = "res/hero.png";
		contexto.drawImage(img, this.posX, this.posY, this.tamX, this.tamY);
		contexto.beginPath();
		//desenha o heroi
		//contexto.rect(this.posX, this.posY, this.tamX, this.tamY);
		//contexto.fillStyle = this.cor;
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
	setPosX(posX) {
		this.posX = posX;
	}
	setCor(cor) {
		this.cor = cor;
	}
}
