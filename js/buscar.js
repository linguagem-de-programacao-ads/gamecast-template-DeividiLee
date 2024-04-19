async function buscar() {
    console.log("Davi esteve por aqui")

    const resposta = await fetch("https://661865029a41b1b3dfbcf49e.mockapi.io/agendas")
    const respostaDadosAgenda = await resposta.json()
    console.log("Resposta: ",respostaDadosAgenda);

    const cards = document.getElementById("cards_games");

    cards.innerHTML += respostaDadosAgenda.map((itemAgenda) => {
        // porque que é itemAgenda?
        return `
        <div class="cardItem">
        <div class="dataGame"> 
            <img src="../imagens/calendar-solid.svg" alt=""> 20/04 21:30 
        </div>
        <img class="img-background" src="${itemAgenda.urlImagem}" alt="">
        <div class="descricao">
            <p> <strong>${itemAgenda.nome}</strong> </p>
            <p> Descrição de como vai funcionar o GamePlay, frase legal para chamar a galera :D </p>
            <p><strong>Gamers: </strong></p>

            <div class="gamers">
               ${
                itemAgenda.gamers.map((gamerItem)=> {
                    return `<div class="gamerItem">@${gamerItem}</div>`
                }).join('')
               }
            
            </div>

          
        </div>  
        <div class="assistir">
                <a class="assistirItem"> <img src="../imagens/youtube.svg" alt=""> Assistir </a>
        </div>
    </div>
        `
    }).join('');
}

console.log("antes de buscar")
buscar()
console.log("depois de buscar")
