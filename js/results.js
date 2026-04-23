const dadosVencedor = localStorage.getItem("vencedor");

if (dadosVencedor) {
    const vencedor = JSON.parse(dadosVencedor);
    exibirResultado(vencedor);
} else {
    window.location.href = "../index.html";
    console.log("sem dados do vencedor.");
}

function exibirResultado(vencedor) {
    const imgElement = document.querySelector(".result-char-img");
    const nameElement = document.querySelector(".char-announcement");
    const descElement = document.querySelector(".char-description");

    imgElement.src = `${vencedor.image}`;
    nameElement.textContent = `Você se parece com ${vencedor.name}!`;
    descElement.textContent = `${vencedor.info}`;
}
