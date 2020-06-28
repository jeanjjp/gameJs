class Comida {
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


  atualizaComida() {
    //faz o inimigo andar
    this.posX += this.velX;
    this.posY += this.velY;
    //colide com as bordas da tela
    if (this.posX > canvas.width) {
      this.posX = 0;
    }
    if (this.posX < 0) {
      this.posX = 700;
    }

    if (this.posY > 600 ) {
      this.posY = 0;
    }
     if (this.posY < 0 ) {
      this.posY = 600;
    }

    this.tempo = (new Date().getTime() - this.antes) / 1000;

    if(this.tempo >=30){
      this.vida = false;
    }

  }

  desenhaComida() {

      // var img = new Image();
      // img.src = 'img/inimigo.png';
      // contexto.drawImage(img, this.posX, this.posY, this.tamX, this.tamY);
      contexto.beginPath();
	  
      //desenha o macho
       contexto.rect(this.posX, this.posY, this.tamX, this.tamY);
       contexto.fillStyle = this.cor;
   

      //desenha a barra de vida
      contexto.rect(this.posX -10, this.posY - 10, 30-this.tempo, 3);
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

  getTamY(){
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
