const imagem =document.querySelector('img');
const botao = document.querySelector('button');
const nomePersonagem1 = document.querySelector('#nome');
const especiePersonagem1 = document.querySelector('#especie');
const estadoPersonagem1 = document.querySelector('#estado');
const nomePersonagem2 = document.querySelector('#nnome');
const estadoPersonagem2 = document.querySelector('#eestado');
const especiePersonagem2 = document.querySelector('#eespecie');

verificarEstado = (data) =>{
	if(data.status == 'unknown'){
		return 'Não sabemos';
	}
	else if(data.status == 'Alive'){
		return 'Sim';
	}
	else{
		return 'Não. Está morto';
	}
}

gerarValorAleatorio = ()=>{
	return Math.floor(Math.random()*671);
}

pegarPersonagemUm = () =>{
	let numeroAleatorio = gerarValorAleatorio();
	return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
		method: 'GET',
		headers: {
			Accept: 'application/json',
			"Content-type": 'application/json'
		}
	}).then((response)=>response.json()).then((data)=>{
		imagem.src = data.image;
		imagem.alt = data.name;
		nomePersonagem1.innerHTML = data.name;
		especiePersonagem1.innerHTML = data.species;
		estadoPersonagem1.innerHTML = verificarEstado(data);
	});
}

pegarPersonagemDois = () =>{
	let numeroAleatorio = gerarValorAleatorio();
	return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
		method: 'GET',
		headers: {
			Accept: 'application/json',
			"Content-type": 'application/json'
		}
	}).then((response)=>response.json()).then((data)=>{
		imagem.src = data.image;
		imagem.alt = data.name;
		nomePersonagem2.innerHTML = data.name;
		especiePersonagem2.innerHTML = data.species;
		estadoPersonagem2.innerHTML = verificarEstado(data);
	});
}
