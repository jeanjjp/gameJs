class Util {

	static desenhaBackGround(largura, altura, cor) {

		//desenha o backGround
		contexto.beginPath();
		contexto.rect(0, 0, largura, altura);
		contexto.fillStyle = cor;
		contexto.fill();
		contexto.closePath();
	}

	static desenhaMenuSuperior(largura, altura, corMenu) {

		//desenha linhas horizontais
		for (var i = 0; i < alturaMapa; i += alturaBloco) {
			contexto.rect(0 - larguraMinMapa, i - alturaMinMapa, larguraMapa, 1);
			contexto.fillStyle = "WHITE";
			contexto.fill();
		}
		//desenha linhas verticais
		for (var i = 0; i < larguraMapa; i += larguraBloco) {
			contexto.rect(i - larguraMinMapa, 0 - alturaMinMapa, 1, alturaMapa);
			contexto.fillStyle = "WHITE";
			contexto.fill();
		}
		//desenha barra de menu
		contexto.rect(0, 0, largura - larguraMinMapa, altura);
		contexto.fillStyle = corMenu;
		contexto.fill();
	}

	static desenhaMenuLateral(largura, altura, corMenu, textoMenu, corTexto, mouseX, mouseY, click, textoPiso) {

		//desenha barra de menu
		contexto.beginPath();
		contexto.rect(larguraMapa - larguraMinMapa + 1, 0, largura, altura);
		contexto.fillStyle = corMenu;
		contexto.fill();
		contexto.closePath();

		//desnha o texto FPS
		contexto.fillStyle = corTexto;
		contexto.font = "normal 10pt Arial";
		contexto.fillText(textoMenu, 910, 100);
		contexto.fillText(textoPiso, 910, 20);
		contexto.fillText(fps.toFixed(0) + " fps", 850, 670);
		contexto.fillText(mouseX.toFixed(0) + " mouseX", 850, 690);
		contexto.fillText(mouseY.toFixed(0) + " mouseY", 950, 690);
		contexto.fillText("click: " + click, 950, 670);
		contexto.closePath();

	}

	static colide(posx1, posx2, posy1, posy2, tamX1, tamX2, tamY1, tamY2) {
		if (!(posx1 + tamX1 < posx2 || posx1 > posx2 || posy1 + tamY1 < posy2 || posy1 > posy2)) {
			return true;
		}
	}

	static salvarMapa(arrayBlocos, arrayInimigo) {

		let titulo = "dataMap";
		let texto = "";

		for (var i = 0; i < arrayBlocos.length; i++) {
			texto += "TipoBloco;" + arrayBlocos[i].getPosX() + ";" + arrayBlocos[i].getPosY() + ";" + arrayBlocos[i].getTamX() + ";" + arrayBlocos[i].getTamY() + ";" + arrayBlocos[i].getCor() + ";" + arrayBlocos[i].getTipo() + ";" + arrayBlocos[i].getImg() + ";" + arrayBlocos[i].getCamada() + ";" + "|";
		}

		for (var i = 0; i < arrayInimigo.length; i++) {
			texto += "TipoNpc;" + arrayInimigo[i].getPosX() + ";" + arrayInimigo[i].getPosY() + ";" + arrayInimigo[i].getTamX() + ";" + arrayInimigo[i].getTamY() + ";" + arrayInimigo[i].getVelX() + ";" + arrayInimigo[i].getVelY() + ";" + arrayInimigo[i].getCor() + ";" + arrayInimigo[i].getVida() + ";" + arrayInimigo[i].getCamada() + ";" + arrayInimigo[i].getImg() + "|";
		}

		let blob = new Blob([texto], {
			type: "text/plain;charset=utf-8"
		});
		saveAs(blob, titulo + ".txt");

	}

	static carregarMapa() {
		//cfiar funcao para carregar jogo
		//validar conteudo vazio
		var arquivo = document.getElementById('filecontents').textContent;
		var conteudoArquivo = arquivo.split("|");
		arrayBlocos = [];
		arrayInimigo = [];
		for (i in conteudoArquivo) {
			var linha = conteudoArquivo[i];
			var valores = linha.split(';');

			//for (var j in valores) {
			//	var valor = valores[j];

			//preciso criar os sets na calsse bloco
			//preciso criar os sets na calsse inimigo

			//}

			if (valores[0] == "TipoBloco") {
				var bloco = new Bloco(parseInt(valores[1]), parseInt(valores[2]), parseInt(valores[3]), parseInt(valores[4]), valores[5], parseInt(valores[6]), valores[7], valores[8]);
				arrayBlocos.push(bloco);
			} else if (valores[0] == "TipoNpc") {
				var inimigo = new Inimigo(parseFloat(valores[1]), parseFloat(valores[2]), parseInt(valores[3]), parseInt(valores[4]), parseFloat(valores[5]), parseFloat(valores[6]), valores[7], valores[8], valores[9], valores[10]);
				arrayInimigo.push(inimigo);
			}
		}

	}

	static validarNumero(valor) {
		var regra = /^[-0-9]/;
		if (valor.match(regra)) {
			return  true;
		} else {
			return  false;
		}
	}
}
