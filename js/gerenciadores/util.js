class Util {

	static desenhaBackGround(largura, altura, cor) {

		//desenha o backGround
		contexto.beginPath();
		contexto.rect(0, 0, largura, altura);
		contexto.fillStyle = cor;
		contexto.fill();
		contexto.closePath();
	}

	static desenhaMenuSuperior(largura, altura, fps, corMenu, corTexto) {

		//desenha linhas horizontais
		for (var i = 0; i < alturaMapa; i += alturaBloco) {
			contexto.beginPath();
			contexto.rect(0, i, larguraMapa, 1);
			contexto.fillStyle = "WHITE";
			contexto.fill();
			contexto.closePath();
		}
		//desenha linhas verticais
		for (var i = 0; i < larguraMapa; i += larguraBloco) {
			contexto.beginPath();
			contexto.rect(i, 0, 1, alturaMapa);
			contexto.fillStyle = "WHITE";
			contexto.fill();
			contexto.closePath();
		}
		//desenha barra de menu
		contexto.beginPath();
		contexto.rect(0, 0, largura, altura);
		contexto.fillStyle = corMenu;
		contexto.fill();
		contexto.closePath();

		//desnha o texto FPS
		contexto.fillStyle = corTexto;
		contexto.font = "normal 10pt Arial";
		contexto.fillText(fps.toFixed(0) + " fps", 5, 15);

	}

	static desenhaMenuLateral(largura, altura, corMenu) {

		//desenha barra de menu
		contexto.beginPath();
		contexto.rect(larguraMapa, 0, largura, altura);
		contexto.fillStyle = corMenu;
		contexto.fill();
		contexto.closePath();

	}
}
