const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
let currentIndex = 0;
const displayDuration = 5500; // Tempo que cada slide fica visível (em milissegundos)

// Frases correspondentes às imagens
const frases = [
    '"O aluguer de toldos, gaivotas, participação em parasail, insufláveis aquáticos, equipamento de surf ou mergulho, entre outros, nunca foi tão fácil de gerir"',
    '"O aluguer de toldos, gaivotas, participação em parasail, insufláveis aquáticos, equipamento de surf ou mergulho, entre outros, nunca foi tão fácil de gerir"',
    '"O aluguer de toldos, gaivotas, participação em parasail, insufláveis aquáticos, equipamento de surf ou mergulho, entre outros, nunca foi tão fácil de gerir"'
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
