async function buscar() {
    console.log("Davi esteve por aqui")

    const resposta = await fetch("https://661865029a41b1b3dfbcf49e.mockapi.io/agendas")
    const respostaDadosAgenda = await resposta.json()
    console.log("Resposta: ",respostaDadosAgenda);

    const cards = document.getElementById("cards_games");

    cards.innerHTML += respostaDadosAgenda.map((Agenda) => {
        // porque que é itemAgenda?
        return "Teste: "
    });
}

console.log("antes de buscar")
buscar()
console.log("depois de buscar")
