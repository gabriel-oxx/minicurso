//const imagemPersonagem1 =document.querySelector('imagem');
//const imagemPersonagem2 = document.querySelector('iimagem');
const botao = document.querySelector("button");
const nomePersonagem1 = document.querySelector("#nome");
const nomePersonagem2 = document.querySelector("#nnome");
const nomePersonagem3 = document.querySelector("#nnnome");
const especiePersonagem1 = document.querySelector("#especie");
const especiePersonagem2 = document.querySelector("#eespecie");
const especiePersonagem3 = document.querySelector("#eeespecie");
const estadoPersonagem1 = document.querySelector("#estado");
const estadoPersonagem2 = document.querySelector("#eestado");
const estadoPersonagem3 = document.querySelector("#eeestado");

verificarEstado = (data) => {
	if (data.status == "unknown") {
		return "Não sabemos";
	} else if (data.status == "Alive") {
		return "Sim";
	} else {
		return "Não. Está morto";
	}
};

gerarValorAleatorio = () => {
	return Math.floor(Math.random() * 671);
};

pegarPersonagemUm = () => {
	let numeroAleatorio = gerarValorAleatorio();
	return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
		method: "GET",
		headers: {
			Accept: "application/json",
			"Content-type": "application/json",
		},
	})
		.then((response) => response.json())
		.then((data) => {
			imagem.src = data.image;
			imagem.alt = data.name;
			nomePersonagem1.innerHTML = data.name;
			especiePersonagem1.innerHTML = data.species;
			estadoPersonagem1.innerHTML = verificarEstado(data);
		});
};

pegarPersonagemDois = () => {
	let numeroAleatorio = gerarValorAleatorio();
	return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
		method: "GET",
		headers: {
			Accept: "application/json",
			"Content-type": "application/json",
		},
	})
		.then((response) => response.json())
		.then((data) => {
			iimagem.src = data.image;
			iimagem.alt = data.name;
			nomePersonagem2.innerHTML = data.name;
			especiePersonagem2.innerHTML = data.species;
			estadoPersonagem2.innerHTML = verificarEstado(data);
		});
};

pegarPersonagemTres = () => {
	let numeroAleatorio = gerarValorAleatorio();
	return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
		method: "GET",
		headers: {
			Accept: "application/json",
			"Content-type": "application/json",
		},
	})
		.then((response) => response.json())
		.then((data) => {
			iiimagem.src = data.image;
			iiimagem.alt = data.name;
			nomePersonagem3.innerHTML = data.name;
			especiePersonagem3.innerHTML = data.species;
			estadoPersonagem3.innerHTML = verificarEstado(data);
		});
};

function apresentarPersonagem() {
	pegarPersonagemUm();
	pegarPersonagemDois();
	pegarPersonagemTres();
}

botao.onclick = apresentarPersonagem;
