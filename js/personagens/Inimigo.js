class Inimigo {
	constructor(posX, posY, tamX, tamY, velX, velY, cor, vida, camada, img) {

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
		this.camada = camada;
		this.img = img;
		this.mostrarStatus = false;

		//criar objeto para inputXs
		this.inputX = document.createElement('input');
		this.inputY = document.createElement('input');

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

			if (this.mostrarStatus) {
				this.mostrarStatus = false;
				this.inputX.remove();
				this.inputY.remove();
				this.velX = parseInt(this.inputX.value);
				this.velY = parseInt(this.inputY.value);
			} else {
				this.mostrarStatus = true;
				
				this.inputX.value = this.velX.toFixed(3);
				this.inputY.value = this.velY.toFixed(3);
				
				this.inputX.style.width = 50 + "px";
				this.inputX.type = 'number';
				this.inputX.style.position = 'absolute';
				this.inputX.style.left = (this.posX + 62) + 'px';
				this.inputX.style.top = (this.posY + 22) + 'px';
				
				this.inputY.style.width = 50 + "px";
				this.inputY.type = 'number';
				this.inputY.style.position = 'absolute';
				this.inputY.style.left = (this.posX + 62) + 'px';
				this.inputY.style.top = (this.posY + 62) + 'px';

				document.body.appendChild(this.inputX);
				document.body.appendChild(this.inputY);
				this.inputX.focus();

			}

			blocoSolto = false;
		}

		if (this.inimigoSelecionado) {
			if (this.mostrarStatus === false) {
				this.posX = mouseX - this.tamX / 2;
				this.posY = mouseY - this.tamY / 2;
			}

			if (!click) {
				this.inimigoSelecionado = false;
				blocoSolto = true;
			}
		}
	}

	desenhaInimigo() {

		if (this.img !== null && this.img !== undefined) {
			var img = new Image();
			img.src = pastaRaizImg + this.img;
			contexto.drawImage(img, this.posX, this.posY, this.tamX, this.tamY);
			contexto.beginPath();
			contexto.fill();
			contexto.closePath();
			if (this.mostrarStatus && editorON) {
				contexto.beginPath();
				contexto.rect(this.posX + 50, this.posY, 75, 100);
				contexto.fillStyle = "BLUE";
				contexto.fill();
				contexto.fillStyle = "WHITE"
				contexto.font = "normal 8pt Arial";
				contexto.fillText("Vel.X = " + this.velX.toFixed(3), this.posX + 52, this.posY + 12);
				contexto.fillText("Vel.Y = " + this.velY.toFixed(3), this.posX + 52, this.posY + 52);
				contexto.closePath();
			}
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
	getCamada() {
		return this.camada;
	}
	getVida() {
		return this.vida;
	}
	getImg() {
		return this.img;
	}
}
