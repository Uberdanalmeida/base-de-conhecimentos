let dados = [];

async function Buscar() {
    let resp = await fetch("data.json");
    dados = await resp.json();
    console.log(dados)
}