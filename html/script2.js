const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
let currentIndex = 0;
const displayDuration = 5500; // Tempo que cada slide fica visível (em milissegundos)

// Frases correspondentes às imagens
const frases = [
    '"Estender o consumo do meu restaurante/bar para a praia permitiu me alargar o meu número de clientes e a visibilidade dos meus produtos, sem dúvida a coisa certa a fazer."', 
    '“Fez com que todos os meus potênciais clientes soubessem sempre onde eu estava, aumentou o meu rendimento e organização, tornou-se uma expanção do meu trabalho. ”'
];

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
    // Atualiza o conteúdo da frase
    document.getElementById('quer').textContent = frases[index];
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

showSlide(currentIndex);
setInterval(nextSlide, displayDuration); // Altere o tempo aqui (3000ms = 3s)

function showContent(contentId) {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
  
    tabButtons.forEach(button => button.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));
  
    document.querySelector(`.tab-button[onclick="showContent('${contentId}')"]`).classList.add('active');
    document.getElementById(contentId).classList.add('active');
}
