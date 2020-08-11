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
				var bloco = new Bloco(heroi.getPosX(), heroi.getPosY(), 64, 64, "RED", 1, "piso/piso1.png", textoCamada);
				arrayBlocos.push(bloco);
			} else if (this.tipo == 2) {
				var bloco = new Bloco(heroi.getPosX(), heroi.getPosY(), 64, 64, "RED", 2, "piso/piso2.png", textoCamada);
				arrayBlocos.push(bloco);
			} else if (this.tipo == 3) {
				var bloco = new Bloco(heroi.getPosX(), heroi.getPosY(), 64, 64, "RED", 3, "piso/piso3.png", textoCamada);
				arrayBlocos.push(bloco);
			} else if (this.tipo == 4) {
				var bloco = new Bloco(heroi.getPosX(), heroi.getPosY(), 64, 64, "RED", 4, "piso/piso4.png", textoCamada);
				arrayBlocos.push(bloco);
			} else if (this.tipo == 5) {
				var bloco = new Bloco(heroi.getPosX(), heroi.getPosY(), 64, 64, "RED", 5, "piso/piso5.png", textoCamada);
				arrayBlocos.push(bloco);
			} else if (this.tipo == 6) {
				var bloco = new Bloco(heroi.getPosX(), heroi.getPosY(), 64, 64, "RED", 6, "piso/piso6.png", textoCamada);
				arrayBlocos.push(bloco);
			} else if (this.tipo == 7) {
				var bloco = new Bloco(heroi.getPosX(), heroi.getPosY(), 64, 64, "RED", 7, "piso/piso7.png", textoCamada);
				arrayBlocos.push(bloco);
			} else if (this.tipo == 8) {
				var bloco = new Bloco(heroi.getPosX(), heroi.getPosY(), 64, 64, "RED", 8, "piso/piso8.png", textoCamada);
				arrayBlocos.push(bloco);
			} else if (this.tipo == 9) {
				var bloco = new Bloco(heroi.getPosX(), heroi.getPosY(), 64, 64, "RED", 9, "piso/piso9.png", textoCamada);
				arrayBlocos.push(bloco);
			} else if (this.tipo == 10) {
				var bloco = new Bloco(heroi.getPosX(), heroi.getPosY(), 64, 64, "RED", 10, "piso/piso10.png", textoCamada);
				arrayBlocos.push(bloco);
			} else if (this.tipo == 11) {
				var bloco = new Bloco(heroi.getPosX(), heroi.getPosY(), 64, 64, "RED", 11, "piso/piso11.png", textoCamada);
				arrayBlocos.push(bloco);
			} else if (this.tipo == 12) {
				var bloco = new Bloco(heroi.getPosX(), heroi.getPosY(), 64, 64, "RED", 12, "piso/piso12.png", textoCamada);
				arrayBlocos.push(bloco);
			} else if (this.tipo == 13) {
				var bloco = new Bloco(heroi.getPosX(), heroi.getPosY(), 64, 64, "RED", 13, "piso/piso13.png", textoCamada);
				arrayBlocos.push(bloco);
			} else if (this.tipo == 14) {
				var bloco = new Bloco(heroi.getPosX(), heroi.getPosY(), 64, 64, "RED", 14, "piso/piso14.png", textoCamada);
				arrayBlocos.push(bloco);
			} else if (this.tipo == 15) {
				var bloco = new Bloco(heroi.getPosX(), heroi.getPosY(), 64, 64, "RED", 15, "piso/piso15.png", textoCamada);
				arrayBlocos.push(bloco);
			} else if (this.tipo == 16) {
				var bloco = new Bloco(heroi.getPosX(), heroi.getPosY(), 64, 64, "RED", 16, "piso/piso16.png", textoCamada);
				arrayBlocos.push(bloco);
			} else if (this.tipo == 17) {
				var bloco = new Bloco(heroi.getPosX(), heroi.getPosY(), 64, 64, "RED", 17, "piso/piso17.png", textoCamada);
				arrayBlocos.push(bloco);
			} else if (this.tipo == 18) {
				var bloco = new Bloco(heroi.getPosX(), heroi.getPosY(), 64, 64, "RED", 18, "piso/piso18.png", textoCamada);
				arrayBlocos.push(bloco);
			} else if (this.tipo == 19) {
				var bloco = new Bloco(heroi.getPosX(), heroi.getPosY(), 64, 64, "RED", 19, "piso/piso19.png", textoCamada);
				arrayBlocos.push(bloco);
			} else if (this.tipo == 20) {
				var bloco = new Bloco(heroi.getPosX(), heroi.getPosY(), 64, 64, "RED", 20, "piso/piso20.png", textoCamada);
				arrayBlocos.push(bloco);
			} else if (this.tipo == 21) {
				var bloco = new Bloco(heroi.getPosX(), heroi.getPosY(), 64, 64, "RED", 21, "piso/piso21.png", textoCamada);
				arrayBlocos.push(bloco);
			} else if (this.tipo == 22) {
				var bloco = new Bloco(heroi.getPosX(), heroi.getPosY(), 64, 64, "RED", 22, "piso/piso22.png", textoCamada);
				arrayBlocos.push(bloco);
			} else if (this.tipo == 23) {
				var bloco = new Bloco(heroi.getPosX(), heroi.getPosY(), 64, 64, "RED", 23, "piso/piso23.png", textoCamada);
				arrayBlocos.push(bloco);
			} else if (this.tipo == 24) {
				var bloco = new Bloco(heroi.getPosX(), heroi.getPosY(), 64, 64, "RED", 24, "piso/piso24.png", textoCamada);
				arrayBlocos.push(bloco);
			} else if (this.tipo == 25) {
				var bloco = new Bloco(heroi.getPosX(), heroi.getPosY(), 64, 64, "RED", 25, "piso/piso25.png", textoCamada);
				arrayBlocos.push(bloco);
			} else if (this.tipo == 26) {
				var bloco = new Bloco(heroi.getPosX(), heroi.getPosY(), 64, 64, "RED", 26, "piso/piso26.png", textoCamada);
				arrayBlocos.push(bloco);
			} else if (this.tipo == 27) {
				var bloco = new Bloco(heroi.getPosX(), heroi.getPosY(), 64, 64, "RED", 27, "piso/piso27.png", textoCamada);
				arrayBlocos.push(bloco);
			} else if (this.tipo == 28) {
				var bloco = new Bloco(heroi.getPosX(), heroi.getPosY(), 64, 64, "RED", 28, "piso/piso28.png", textoCamada);
				arrayBlocos.push(bloco);
			} else if (this.tipo == 29) {
				var bloco = new Bloco(heroi.getPosX(), heroi.getPosY(), 64, 64, "RED", 29, "piso/piso29.png", textoCamada);
				arrayBlocos.push(bloco);
			} else if (this.tipo == 30) {
				var bloco = new Bloco(heroi.getPosX(), heroi.getPosY(), 64, 64, "RED", 30, "piso/piso30.png", textoCamada);
				arrayBlocos.push(bloco);
			} else if (this.tipo == 31) {
				var bloco = new Bloco(heroi.getPosX(), heroi.getPosY(), 64, 64, "RED", 31, "piso/piso31.png", textoCamada);
				arrayBlocos.push(bloco);
			} else if (this.tipo == 32) {
				var bloco = new Bloco(heroi.getPosX(), heroi.getPosY(), 64, 64, "RED", 32, "piso/piso32.png", textoCamada);
				arrayBlocos.push(bloco);
			} else if (this.tipo == 33) {
				var bloco = new Bloco(heroi.getPosX(), heroi.getPosY(), 64, 64, "RED", 33, "piso/piso33.png", textoCamada);
				arrayBlocos.push(bloco);
			} else if (this.tipo == 34) {
				var bloco = new Bloco(heroi.getPosX(), heroi.getPosY(), 64, 64, "RED", 34, "piso/piso34.png", textoCamada);
				arrayBlocos.push(bloco);
			} else if (this.tipo == 35) {
				var bloco = new Bloco(heroi.getPosX(), heroi.getPosY(), 64, 64, "RED", 35, "piso/piso35.png", textoCamada);
				arrayBlocos.push(bloco);
			} else if (this.tipo == 36) {
				var bloco = new Bloco(heroi.getPosX(), heroi.getPosY(), 64, 64, "RED", 36, "piso/piso36.png", textoCamada);
				arrayBlocos.push(bloco);
			} else if (this.tipo == 37) {
				var bloco = new Bloco(heroi.getPosX(), heroi.getPosY(), 64, 64, "RED", 37, "piso/piso37.png", textoCamada);
				arrayBlocos.push(bloco);
			} else if (this.tipo == 38) {
				var bloco = new Bloco(heroi.getPosX(), heroi.getPosY(), 64, 64, "RED", 38, "piso/piso38.png", textoCamada);
				arrayBlocos.push(bloco);
			} else if (this.tipo == 39) {
				var bloco = new Bloco(heroi.getPosX(), heroi.getPosY(), 64, 64, "RED", 39, "piso/piso39.png", textoCamada);
				arrayBlocos.push(bloco);
			} else if (this.tipo == 40) {
				var bloco = new Bloco(heroi.getPosX(), heroi.getPosY(), 64, 64, "RED", 40, "piso/piso40.png", textoCamada);
				arrayBlocos.push(bloco);
			}else if (this.tipo == 41) {
				var bloco = new Bloco(heroi.getPosX(), heroi.getPosY(), 64, 64, "RED", 41, "estrada/estrada1.png", textoCamada);
				arrayBlocos.push(bloco);
			}else if (this.tipo == 42) {
				var bloco = new Bloco(heroi.getPosX(), heroi.getPosY(), 64, 64, "RED", 42, "estrada/estrada2.png", textoCamada);
				arrayBlocos.push(bloco);
			}else if (this.tipo == 43) {
				var bloco = new Bloco(heroi.getPosX(), heroi.getPosY(), 64, 64, "RED", 43, "estrada/estrada3.png", textoCamada);
				arrayBlocos.push(bloco);
			}else if (this.tipo == 44) {
				var bloco = new Bloco(heroi.getPosX(), heroi.getPosY(), 64, 64, "RED", 44, "estrada/estrada4.png", textoCamada);
				arrayBlocos.push(bloco);
			}else if (this.tipo == 45) {
				var bloco = new Bloco(heroi.getPosX(), heroi.getPosY(), 64, 64, "RED", 45, "estrada/estrada5.png", textoCamada);
				arrayBlocos.push(bloco);
			}else if (this.tipo == 46) {
				var bloco = new Bloco(heroi.getPosX(), heroi.getPosY(), 64, 64, "RED", 46, "estrada/estrada6.png", textoCamada);
				arrayBlocos.push(bloco);
			}else if (this.tipo == 47) {
				var bloco = new Bloco(heroi.getPosX(), heroi.getPosY(), 64, 64, "RED", 47, "estrada/estrada7.png", textoCamada);
				arrayBlocos.push(bloco);
			}else if (this.tipo == 48) {
				var bloco = new Bloco(heroi.getPosX(), heroi.getPosY(), 64, 64, "RED", 48, "estrada/estrada8.png", textoCamada);
				arrayBlocos.push(bloco);
			}else if (this.tipo == 49) {
				var bloco = new Bloco(heroi.getPosX(), heroi.getPosY(), 64, 64, "RED", 49, "estrada/estrada9.png", textoCamada);
				arrayBlocos.push(bloco);
			}else if (this.tipo == 50) {
				var bloco = new Bloco(heroi.getPosX(), heroi.getPosY(), 64, 64, "RED", 50, "estrada/estrada10.png", textoCamada);
				arrayBlocos.push(bloco);
			}else if (this.tipo == 51) {
				var bloco = new Bloco(heroi.getPosX(), heroi.getPosY(), 64, 64, "RED", 51, "estrada/estrada11.png", textoCamada);
				arrayBlocos.push(bloco);
			}else if (this.tipo == 52) {
				var bloco = new Bloco(heroi.getPosX(), heroi.getPosY(), 64, 64, "RED", 52, "estrada/estrada12.png", textoCamada);
				arrayBlocos.push(bloco);
			}else if (this.tipo == 53) {
				var bloco = new Bloco(heroi.getPosX(), heroi.getPosY(), 64, 64, "RED", 53, "estrada/estrada13.png", textoCamada);
				arrayBlocos.push(bloco);
			}else if (this.tipo == 54) {
				var bloco = new Bloco(heroi.getPosX(), heroi.getPosY(), 64, 64, "RED", 54, "estrada/estrada14.png", textoCamada);
				arrayBlocos.push(bloco);
			}else if (this.tipo == 55) {
				var bloco = new Bloco(heroi.getPosX(), heroi.getPosY(), 64, 64, "RED", 55, "estrada/estrada15.png", textoCamada);
				arrayBlocos.push(bloco);
			}else if (this.tipo == 56) {
				var bloco = new Bloco(heroi.getPosX(), heroi.getPosY(), 64, 64, "RED", 56, "natureza/natureza21.png", textoCamada);
				arrayBlocos.push(bloco);
			}else if (this.tipo == 57) {
				var bloco = new Bloco(heroi.getPosX(), heroi.getPosY(), 64, 64, "RED", 57, "natureza/natureza22.png", textoCamada);
				arrayBlocos.push(bloco);
			}else if (this.tipo == 58) {
				var bloco = new Bloco(heroi.getPosX(), heroi.getPosY(), 64, 64, "RED", 58, "construcoes/construcao21.png", textoCamada);
				arrayBlocos.push(bloco);
			}else if (this.tipo == 59) {
				var bloco = new Bloco(heroi.getPosX(), heroi.getPosY(), 64, 64, "RED", 59, "construcoes/construcao22.png", textoCamada);
				arrayBlocos.push(bloco);
			}else if (this.tipo == 60) {
				var bloco = new Bloco(heroi.getPosX(), heroi.getPosY(), 64, 64, "RED", 60, "construcoes/construcao23.png", textoCamada);
				arrayBlocos.push(bloco);
			}else if (this.tipo == 61) {
				var bloco = new Bloco(heroi.getPosX(), heroi.getPosY(), 64, 64, "RED", 61, "natureza/natureza1.png", textoCamada);
				arrayBlocos.push(bloco);
			}else if (this.tipo == 62) {
				var bloco = new Bloco(heroi.getPosX(), heroi.getPosY(), 64, 64, "RED", 62, "natureza/natureza2.png", textoCamada);
				arrayBlocos.push(bloco);
			}else if (this.tipo == 63) {
				var bloco = new Bloco(heroi.getPosX(), heroi.getPosY(), 64, 64, "RED", 63, "natureza/natureza3.png", textoCamada);
				arrayBlocos.push(bloco);
			}else if (this.tipo == 64) {
				var bloco = new Bloco(heroi.getPosX(), heroi.getPosY(), 64, 64, "RED", 64, "natureza/natureza4.png", textoCamada);
				arrayBlocos.push(bloco);
			}else if (this.tipo == 65) {
				var bloco = new Bloco(heroi.getPosX(), heroi.getPosY(), 64, 64, "RED", 65, "natureza/natureza5.png", textoCamada);
				arrayBlocos.push(bloco);
			}else if (this.tipo == 66) {
				var bloco = new Bloco(heroi.getPosX(), heroi.getPosY(), 64, 64, "RED", 66, "natureza/natureza6.png", textoCamada);
				arrayBlocos.push(bloco);
			}else if (this.tipo == 67) {
				var bloco = new Bloco(heroi.getPosX(), heroi.getPosY(), 64, 64, "RED", 67, "natureza/natureza7.png", textoCamada);
				arrayBlocos.push(bloco);
			}else if (this.tipo == 68) {
				var bloco = new Bloco(heroi.getPosX(), heroi.getPosY(), 64, 64, "RED", 68, "natureza/natureza8.png", textoCamada);
				arrayBlocos.push(bloco);
			}else if (this.tipo == 69) {
				var bloco = new Bloco(heroi.getPosX(), heroi.getPosY(), 64, 64, "RED", 69, "natureza/natureza9.png", textoCamada);
				arrayBlocos.push(bloco);
			}else if (this.tipo == 70) {
				var bloco = new Bloco(heroi.getPosX(), heroi.getPosY(), 64, 64, "RED", 70, "natureza/natureza10.png", textoCamada);
				arrayBlocos.push(bloco);
			}else if (this.tipo == 71) {
				var bloco = new Bloco(heroi.getPosX(), heroi.getPosY(), 64, 64, "RED", 71, "natureza/natureza11.png", textoCamada);
				arrayBlocos.push(bloco);
			}else if (this.tipo == 72) {
				var bloco = new Bloco(heroi.getPosX(), heroi.getPosY(), 64, 64, "RED", 72, "natureza/natureza12.png", textoCamada);
				arrayBlocos.push(bloco);
			}else if (this.tipo == 73) {
				var bloco = new Bloco(heroi.getPosX(), heroi.getPosY(), 64, 64, "RED", 73, "natureza/natureza13.png", textoCamada);
				arrayBlocos.push(bloco);
			}else if (this.tipo == 74) {
				var bloco = new Bloco(heroi.getPosX(), heroi.getPosY(), 64, 64, "RED", 74, "natureza/natureza14.png", textoCamada);
				arrayBlocos.push(bloco);
			}else if (this.tipo == 75) {
				var bloco = new Bloco(heroi.getPosX(), heroi.getPosY(), 64, 64, "RED", 75, "natureza/natureza15.png", textoCamada);
				arrayBlocos.push(bloco);
			}else if (this.tipo == 76) {
				var bloco = new Bloco(heroi.getPosX(), heroi.getPosY(), 64, 64, "RED", 76, "natureza/natureza16.png", textoCamada);
				arrayBlocos.push(bloco);
			}else if (this.tipo == 77) {
				var bloco = new Bloco(heroi.getPosX(), heroi.getPosY(), 64, 64, "RED", 77, "natureza/natureza17.png", textoCamada);
				arrayBlocos.push(bloco);
			}else if (this.tipo == 78) {
				var bloco = new Bloco(heroi.getPosX(), heroi.getPosY(), 64, 64, "RED", 78, "natureza/natureza18.png", textoCamada);
				arrayBlocos.push(bloco);
			}else if (this.tipo == 79) {
				var bloco = new Bloco(heroi.getPosX(), heroi.getPosY(), 64, 64, "RED", 79, "natureza/natureza19.png", textoCamada);
				arrayBlocos.push(bloco);
			}else if (this.tipo == 80) {
				var bloco = new Bloco(heroi.getPosX(), heroi.getPosY(), 64, 64, "RED", 80, "natureza/natureza20.png", textoCamada);
				arrayBlocos.push(bloco);
			}else if (this.tipo == 81) {
				var bloco = new Bloco(heroi.getPosX(), heroi.getPosY(), 64, 64, "RED", 81, "construcoes/construcao1.png", textoCamada);
				arrayBlocos.push(bloco);
			}else if (this.tipo == 82) {
				var bloco = new Bloco(heroi.getPosX(), heroi.getPosY(), 64, 64, "RED", 82, "construcoes/construcao2.png", textoCamada);
				arrayBlocos.push(bloco);
			}else if (this.tipo == 83) {
				var bloco = new Bloco(heroi.getPosX(), heroi.getPosY(), 64, 64, "RED", 83, "construcoes/construcao3.png", textoCamada);
				arrayBlocos.push(bloco);
			}else if (this.tipo == 84) {
				var bloco = new Bloco(heroi.getPosX(), heroi.getPosY(), 64, 64, "RED", 84, "construcoes/construcao4.png", textoCamada);
				arrayBlocos.push(bloco);
			}else if (this.tipo == 85) {
				var bloco = new Bloco(heroi.getPosX(), heroi.getPosY(), 64, 64, "RED", 85, "construcoes/construcao5.png", textoCamada);
				arrayBlocos.push(bloco);
			}else if (this.tipo == 86) {
				var bloco = new Bloco(heroi.getPosX(), heroi.getPosY(), 64, 64, "RED", 86, "construcoes/construcao6.png", textoCamada);
				arrayBlocos.push(bloco);
			}else if (this.tipo == 87) {
				var bloco = new Bloco(heroi.getPosX(), heroi.getPosY(), 64, 64, "RED", 87, "construcoes/construcao7.png", textoCamada);
				arrayBlocos.push(bloco);
			}else if (this.tipo == 88) {
				var bloco = new Bloco(heroi.getPosX(), heroi.getPosY(), 64, 64, "RED", 88, "construcoes/construcao8.png", textoCamada);
				arrayBlocos.push(bloco);
			}else if (this.tipo == 89) {
				var bloco = new Bloco(heroi.getPosX(), heroi.getPosY(), 64, 64, "RED", 89, "construcoes/construcao9.png", textoCamada);
				arrayBlocos.push(bloco);
			}else if (this.tipo == 90) {
				var bloco = new Bloco(heroi.getPosX(), heroi.getPosY(), 64, 64, "RED", 90, "construcoes/construcao10.png", textoCamada);
				arrayBlocos.push(bloco);
			}else if (this.tipo == 91) {
				var bloco = new Bloco(heroi.getPosX(), heroi.getPosY(), 64, 64, "RED", 91, "construcoes/construcao11.png", textoCamada);
				arrayBlocos.push(bloco);
			}else if (this.tipo == 92) {
				var bloco = new Bloco(heroi.getPosX(), heroi.getPosY(), 64, 64, "RED", 92, "construcoes/construcao12.png", textoCamada);
				arrayBlocos.push(bloco);
			}else if (this.tipo == 93) {
				var bloco = new Bloco(heroi.getPosX(), heroi.getPosY(), 64, 64, "RED", 93, "construcoes/construcao13.png", textoCamada);
				arrayBlocos.push(bloco);
			}else if (this.tipo == 94) {
				var bloco = new Bloco(heroi.getPosX(), heroi.getPosY(), 64, 64, "RED", 94, "construcoes/construcao14.png", textoCamada);
				arrayBlocos.push(bloco);
			}else if (this.tipo == 95) {
				var bloco = new Bloco(heroi.getPosX(), heroi.getPosY(), 64, 64, "RED", 95, "construcoes/construcao15.png", textoCamada);
				arrayBlocos.push(bloco);
			}else if (this.tipo == 96) {
				var bloco = new Bloco(heroi.getPosX(), heroi.getPosY(), 64, 64, "RED", 96, "construcoes/construcao16.png", textoCamada);
				arrayBlocos.push(bloco);
			}else if (this.tipo == 97) {
				var bloco = new Bloco(heroi.getPosX(), heroi.getPosY(), 64, 64, "RED", 97, "construcoes/construcao17.png", textoCamada);
				arrayBlocos.push(bloco);
			}else if (this.tipo == 98) {
				var bloco = new Bloco(heroi.getPosX(), heroi.getPosY(), 64, 64, "RED", 98, "construcoes/construcao18.png", textoCamada);
				arrayBlocos.push(bloco);
			}else if (this.tipo == 99) {
				var bloco = new Bloco(heroi.getPosX(), heroi.getPosY(), 64, 64, "RED", 99, "construcoes/construcao19.png", textoCamada);
				arrayBlocos.push(bloco);
			}else if (this.tipo == 100) {
				var bloco = new Bloco(heroi.getPosX(), heroi.getPosY(), 64, 64, "RED", 100, "construcoes/construcao20.png", textoCamada);
				arrayBlocos.push(bloco);
				//INIMIGOS OU NPC//
			}else if (this.tipo == 101) {
				var inimigo = new Inimigo(Math.random() * larguraMapa, Math.random() * alturaMapa, 64, 64, Math.random() * -2 + 1, Math.random() * -2 + 1, "RED", true, textoCamada, "npc/npc1.png");
				arrayInimigo.push(inimigo);
			}else if (this.tipo == 102) {
				var inimigo = new Inimigo(Math.random() * larguraMapa, Math.random() * alturaMapa, 64, 64, Math.random() * -2 + 1, Math.random() * -2 + 1, "RED", true, textoCamada, "npc/npc2.png");
				arrayInimigo.push(inimigo);
			}else if (this.tipo == 103) {
				var inimigo = new Inimigo(Math.random() * larguraMapa, Math.random() * alturaMapa, 64, 64, Math.random() * -2 + 1, Math.random() * -2 + 1, "RED", true, textoCamada, "npc/npc3.png");
				arrayInimigo.push(inimigo);
			}else if (this.tipo == 104) {
				var inimigo = new Inimigo(Math.random() * larguraMapa, Math.random() * alturaMapa, 64, 64, Math.random() * -2 + 1, Math.random() * -2 + 1, "RED", true, textoCamada, "npc/npc4.png");
				arrayInimigo.push(inimigo);
			}else if (this.tipo == 105) {
				var inimigo = new Inimigo(Math.random() * larguraMapa, Math.random() * alturaMapa, 64, 64, Math.random() * -2 + 1, Math.random() * -2 + 1, "RED", true, textoCamada, "npc/npc5.png");
				arrayInimigo.push(inimigo);
			}else if (this.tipo == 106) {
				var inimigo = new Inimigo(Math.random() * larguraMapa, Math.random() * alturaMapa, 64, 64, Math.random() * -2 + 1, Math.random() * -2 + 1, "RED", true, textoCamada, "npc/npc6.png");
				arrayInimigo.push(inimigo);
			}else if (this.tipo == 107) {
				var inimigo = new Inimigo(Math.random() * larguraMapa, Math.random() * alturaMapa, 64, 64, Math.random() * -2 + 1, Math.random() * -2 + 1, "RED", true, textoCamada, "npc/npc7.png");
				arrayInimigo.push(inimigo);
			}else if (this.tipo == 108) {
				var inimigo = new Inimigo(Math.random() * larguraMapa, Math.random() * alturaMapa, 64, 64, Math.random() * -2 + 1, Math.random() * -2 + 1, "RED", true, textoCamada, "npc/npc8.png");
				arrayInimigo.push(inimigo);
			}else if (this.tipo == 109) {
				var inimigo = new Inimigo(Math.random() * larguraMapa, Math.random() * alturaMapa, 64, 64, Math.random() * -2 + 1, Math.random() * -2 + 1, "RED", true, textoCamada, "npc/npc9.png");
				arrayInimigo.push(inimigo);
			}else if (this.tipo == 110) {
				var inimigo = new Inimigo(Math.random() * larguraMapa, Math.random() * alturaMapa, 64, 64, Math.random() * -2 + 1, Math.random() * -2 + 1, "RED", true, textoCamada, "npc/npc10.png");
				arrayInimigo.push(inimigo);
			}else if (this.tipo == 111) {
				var inimigo = new Inimigo(Math.random() * larguraMapa, Math.random() * alturaMapa, 64, 64, Math.random() * -2 + 1, Math.random() * -2 + 1, "RED", true, textoCamada, "npc/npc11.png");
				arrayInimigo.push(inimigo);
			}else if (this.tipo == 112) {
				var inimigo = new Inimigo(Math.random() * larguraMapa, Math.random() * alturaMapa, 64, 64, Math.random() * -2 + 1, Math.random() * -2 + 1, "RED", true, textoCamada, "npc/npc12.png");
				arrayInimigo.push(inimigo);
			}

			click = false;
		}
	}

	desenhaCriadorPersonagens() {

		var img = new Image();

		if (this.tipo == 1) {
			img.src = pastaRaizImg + "piso/piso1.png";
		} else if (this.tipo == 2) {
			img.src = pastaRaizImg + "piso/piso2.png";
		} else if (this.tipo == 3) {
			img.src = pastaRaizImg + "piso/piso3.png";
		} else if (this.tipo == 4) {
			img.src = pastaRaizImg + "piso/piso4.png";
		} else if (this.tipo == 5) {
			img.src = pastaRaizImg + "piso/piso5.png";
		} else if (this.tipo == 6) {
			img.src = pastaRaizImg + "piso/piso6.png";
		} else if (this.tipo == 7) {
			img.src = pastaRaizImg + "piso/piso7.png";
		} else if (this.tipo == 8) {
			img.src = pastaRaizImg + "piso/piso8.png";
		} else if (this.tipo == 9) {
			img.src = pastaRaizImg + "piso/piso9.png";
		} else if (this.tipo == 10) {
			img.src = pastaRaizImg + "piso/piso10.png";
		} else if (this.tipo == 11) {
			img.src = pastaRaizImg + "piso/piso11.png";
		} else if (this.tipo == 12) {
			img.src = pastaRaizImg + "piso/piso12.png";
		} else if (this.tipo == 13) {
			img.src = pastaRaizImg + "piso/piso13.png";
		} else if (this.tipo == 14) {
			img.src = pastaRaizImg + "piso/piso14.png";
		} else if (this.tipo == 15) {
			img.src = pastaRaizImg + "piso/piso15.png";
		} else if (this.tipo == 16) {
			img.src = pastaRaizImg + "piso/piso16.png";
		} else if (this.tipo == 17) {
			img.src = pastaRaizImg + "piso/piso17.png";
		} else if (this.tipo == 18) {
			img.src = pastaRaizImg + "piso/piso18.png";
		} else if (this.tipo == 19) {
			img.src = pastaRaizImg + "piso/piso19.png";
		} else if (this.tipo == 20) {
			img.src = pastaRaizImg + "piso/piso20.png";
		} else if (this.tipo == 21) {
			img.src = pastaRaizImg + "piso/piso21.png";
		} else if (this.tipo == 22) {
			img.src = pastaRaizImg + "piso/piso22.png";
		} else if (this.tipo == 23) {
			img.src = pastaRaizImg + "piso/piso23.png";
		} else if (this.tipo == 24) {
			img.src = pastaRaizImg + "piso/piso24.png";
		}else if (this.tipo == 25) {
			img.src = pastaRaizImg + "piso/piso25.png";
		}else if (this.tipo == 26) {
			img.src = pastaRaizImg + "piso/piso26.png";
		}else if (this.tipo == 27) {
			img.src = pastaRaizImg + "piso/piso27.png";
		}else if (this.tipo == 28) {
			img.src = pastaRaizImg + "piso/piso28.png";
		}else if (this.tipo == 29) {
			img.src = pastaRaizImg + "piso/piso29.png";
		}else if (this.tipo == 30) {
			img.src = pastaRaizImg + "piso/piso30.png";
		}else if (this.tipo == 31) {
			img.src = pastaRaizImg + "piso/piso31.png";
		}else if (this.tipo == 32) {
			img.src = pastaRaizImg + "piso/piso32.png";
		}else if (this.tipo == 33) {
			img.src = pastaRaizImg + "piso/piso33.png";
		}else if (this.tipo == 34) {
			img.src = pastaRaizImg + "piso/piso34.png";
		}else if (this.tipo == 35) {
			img.src = pastaRaizImg + "piso/piso35.png";
		}else if (this.tipo == 36) {
			img.src = pastaRaizImg + "piso/piso36.png";
		}else if (this.tipo == 37) {
			img.src = pastaRaizImg + "piso/piso37.png";
		}else if (this.tipo == 38) {
			img.src = pastaRaizImg + "piso/piso38.png";
		}else if (this.tipo == 39) {
			img.src = pastaRaizImg + "piso/piso39.png";
		}else if (this.tipo == 40) {
			img.src = pastaRaizImg + "piso/piso40.png";
		}else if (this.tipo == 41) {
			img.src = pastaRaizImg + "estrada/estrada1.png";
		} else if (this.tipo == 42) {
			img.src = pastaRaizImg + "estrada/estrada2.png";
		} else if (this.tipo == 43) {
			img.src = pastaRaizImg + "estrada/estrada3.png";
		} else if (this.tipo == 44) {
			img.src = pastaRaizImg + "estrada/estrada4.png";
		} else if (this.tipo == 45) {
			img.src = pastaRaizImg + "estrada/estrada5.png";
		} else if (this.tipo == 46) {
			img.src = pastaRaizImg + "estrada/estrada6.png";
		} else if (this.tipo == 47) {
			img.src = pastaRaizImg + "estrada/estrada7.png";
		} else if (this.tipo == 48) {
			img.src = pastaRaizImg + "estrada/estrada8.png";
		} else if (this.tipo == 49) {
			img.src = pastaRaizImg + "estrada/estrada9.png";
		} else if (this.tipo == 50) {
			img.src = pastaRaizImg + "estrada/estrada10.png";
		} else if (this.tipo == 51) {
			img.src = pastaRaizImg + "estrada/estrada11.png";
		} else if (this.tipo == 52) {
			img.src = pastaRaizImg + "estrada/estrada12.png";
		} else if (this.tipo == 53) {
			img.src = pastaRaizImg + "estrada/estrada13.png";
		} else if (this.tipo == 54) {
			img.src = pastaRaizImg + "estrada/estrada14.png";
		} else if (this.tipo == 55) {
			img.src = pastaRaizImg + "estrada/estrada15.png";
		}else if (this.tipo == 56) {
			img.src = pastaRaizImg + "natureza/natureza21.png";
		}else if (this.tipo == 57) {
			img.src = pastaRaizImg + "natureza/natureza22.png";
		}else if (this.tipo == 58) {
			img.src = pastaRaizImg + "construcoes/construcao21.png";
		}else if (this.tipo == 59) {
			img.src = pastaRaizImg + "construcoes/construcao22.png";
		}else if (this.tipo == 60) {
			img.src = pastaRaizImg + "construcoes/construcao23.png";
		}else if (this.tipo == 61) {
			img.src = pastaRaizImg + "natureza/natureza1.png";
		}else if (this.tipo == 62) {
			img.src = pastaRaizImg + "natureza/natureza2.png";
		}else if (this.tipo == 63) {
			img.src = pastaRaizImg + "natureza/natureza3.png";
		}else if (this.tipo == 64) {
			img.src = pastaRaizImg + "natureza/natureza4.png";
		}else if (this.tipo == 65) {
			img.src = pastaRaizImg + "natureza/natureza5.png";
		}else if (this.tipo == 66) {
			img.src = pastaRaizImg + "natureza/natureza6.png";
		}else if (this.tipo == 67) {
			img.src = pastaRaizImg + "natureza/natureza7.png";
		}else if (this.tipo == 68) {
			img.src = pastaRaizImg + "natureza/natureza8.png";
		}else if (this.tipo == 69) {
			img.src = pastaRaizImg + "natureza/natureza9.png";
		}else if (this.tipo == 70) {
			img.src = pastaRaizImg + "natureza/natureza10.png";
		}else if (this.tipo == 71) {
			img.src = pastaRaizImg + "natureza/natureza11.png";
		}else if (this.tipo == 72) {
			img.src = pastaRaizImg + "natureza/natureza12.png";
		}else if (this.tipo == 73) {
			img.src = pastaRaizImg + "natureza/natureza13.png";
		}else if (this.tipo == 74) {
			img.src = pastaRaizImg + "natureza/natureza14.png";
		}else if (this.tipo == 75) {
			img.src = pastaRaizImg + "natureza/natureza15.png";
		}else if (this.tipo == 76) {
			img.src = pastaRaizImg + "natureza/natureza16.png";
		}else if (this.tipo == 77) {
			img.src = pastaRaizImg + "natureza/natureza17.png";
		}else if (this.tipo == 78) {
			img.src = pastaRaizImg + "natureza/natureza18.png";
		}else if (this.tipo == 79) {
			img.src = pastaRaizImg + "natureza/natureza19.png";
		}else if (this.tipo == 80) {
			img.src = pastaRaizImg + "natureza/natureza20.png";
		}else if (this.tipo == 81) {
			img.src = pastaRaizImg + "construcoes/construcao1.png";
		}else if (this.tipo == 82) {
			img.src = pastaRaizImg + "construcoes/construcao2.png";
		}else if (this.tipo == 83) {
			img.src = pastaRaizImg + "construcoes/construcao3.png";
		}else if (this.tipo == 84) {
			img.src = pastaRaizImg + "construcoes/construcao4.png";
		}else if (this.tipo == 85) {
			img.src = pastaRaizImg + "construcoes/construcao5.png";
		}else if (this.tipo == 86) {
			img.src = pastaRaizImg + "construcoes/construcao6.png";
		}else if (this.tipo == 87) {
			img.src = pastaRaizImg + "construcoes/construcao7.png";
		}else if (this.tipo == 88) {
			img.src = pastaRaizImg + "construcoes/construcao8.png";
		}else if (this.tipo == 89) {
			img.src = pastaRaizImg + "construcoes/construcao9.png";
		}else if (this.tipo == 90) {
			img.src = pastaRaizImg + "construcoes/construcao10.png";
		}else if (this.tipo == 91) {
			img.src = pastaRaizImg + "construcoes/construcao11.png";
		}else if (this.tipo == 92) {
			img.src = pastaRaizImg + "construcoes/construcao12.png";
		}else if (this.tipo == 93) {
			img.src = pastaRaizImg + "construcoes/construcao13.png";
		}else if (this.tipo == 94) {
			img.src = pastaRaizImg + "construcoes/construcao14.png";
		}else if (this.tipo == 95) {
			img.src = pastaRaizImg + "construcoes/construcao15.png";
		}else if (this.tipo == 96) {
			img.src = pastaRaizImg + "construcoes/construcao16.png";
		}else if (this.tipo == 97) {
			img.src = pastaRaizImg + "construcoes/construcao17.png";
		}else if (this.tipo == 98) {
			img.src = pastaRaizImg + "construcoes/construcao18.png";
		}else if (this.tipo == 99) {
			img.src = pastaRaizImg + "construcoes/construcao19.png";
		}else if (this.tipo == 100) {
			img.src = pastaRaizImg + "construcoes/construcao20.png";
		} else if (this.tipo == 101) {
			img.src = pastaRaizImg + "npc/npc1.png";
		} else if (this.tipo == 102) {
			img.src = pastaRaizImg + "npc/npc2.png";
		} else if (this.tipo == 103) {
			img.src = pastaRaizImg + "npc/npc3.png";
		} else if (this.tipo == 104) {
			img.src = pastaRaizImg + "npc/npc4.png";
		} else if (this.tipo == 105) {
			img.src = pastaRaizImg + "npc/npc5.png";
		} else if (this.tipo == 106) {
			img.src = pastaRaizImg + "npc/npc6.png";
		}else if (this.tipo == 107) {
			img.src = pastaRaizImg + "npc/npc7.png";
		}else if (this.tipo == 108) {
			img.src = pastaRaizImg + "npc/npc8.png";
		}else if (this.tipo == 109) {
			img.src = pastaRaizImg + "npc/npc9.png";
		}else if (this.tipo == 110) {
			img.src = pastaRaizImg + "npc/npc10.png";
		}else if (this.tipo == 111) {
			img.src = pastaRaizImg + "npc/npc11.png";
		}else if (this.tipo == 112) {
			img.src = pastaRaizImg + "npc/npc12.png";
		}  else {
			img.src = pastaRaizImg + "hero.png";
		}

		contexto.drawImage(img, this.posX, this.posY, this.tamX, this.tamY);
		contexto.beginPath();
		contexto.fill();
		contexto.fillStyle = "WHITE";
		contexto.font = "normal 9pt Arial";
		contexto.fillText(this.tipo, this.posX, this.posY);
		//contexto.strokeStyle = "WHITE";
		//contexto.rect(this.posX, this.posY, this.tamX, this.tamY)
		//contexto.stroke();
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
