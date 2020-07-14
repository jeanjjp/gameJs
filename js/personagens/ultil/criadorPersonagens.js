class CriadorPersonagens {
	constructor(posX, posY, tamX, tamY, cor, tipo, img) {

		this.posX = posX;
		this.posY = posY;
		this.tamX = tamX;
		this.tamY = tamY;
		this.cor = cor;
		this.tipo = tipo;
		this.img = img;

	}


	atualizaCriadorPersonagens() {

		if (Util.colide(this.posX, mouseX, this.posY, mouseY, this.tamX, 0, this.tamY, 0) && editorON && click) {

			if (this.tipo == 1) {
				var inimigo = new Inimigo(Math.random() * larguraMapa, Math.random() * alturaMapa, 64, 64, Math.random() * -2 + 1, Math.random() * -2 + 1, "RED", true);
				arrayInimigo.push(inimigo);
			} else if (this.tipo == 2) {
				var bloco = new Bloco(heroi.getPosX(), heroi.getPosY(), 64, 64, "RED", 1, this.img);
				arrayBlocos.push(bloco);
			} else if (this.tipo == 3) {
				var bloco = new Bloco(heroi.getPosX(), heroi.getPosY(), 64, 64, "RED", 1, this.img);
				arrayBlocos.push(bloco);
			}else if (this.tipo == 4) {
				var bloco = new Bloco(heroi.getPosX(), heroi.getPosY(), 64, 64, "RED", 1, this.img);
				arrayBlocos.push(bloco);
			}

			click = false;
		}
	}

	desenhaCriadorPersonagens() {

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
}
