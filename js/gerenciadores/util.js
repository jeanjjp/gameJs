class Util {

	static desenhaBackGround(largura, altura, cor) {

		//desenha o backGround
		contexto.beginPath();
		contexto.rect(0, 0, largura, altura);
		contexto.fillStyle = cor;
		contexto.fill();
		contexto.closePath();
	}

	static desenhaMenu(largura, altura, fps, corMenu, corTexto) {
		if (teclaCPressionada) {
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

			//desenha linhas horizontais
			for (var i = 0; i < canvas.height; i += alturaBloco) {
				contexto.beginPath();
				contexto.rect(0, i, canvas.width, 1);
				contexto.fillStyle = "WHITE";
				contexto.fill();
				contexto.closePath();
			}
			//desenha linhas verticais
			for (var i = 0; i < canvas.width; i += larguraBloco) {
				contexto.beginPath();
				contexto.rect(i, 0, 1, canvas.height);
				contexto.fillStyle = "WHITE";
				contexto.fill();
				contexto.closePath();
			}
		}
	}
}
