document.getElementById("contactForm").addEventListener("submit", function(event){event.preventDefault();

const name = document.getElementById("name").value.trim();
const phone = document.getElementById("phone").value.trim();
const email = document.getElementById("email").value.trim();
const message = document.getElementById("message").value.trim();

if (name && phone && email && message){
    document.getElementById("responseMessage").textContent = "Formulário enviado com sucesso!";
    this. reset();
} else{
    document.getElementById("responseMessage").textContent = "Por favor , preencha todos os campos.";
}

})