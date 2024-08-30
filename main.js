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
