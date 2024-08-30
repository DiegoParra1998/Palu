function transformButton1() {
    document.querySelector('.button-container1').style.display = 'none';
    document.querySelector('.input-container1').style.display = 'flex';
    document.querySelector('#messageInput1').focus();
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