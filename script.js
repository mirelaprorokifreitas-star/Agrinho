// Menu Mobile

const menuBtn = document.getElementById("menu-mobile");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
});

// Busca de cursos

const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".card");

searchInput.addEventListener("keyup", () => {

    const value = searchInput.value.toLowerCase();

    cards.forEach(card => {

        const title = card.querySelector("h3")
        .textContent.toLowerCase();

        if(title.includes(value)){
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

});

// Contadores

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;

        const increment = target / 100;

        if(count < target){

            counter.innerText =
            Math.ceil(count + increment);

            setTimeout(updateCounter, 20);

        }else{
            counter.innerText = target;
        }
    };

    updateCounter();

});

// Slider

const slides = document.querySelectorAll(".slide");

let current = 0;

function showSlide(){

    slides.forEach(slide =>
        slide.classList.remove("active"));

    slides[current].classList.add("active");

    current++;

    if(current >= slides.length){
        current = 0;
    }
}

setInterval(showSlide, 3000);

// Formulário

document.getElementById("contactForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    const nome =
    document.getElementById("nome").value;

    const email =
    document.getElementById("email").value;

    const mensagem =
    document.getElementById("mensagem").value;

    if(nome === "" ||
       email === "" ||
       mensagem === ""){

        alert("Preencha todos os campos obrigatórios.");
        return;
    }

    const emailRegex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailRegex.test(email)){

        alert("Digite um e-mail válido.");
        return;
    }

    alert("Mensagem enviada com sucesso!");
});

// Botão topo

const topBtn = document.getElementById("topBtn");

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});