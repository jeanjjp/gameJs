class Botao {
	constructor(posX, posY, tamX, tamY, cor, tipo, texto, corTexto) {

		this.posX = posX;
		this.posY = posY;
		this.tamX = tamX;
		this.tamY = tamY;
		this.cor = cor;
		this.tipo = tipo;
		this.texto = texto;
		this.corTexto = corTexto;

	}


	atualizaBotao() {

		if (Util.colide(this.posX, mouseX, this.posY, mouseY, this.tamX, 0, this.tamY, 0) && editorON && click) {

			if (this.tipo == 1) {
				menu1 = true;
				menu2 = false;
				menu4 = false;
				menu5 = false;
				menu6 = false;
				menu7 = false;
				menu8 = false;
				menu3 = false;
				menu9 = false;
				menu10 = false;
			} else if (this.tipo == 2) {
				menu1 = false;
				menu2 = true;
				menu4 = false;
				menu5 = false;
				menu6 = false;
				menu7 = false;
				menu8 = false;
				menu3 = false;
				menu9 = false;
				menu10 = false;
			} else if (this.tipo == 3) {
				menu1 = false;
				menu2 = false;
				menu4 = false;
				menu5 = false;
				menu6 = false;
				menu7 = false;
				menu8 = false;
				menu3 = true;
				menu9 = false;
				menu10 = false;
			} else if (this.tipo == 4) {
				menu1 = false;
				menu2 = false;
				menu4 = true;
				menu5 = false;
				menu6 = false;
				menu7 = false;
				menu8 = false;
				menu3 = false;
				menu9 = false;
				menu10 = false;
			} else if (this.tipo == 5) {
				menu1 = false;
				menu2 = false;
				menu4 = false;
				menu5 = true;
				menu6 = false;
				menu7 = false;
				menu8 = false;
				menu3 = false;
				menu9 = false;
				menu10 = false;
			} else if (this.tipo == 6) {
				menu1 = false;
				menu2 = false;
				menu4 = false;
				menu5 = false;
				menu6 = true;
				menu7 = false;
				menu8 = false;
				menu3 = false;
				menu9 = false;
				menu10 = false;
			} else if (this.tipo == 7) {
				menu1 = false;
				menu2 = false;
				menu4 = false;
				menu5 = false;
				menu6 = false;
				menu7 = true;
				menu8 = false;
				menu3 = false;
				menu9 = false;
				menu10 = false;
			} else if (this.tipo == 8) {
				menu1 = false;
				menu2 = false;
				menu4 = false;
				menu5 = false;
				menu6 = false;
				menu7 = false;
				menu8 = true;
				menu3 = false;
				menu9 = false;
				menu10 = false;
			} else if (this.tipo == 9) {
				menu1 = false;
				menu2 = false;
				menu4 = false;
				menu5 = false;
				menu6 = false;
				menu7 = false;
				menu8 = false;
				menu3 = false;
				menu9 = true;
				menu10 = false;
			} else if (this.tipo == 10) {
				menu1 = false;
				menu2 = false;
				menu4 = false;
				menu5 = false;
				menu6 = false;
				menu7 = false;
				menu8 = false;
				menu3 = false;
				menu9 = false;
				menu10 = true;
			} else if (this.tipo == 11) {
				camada1 = true;
				camada2 = false;
				camada3 = false;
			} else if (this.tipo == 12) {
				camada1 = false;
				camada2 = true;
				camada3 = false;
			} else if (this.tipo == 13) {
				camada1 = false;
				camada2 = false;
				camada3 = true;
			}
			
			if(this.tipo > 10){
			   textoCamada = this.texto;
			} else{
				textoMenu = this.texto;
			}
			
			click = false;
		}
	}

	desenhaBotao() {
		contexto.beginPath();
		contexto.rect(this.posX, this.posY, this.tamX, this.tamY);
		contexto.fillStyle = this.cor;
		contexto.fill();
		contexto.closePath();

		contexto.beginPath();
		contexto.fillStyle = this.corTexto;
		contexto.font = "normal 10pt Arial";
		contexto.fillText(this.texto, this.posX + 4, this.posY + this.tamY - 5);
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
