class CriadorPersonagens {
	constructor(posX, posY, tamX, tamY, cor, tipo) {

		this.posX = posX;
		this.posY = posY;
		this.tamX = tamX;
		this.tamY = tamY;
		this.cor = cor;
		this.tipo = tipo;

	}


	atualizaCriadorPersonagens() {

		if (Util.colide(this.posX, mouseX, this.posY, mouseY, this.tamX, 0, this.tamY, 0) && editorON && click) {
			var inimigo = new Inimigo(Math.random() * larguraMapa, Math.random() * alturaMapa, 20, 20, Math.random() * -2 + 1, Math.random() * -2 + 1, "RED", true);
			arrayInimigo.push(inimigo);

			click = false;
		}
	}

	desenhaCriadorPersonagens() {

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
