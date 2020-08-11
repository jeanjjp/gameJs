class Bloco {
	constructor(posX, posY, tamX, tamY, cor, tipo, img, camada) {

		this.posX = posX;
		this.posY = posY;
		this.tamX = tamX;
		this.tamY = tamY;
		this.cor = cor;
		this.tipo = tipo;
		this.img = img;
		this.blocoSelecionado = false;
		this.camada = camada;
	}


	atualizaBloco() {
		
		if (Util.colide(this.posX, mouseX, this.posY, mouseY, this.tamX, 0, this.tamY, 0) && click && editorON && blocoSolto) {
			this.blocoSelecionado = true;
			blocoSolto = false;
		}

		if (this.blocoSelecionado) {
			if (!teclaShiftPressionada) {
				this.posX = mouseX - (mouseX % larguraBloco);
				this.posY = mouseY - (mouseY % alturaBloco);
			} else {
				this.posX = mouseX - (this.tamX/2);
				this.posY = mouseY - (this.tamY/2);
			}

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
	getImg() {
		return this.img;
	}
	getTipo() {
		return this.tipo;
	}
	getCamada() {
		return this.camada;
	}

	setBlocoSelecionado(onOff) {
		this.blocoSelecionado = onOff;
	}


}
