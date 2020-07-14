class Bloco {
	constructor(posX, posY, tamX, tamY, cor, tipo, img) {

		this.posX = posX;
		this.posY = posY;
		this.tamX = tamX;
		this.tamY = tamY;
		this.cor = cor;
		this.tipo = tipo;
		this.img = img;
		this.blocoSelecionado = false;
	}


	atualizaBloco() {
		if (Util.colide(this.posX, mouseX, this.posY, mouseY, this.tamX, 0, this.tamY, 0) && click && editorON && blocoSolto) {
			this.blocoSelecionado = true;
			blocoSolto = false;
		}
		
		if (this.blocoSelecionado) {
			this.posX = mouseX - (mouseX % larguraBloco);
			this.posY = mouseY - (mouseY % alturaBloco);

			if (!click) {
				this.blocoSelecionado = false;
				blocoSolto = true;
			}
		}
	}

	desenhaBloco() {

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
	
	setBlocoSelecionado(onOff){
		this.blocoSelecionado = onOff;
	}


}
