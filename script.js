document.addEventListener("DOMContentLoaded", () => {

    console.log("AgroEduca carregado com sucesso!");

    const cards = document.querySelectorAll(".curso");

    cards.forEach(card => {
        card.addEventListener("click", () => {
            alert("Em breve você poderá acessar este curso!");
        });
    });

});