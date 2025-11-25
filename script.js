
let cardsContainer = document.querySelector(".card");

let dados = [];

async function Buscar() {
    let resp = await fetch("data.json");
    dados = await resp.json();
    exibirCards(dados); 
}


function exibirCards(dados) {
    cardsContainer.innerHTML = ""; 

    for(let dado of dados) {
        let article = document.createElement("article");
        article.classList.add("card-conteudo");
        article.innerHTML = `
                <h2>${dado.titulo || "Título Padrão"}</h2>
                <p>${dado.descricao || "Descrição Padrão"}</p>
                <a href="${dado.link || "#"}" target="_blank">Saiba Mais</a>
                `;
        cardsContainer.appendChild(article); 
    }
}