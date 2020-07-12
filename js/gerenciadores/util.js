class Util {

	static desenhaBackGround(largura, altura, cor) {

		//desenha o backGround
		contexto.beginPath();
		contexto.rect(0, 0, largura, altura);
		contexto.fillStyle = cor;
		contexto.fill();
		contexto.closePath();
	}

	static desenhaMenuSuperior(largura, altura, fps, corMenu, corTexto, mouseX, mouseY, click) {

		//desenha linhas horizontais
		for (var i = 0; i < alturaMapa; i += alturaBloco) {
			contexto.beginPath();
			contexto.rect(0, i, larguraMapa, 1);
			contexto.fillStyle = "WHITE";
			contexto.fill();
		}
		//desenha linhas verticais
		for (var i = 0; i < larguraMapa; i += larguraBloco) {
			contexto.rect(i, 0, 1, alturaMapa);
			contexto.fillStyle = "WHITE";
			contexto.fill();
		}
		//desenha barra de menu
		contexto.rect(0, 0, largura, altura);
		contexto.fillStyle = corMenu;
		contexto.fill();


		//desnha o texto FPS
		contexto.fillStyle = corTexto;
		contexto.font = "normal 10pt Arial";
		contexto.fillText(fps.toFixed(0) + " fps", 5, 15);
		contexto.fillText(mouseX.toFixed(0) + " mouseX", 60, 15);
		contexto.fillText(mouseY.toFixed(0) + " mouseY", 140, 15);
		contexto.fillText("click: " + click, 220, 15);
		contexto.closePath();
	}

	static desenhaMenuLateral(largura, altura, corMenu) {

		//desenha barra de menu
		contexto.beginPath();
		contexto.rect(larguraMapa, 0, largura, altura);
		contexto.fillStyle = corMenu;
		contexto.fill();
		contexto.closePath();

	}

	static colide(posx1, posx2, posy1, posy2, tamX1, tamX2, tamY1, tamY2) {
		if (!(posx1 + tamX1 < posx2 || posx1 > posx2 || posy1 + tamY1 < posy2 || posy1 > posy2)) {
			return true;
		}
	}
}
