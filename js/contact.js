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


    function emailValidation(email) {
        const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (filter.test(email.value)) {
            console.log("Valid E-mail");
            return "valid";
        } else {
            console.log("Invalid E-mail");
            return "invalid";}
    }


    if(inputFirstName.value === "") {
        errorMessage += "<li>First name is required</li>";
    }
    if(inputEmail.value === "") {
        errorMessage += "<li>E-mail is required</li>";
    } else if(emailValidation(inputEmail) == "invalid") {
        errorMessage += "<li>Not a complete Email</li>"
    }
    if(questionCheck.checked !== true &&
       commentCheck.checked !== true &&
       otherCheck.checked !== true) {
        errorMessage += "<li>Choose if it is a Question, Comment or Other</li>"
    }
    if(inputMessage.value === "") {
        errorMessage += "<li>A message is required</li>";
    }


    if(errorMessage !== "") {
        errorOutput.innerHTML = `<div class="alert alert-danger" role="alert">
            ${errorMessage}</div>`;
    } else {
        errorOutput.innerHTML = `<div class="alert alert-success" role="alert">
            Thank you for the message! Your message has been sent.</div>`;
    }
});