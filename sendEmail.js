document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar el comportamiento por defecto del formulario

    var formData = new FormData(this);

    fetch("send-email.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          console.log("Éxito:", data.success);
          document.querySelector(".success-message1").style.display = "block";
        } else if (data.error) {
          console.error("Error:", data.error);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });