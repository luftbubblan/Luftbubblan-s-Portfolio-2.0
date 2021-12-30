const contact = document.getElementById("contact-form");
console.log(contact);

contact.addEventListener("submit", function(send){
    send.preventDefault();

    const inputFirstName = document.getElementById("firstName");
    const inputEmail     = document.getElementById("email");
    const inputMessage   = document.getElementById("message");
    const errorOutput    = document.getElementById("errorMessage")
    const questionCheck  = document.getElementById("question")
    const commentCheck   = document.getElementById("comment")
    const otherCheck     = document.getElementById("other")

    let errorMessage = "";
    if(inputFirstName.value === "") {
        errorMessage += "First name is required<br>";
    }
    if(inputEmail.value === "") {
        errorMessage += "E-mail is required<br>";
    }
    if(questionCheck.checked !== true &&
       commentCheck.checked !== true &&
       otherCheck.checked !== true) {
        errorMessage += "Choose if it is a Question, Comment or Other<br>"
    }
    if(inputMessage.value === "") {
        errorMessage += "A message is required<br>";
    }
    if(emailValidation(inputEmail) != true) {
        errorMessage += "Not a complete Email"
    }










    if(errorMessage !== "") {
        errorOutput.innerHTML = `<div class="alert alert-danger" role="alert">
            ${errorMessage}</div>`;
    } else {
        errorOutput.innerHTML = `<div class="alert alert-success" role="alert">
            Thank you for the message!</div>`;
    }




    function emailValidation(email) {
        const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (filter.test(email.value)) {
            return true;
        } else {
            return false;}
        }


console.log(emailValidation(inputEmail));









});