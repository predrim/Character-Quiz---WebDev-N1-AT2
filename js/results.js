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
    nameElement.textContent = `Você se parece com o(a) ${vencedor.name}!`;
    descElement.textContent = `${vencedor.info}`;
    pointsElement.textContent = `Você marcou ${vencedor.points} pontos a favor de ${vencedor.name}`;
}

let bckButton = document.querySelector(".back-img");

bckButton.addEventListener("mouseover", () => {
   bckButton.style.scale = "1.05"; 
});
bckButton.addEventListener("mouseout", () => {
   bckButton.style.scale = "1";
});

