function transformButton1() {
 
}

function sendMessage1() {
    const input = document.querySelector('#messageInput1');
    const successMessage = document.querySelector('#successMessage1');

    if (input.value.trim() !== '') {
        successMessage.style.display = 'block';
        document.querySelector('.input-container1').style.display = 'none';
    } else {
        alert('Please enter a message before sending.');
    }
}



document
.getElementById("btn1")
.addEventListener("click", function (event) {
    document.querySelector('.button-container1').style.display = 'none';
    document.querySelector('.input-container1').style.display = 'flex';
    document.querySelector('#messageInput1').focus();
});





/* Segunda parte para el btn del footer */


// Función para manejar el botón del footer
function sendMessageFooter() {
    const inputFooter = document.querySelector('#messageInputFooter');
    const successMessageFooter = document.querySelector('#successMessageFooter');
  
    if (inputFooter.value.trim() !== '') {
      successMessageFooter.style.display = 'block';
      document.querySelector('.input-container-footer').style.display = 'none';
    } else {
      alert('Please enter a message before sending.');
    }
  }
  
  document.getElementById("btn1-footer").addEventListener("click", function (event) {
    document.querySelector('.button-container-footer').style.display = 'none';
    document.querySelector('.input-container-footer').style.display = 'flex';
    document.querySelector('#messageInputFooter').focus();
  });
