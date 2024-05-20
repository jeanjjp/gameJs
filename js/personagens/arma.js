class Arma {
  constructor(posX, posY, tamX, tamY, ang, vel, cor, vida, tipo) {

    this.posX = posX;
    this.posY = posY;
    this.tamX = tamX;
    this.tamY = tamY;
    this.ang = ang;
    this.vel = vel;
	  this.cor = cor;
    this.vida = vida;
    this.antes = new Date().getTime();
    this.tempo = 0;
    this.podeAtirar = true;
    this.tipo = tipo;
  }


  atualizaArma() {
    //faz o inimigo andar
    this.posX += this.vel * Math.cos(this.ang);
    this.posY += this.vel * Math.sin(this.ang);
   
    //colide com as bordas da tela
    if (this.posX > larguraMapa) {
     this.vida = false;
    }
    if (this.posX < larguraMinMapa) {
      this.vida = false;
    }

    if (this.posY > alturaMapa ) {
      this.vida = false;
    }
     if (this.posY < alturaMinMapa ) {
      this.vida = false;
    }

    this.tempo = (new Date().getTime() - this.antes) / 1000;


    if(this.tempo >= 0.3){
      this.podeAtirar = true
      this.tempo = 0;
    }

  }

  desenhaArma() {

      if (this.vida) {
        contexto.beginPath();
        contexto.rect(this.posX - larguraMinMapa, this.posY - alturaMinMapa, this.tamX, this.tamY);
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

  getTamY(){
    return this.tamY;
  }
  getAng() {
    return this.ang;
  }
  getVel() {
    return this.vel;
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
  getPodeAtirar() {
		return this.podeAtirar;
	}
  getTipo() {
		return this.tipo;
	}

  setPodeAtirar(x){
    this.podeAtirar = x;
  }
}
