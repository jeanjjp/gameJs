class Inimigo {
	constructor(posX, posY, tamX, tamY, velX, velY, cor, vida) {

		this.posX = posX;
		this.posY = posY;
		this.tamX = tamX;
		this.tamY = tamY;
		this.velX = velX;
		this.velY = velY;
		this.cor = cor;
		this.vida = vida;
		this.antes = new Date().getTime();
		this.tempo = 0;
	}


	atualizaInimigo() {
		//faz o inimigo andar
		this.posX += this.velX;
		this.posY += this.velY;
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
		this.tempo = (new Date().getTime() - this.antes) / 1000;

		if (this.tempo >= 10) {
			this.vida = false;
		}

	}

	desenhaInimigo() {

		// var img = new Image();
		// img.src = 'img/inimigo.png';
		// contexto.drawImage(img, this.posX, this.posY, this.tamX, this.tamY);
		contexto.beginPath();
		//desenha o inimigo
		contexto.rect(this.posX, this.posY, this.tamX, this.tamY);
		contexto.fillStyle = this.cor;
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
