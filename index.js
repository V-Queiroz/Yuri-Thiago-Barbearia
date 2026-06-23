function animarHero() {
const elementosHero = document.querySelectorAll(
    '.hero-animar-esquerda, .hero-animar-direita'
);

window.addEventListener("load", () => {
    elementosHero.forEach(el => {
    el.classList.add('ativo');
    }); 
});

}

function animarScroll(){
const elementos = document.querySelectorAll(
    '.animar-esquerda, .animar-direita, .animar-fade, .animar-baixo'
);

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('ativo');
        }
    });
}, {
    threshold: 0.2
});

elementos.forEach(el => observer.observe(el));
}

animarHero();
animarScroll();