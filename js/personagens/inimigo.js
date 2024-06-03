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
		this.xp = 1;

		//inputs
		this.inputPosX = document.createElement('input');
		this.inputPosY = document.createElement('input');
		this.inputTamX = document.createElement('input');
		this.inputTamY = document.createElement('input');

	}


	atualizaInimigo() {
		//faz o inimigo andar
		if (!editorON) {
			//this.posX += this.velX;
			//this.posY += this.velY;
			//this.posX += this.velX;
			//this.posY += this.velY;
			if (this.posX - heroi.getPosX() < 0) {
				this.posX += this.velX;
			} else if (this.posX - heroi.getPosX() > 0) {
				this.posX -= this.velX
			}
			if (this.posY - heroi.getPosY() < 0) {
				this.posY += this.velY;
			} else if (this.posY - heroi.getPosY() > 0) {
				this.posY -= this.velY
			}
		}

		//colide com as bordas da tela
		if (this.posX + (this.tamX / 2) > larguraMundo) {
			this.posX = 0;
		}
		if (this.posX < 0) {
			this.posX = larguraMundo - this.tamX;
		}
		if (this.posY + (this.tamY / 2) > alturaMundo) {
			this.posY = 0 - this.tamY / 2;
		}
		if (this.posY + (this.tamY / 2) < 0) {
			this.posY = alturaMundo - this.tamY / 2;
		}

		this.tempo = (new Date().getTime() - this.antes) / 1000;

		if (this.tempo >= 10) {
			//this.vida = 0;
		}

		if (Util.colide(this.posX - larguraMinMapa, mouseX, this.posY - alturaMinMapa, mouseY, this.tamX, 0, this.tamY, 0) && editorON && click) {
			inimigoSolto = false;
		}

		if (Util.colide(this.posX - larguraMinMapa, mouseX, this.posY - alturaMinMapa, mouseY, this.tamX, 2, this.tamY, 2) && click && editorON && blocoSolto) {
			this.inimigoSelecionado = true;
			blocoSolto = false;

			if (this.mostrarStatus) {
				this.mostrarStatus = false;
				this.desenharApagarStatus(0);
			} else {
				this.mostrarStatus = true;
				this.desenharApagarStatus(1);
			}
		}

		if (teclaShiftPressionada) {
			this.inputPosX.blur();
			this.inputPosY.blur();
			this.inputTamX.blur();
			this.inputTamY.blur();
		}

		if (!editorON) {
			this.desenharApagarStatus(0);
			this.mostrarStatus = false;
		}

		if (this.inimigoSelecionado) {
			this.posX = mouseX + larguraMinMapa - this.tamX / 2;
			this.posY = mouseY + alturaMinMapa - this.tamY / 2;

			this.inputPosY.style.left = (this.posX - larguraMinMapa + 140) + 'px';
			this.inputPosY.style.top = (this.posY - alturaMinMapa + 22) + 'px';

			this.inputPosX.style.left = (this.posX - larguraMinMapa + 62) + 'px';
			this.inputPosX.style.top = (this.posY - alturaMinMapa + 22) + 'px';

			this.inputTamX.style.left = (this.posX - larguraMinMapa + 62) + 'px';
			this.inputTamX.style.top = (this.posY - alturaMinMapa + 62) + 'px';

			this.inputTamY.style.left = (this.posX - larguraMinMapa + 140) + 'px';
			this.inputTamY.style.top = (this.posY - alturaMinMapa + 62) + 'px';

			if (!click) {
				this.inimigoSelecionado = false;
				blocoSolto = true;
				inimigoSolto = true;
			}
		}
	}

	desenhaInimigo() {
		if (this.posX + (this.tamX / 2) < larguraMapa && this.posX + (this.tamX / 2) >= larguraMinMapa && this.posY + (this.tamY / 2) < alturaMapa && this.posY + (this.tamY / 2) >= alturaMinMapa) {
			//desenha barra de vida
			contexto.beginPath();
			contexto.rect(this.posX + this.tamX/2-13 - larguraMinMapa, this.posY +10 - alturaMinMapa, this.vida*10, 5);
			contexto.fillStyle = "RED";
			contexto.fill();
			contexto.closePath();
			//desenha com img
			if (this.img !== null && this.img !== undefined) {
				var img = new Image();
				img.src = pastaRaizImg + this.img;
				contexto.drawImage(img, this.posX - larguraMinMapa, this.posY - alturaMinMapa, this.tamX, this.tamY);
				contexto.beginPath();
				contexto.fill();
				contexto.closePath();
				if (this.mostrarStatus && editorON) {
					contexto.beginPath();
					contexto.rect(this.posX - larguraMinMapa + 50, this.posY - alturaMinMapa, 150, 120);
					contexto.fillStyle = "BLUE";
					contexto.fill();
					contexto.fillStyle = "WHITE"
					contexto.font = "normal 8pt Arial";

					contexto.fillText("Vel.X", this.posX - larguraMinMapa + 62, this.posY - alturaMinMapa + 12);
					contexto.fillText("Vel.Y", this.posX - larguraMinMapa + 140, this.posY - alturaMinMapa + 12);

					contexto.fillText("Tam.X", this.posX - larguraMinMapa + 62, this.posY - alturaMinMapa + 52);
					contexto.fillText("Tam.Y", this.posX - larguraMinMapa + 140, this.posY - alturaMinMapa + 52);
					contexto.closePath();
				}
			//caso nao tenha img
			} else {
				contexto.beginPath();
				contexto.rect(this.posX - larguraMinMapa, this.posY - alturaMinMapa, this.tamX, this.tamY);
				contexto.fillStyle = this.cor;
				contexto.fill();
				contexto.closePath();
			}
		}

	}


	desenharApagarStatus(tipo) {
		//1 desenha 0 apaga
		if (tipo) {
			this.inputPosX.value = this.velX.toFixed(3);
			this.inputPosY.value = this.velY.toFixed(3);

			this.inputTamX.value = this.tamX.toFixed(0);
			this.inputTamY.value = this.tamY.toFixed(0);

			this.inputPosX.style.width = 50 + "px";
			this.inputPosX.type = 'number';
			this.inputPosX.style.position = 'absolute';
			this.inputPosX.style.left = (this.posX - larguraMinMapa + 62) + 'px';
			this.inputPosX.style.top = (this.posY - alturaMinMapa + 22) + 'px';

			this.inputPosY.style.width = 50 + "px";
			this.inputPosY.type = 'number';
			this.inputPosY.style.position = 'absolute';
			this.inputPosY.style.left = (this.posX - larguraMinMapa + 240) + 'px';
			this.inputPosY.style.top = (this.posY - alturaMinMapa + 22) + 'px';

			this.inputTamX.style.width = 50 + "px";
			this.inputTamX.type = 'number';
			this.inputTamX.style.position = 'absolute';
			this.inputTamX.style.left = (this.posX - larguraMinMapa + 60) + 'px';
			this.inputTamX.style.top = (this.posY - alturaMinMapa + 62) + 'px';

			this.inputTamY.style.width = 50 + "px";
			this.inputTamY.type = 'number';
			this.inputTamY.style.position = 'absolute';
			this.inputTamY.style.left = (this.posX - larguraMinMapa + 140) + 'px';
			this.inputTamY.style.top = (this.posY - alturaMinMapa + 62) + 'px';

			document.body.appendChild(this.inputPosX);
			document.body.appendChild(this.inputPosY);
			document.body.appendChild(this.inputTamX);
			document.body.appendChild(this.inputTamY);
			this.inputPosX.focus();
		} else {
			this.inputPosX.remove();
			this.inputPosY.remove();
			this.inputTamX.remove();
			this.inputTamY.remove();

			var validinputPosX = Util.validarNumero(this.inputPosX.value);
			var validinputPosY = Util.validarNumero(this.inputPosY.value);

			var validinputTamX = Util.validarNumero(this.inputTamX.value);
			var validinputTamY = Util.validarNumero(this.inputTamY.value);

			if (validinputPosX && validinputPosY && validinputTamY && validinputTamX) {
				this.velX = parseFloat(this.inputPosX.value);
				this.velY = parseFloat(this.inputPosY.value);

				this.tamX = parseInt(this.inputTamX.value);
				this.tamY = parseInt(this.inputTamY.value);
			}

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
	getXP() {
		return this.xp;
	}

	setVida(vida){
		this.vida = vida;
	}

	setXP(xp){
		this.xp = xp;
	}
}
