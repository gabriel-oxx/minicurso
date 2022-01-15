gerarValorAleatorio = () => {
  return Math.floor(Math.random() * 671);
};

pegarPersonagem = () => {
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
      console.log(data.name);
    });
};
