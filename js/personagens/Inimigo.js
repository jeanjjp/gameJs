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
		this.inimigoSelecionado = false;
	}


	atualizaInimigo() {
		//faz o inimigo andar
		if (!editorON) {
			this.posX += this.velX;
			this.posY += this.velY;
			this.posX += this.velX;
			this.posY += this.velY;
		}

		//colide com as bordas da tela
		if (this.posX + this.tamX > larguraMapa) {
			this.posX = 0;
		}
		if (this.posX < 0) {
			this.posX = larguraMapa - this.tamX;
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

		if (Util.colide(this.posX, mouseX, this.posY, mouseY, this.tamX, 0, this.tamY, 0) && click && editorON && blocoSolto) {
			this.inimigoSelecionado = true;
			blocoSolto = false;
		}

		if (this.inimigoSelecionado) {
			this.posX = mouseX - this.tamX/2;
			this.posY = mouseY - this.tamY/2;

			if (!click) {
				this.inimigoSelecionado = false;
				blocoSolto = true;
			}
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
