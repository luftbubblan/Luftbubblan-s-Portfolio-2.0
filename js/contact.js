const contact = document.getElementById("contact-form");
console.log(contact);

contact.addEventListener("submit", function(send){
    send.preventDefault();

    const inputFirstName = document.getElementById("firstName");
    const inputEmail     = document.getElementById("email");
    const inputMessage   = document.getElementById("message");
    const errorOutput    = document.getElementById("errorMessage")

    let errorMessage = "";
    if(inputFirstName.value === "") {
        errorMessage += "First name is required<br>";
    }
    if(inputEmail.value === "") {
        errorMessage += "E-mail is required<br>";
    }
    if(inputMessage.value === "") {
        errorMessage += "A message is required<br>";
    }

    if(errorMessage !== "") {
        errorOutput.innerHTML = `<div class="alert alert-danger" role="alert">
            ${errorMessage}</div>`;
    } else {
        errorOutput.innerHTML = `<div class="alert alert-success" role="alert">
            Thank you for the message!</div>`;
    }
});