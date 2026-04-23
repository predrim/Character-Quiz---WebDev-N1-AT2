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
    const pointsElement = document.querySelector(".points-announcement");

    imgElement.src = `${vencedor.image}`;
    nameElement.textContent = `Você se parece com ${vencedor.name}!`;
    descElement.textContent = `${vencedor.info}`;
    pointsElement.textContent = `Você marcou ${vencedor.points} pontos a favor de ${vencedor.name}`;
}
