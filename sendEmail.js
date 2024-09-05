//  listen to the form submission
 document
 .getElementById("myForm")
 .addEventListener("submit", function (event) {
   event.preventDefault();

   const serviceID = "service_cm8n8on";
   const templateID = "template_5nx0n2r";
   const public_key = "4zJZIzjY1xmA8iB4L"

   // Obtener el correo del usuario
   emailjs.init(public_key); 
   // send the email here
   emailjs.sendForm(serviceID, templateID, this).then(
     (response) => {
       console.log("SUCCESS!", response.status, response.text);
       document.querySelector('.success-message1').style.display = 'block';
       
     },
     (error) => {
       console.log("FAILED...", error);
       
     }
   );
 });