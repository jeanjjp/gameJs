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
		this.animacaoMovimento = true;
	}


	atualizaHeroi() {

		//faz o heroi andar
		if (teclaEsquerdaPressionada) {
			this.posX -= this.velX;
			if (this.animacaoMovimento) {
				this.posY += 2;
				this.animacaoMovimento = false;
			} else {
				this.posY -= 2;
				this.animacaoMovimento = true;
			}
		} else if (teclaDireitaPressionada) {
			this.posX += this.velX;
			if (this.animacaoMovimento) {
				this.posY += 2;
				this.animacaoMovimento = false;
			} else {
				this.posY -= 2;
				this.animacaoMovimento = true;
			}
		} else if (tecladCimaPressionada) {
			this.posY -= this.velY;
			if (this.animacaoMovimento) {
				this.posX += 2;
				this.animacaoMovimento = false;
			} else {
				this.posX -= 2;
				this.animacaoMovimento = true;
			}
		} else if (teclaBaixoPressionada) {
			this.posY += this.velY;
			if (this.animacaoMovimento) {
				this.posX += 2;
				this.animacaoMovimento = false;
			} else {
				this.posX -= 2;
				this.animacaoMovimento = true;
			}
		}

		//colide com as bordas da tela
		if (this.posX > canvas.width) {
			this.posX = 0;
		}
		if (this.posX < 0) {
			this.posX = canvas.width;
		}
		if (this.posY > canvas.height) {
			this.posY = 0;
		}
		if (this.posY < 0) {
			this.posY = canvas.height;
		}

	}

	desenhaHeroi() {

		var img = new Image();
		img.src = 'res/hero.png';
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
