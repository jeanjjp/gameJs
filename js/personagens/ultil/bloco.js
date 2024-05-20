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

		if (Util.colide(this.posX - larguraMinMapa, mouseX, this.posY - alturaMinMapa, mouseY, this.tamX, 0, this.tamY, 0) && click && editorON && blocoSolto && inimigoSolto && textoCamada === this.camada) {
			this.blocoSelecionado = true;
			blocoSolto = false;
		}

		if (this.blocoSelecionado) {
			if (!teclaShiftPressionada) {
				this.posX = mouseX + larguraMinMapa - (mouseX % larguraBloco);
				this.posY = mouseY + alturaMinMapa - (mouseY % alturaBloco);
			} else {
				this.posX = mouseX + larguraMinMapa - (this.tamX / 2);
				this.posY = mouseY + alturaMinMapa- (this.tamY / 2);
			}

			if (!click) {
				this.blocoSelecionado = false;
				blocoSolto = true;
			}
		}
	}

	desenhaBloco() {

		if (editorON) {
			if (this.posX < larguraMapa && this.posX >= larguraMinMapa && this.posY < alturaMapa && this.posY >= alturaMinMapa) {
				if (this.camada === textoCamada) {
					if (this.img !== null && this.img !== undefined) {
						var img = new Image();
						img.src = pastaRaizImg + this.img;
						contexto.drawImage(img, this.posX - larguraMinMapa, this.posY - alturaMinMapa, this.tamX, this.tamY);
						contexto.beginPath();
						contexto.fill();
						contexto.closePath();
					} else {
						contexto.beginPath();
						contexto.rect(this.posX - larguraMinMapa, this.posY - alturaMinMapa, this.tamX, this.tamY);
						contexto.fillStyle = this.cor;
						contexto.fill();
						contexto.closePath();
					}
				} else {
					contexto.beginPath();
					contexto.rect(this.posX - larguraMinMapa, this.posY - alturaMinMapa, this.tamX, this.tamY);
					if(this.camada === "Piso 2"){
					   contexto.fillStyle = "BLUE";
					   }else{
						   contexto.fillStyle = "GREY";
					   }
					
					contexto.fill();
					contexto.closePath();
				}
				
			}else{
				contexto.beginPath();
						contexto.rect(this.posX, this.posY, this.tamX, this.tamY);
						contexto.fillStyle = this.cor;
						contexto.fill();
						contexto.closePath();
			}
			
		} else {
			if(this.posX < larguraMapa && this.posX >= larguraMinMapa && this.posY < alturaMapa && this.posY >= alturaMinMapa){
				if (this.img !== null && this.img !== undefined) {
					var img = new Image();
					img.src = pastaRaizImg + this.img;
					contexto.drawImage(img, this.posX - larguraMinMapa, this.posY - alturaMinMapa, this.tamX, this.tamY);
					contexto.beginPath();
					contexto.fill();
					contexto.closePath();
				} else {
					contexto.beginPath();
					contexto.rect(this.posX - larguraMinMapa, this.posY - alturaMinMapa, this.tamX, this.tamY);
					contexto.fillStyle = this.cor;
					contexto.fill();
					contexto.closePath();
				}
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
