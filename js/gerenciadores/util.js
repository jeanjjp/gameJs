class Util {
	constructor() {
		this.tempoInicialFps = new Date().getTime();
		this.frames = 0;
		this.fps = 0;
	}

	static desenhaBackGround(largura, altura, fps, cor) {

		//desenha o backGround
		contexto.beginPath();
		contexto.rect(0, 0, largura, altura);
		contexto.fillStyle = cor;
		contexto.fill();
		contexto.closePath();

		if (teclaCPressionada) {
			//desnha o texto FPS
			contexto.fillStyle = "WHITE";
			contexto.font = "normal 10pt Arial";
			contexto.fillText(fps.toFixed(0) + " fps", 5, 15);

			//desenha linhas horizontais
			for (var i = 0; i < altura; i += 50) {
				contexto.beginPath();
				contexto.rect(0, i, largura, 1);
				contexto.fillStyle = "WHITE";
				contexto.fill();
				contexto.closePath();
			}
			//desenha linhas verticais
			for (var i = 0; i < largura; i += 50) {
				contexto.beginPath();
				contexto.rect(i, 0, 1, altura);
				contexto.fillStyle = "WHITE";
				contexto.fill();
				contexto.closePath();
			}
		}

	}

}
