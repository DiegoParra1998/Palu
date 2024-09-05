const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

if (nav && abrir && cerrar) {
    abrir.addEventListener("click", () => {
        nav.classList.add("visible");
    });

    cerrar.addEventListener("click", () => {
        nav.classList.remove("visible");
    });
} else {
    console.error("Uno o más elementos no se encontraron en el DOM");
}



function transformButton() {
    document.querySelector('.boton-1').style.display = 'none';
    document.querySelector('.input-container').style.display = 'flex';
    document.querySelector('#messageInput').focus();
}

function sendMessage() {
    const input = document.querySelector('#messageInput');
    const successMessage = document.querySelector('#successMessage');

    if (input.value.trim() !== '') {
        successMessage.style.display = 'block';
        document.querySelector('.input-container').style.display = 'none';
    } else {
        alert('Please enter a message before sending.');
    }
}


const words = ["drive", "scale", "grow"];
const highlightElement = document.querySelector('.highlight');
let currentIndex = 0;

setInterval(() => {
    // Update the word in the highlighted element
    highlightElement.textContent = words[currentIndex];

    // Move to the next word, cycling back to the start
    currentIndex = (currentIndex + 1) % words.length;
}, 2000);




// TOP BOTON 
// Obtener el botón
const topButton = document.getElementById("topButton");

// Mostrar el botón cuando el usuario haya bajado a la mitad de la página
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    const halfPage = document.documentElement.scrollHeight / 9;

    // Si el scroll ha llegado a la mitad de la página, mostramos el botón
    if (document.body.scrollTop > halfPage || document.documentElement.scrollTop > halfPage) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
}

// Al hacer clic, ir arriba
topButton.addEventListener("click", function() {
    document.body.scrollTop = 0; // Para Safari
    document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera
});
