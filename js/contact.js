const nameInput = document.querySelector("#nameInput");
const emailInput = document.querySelector("#emailInput");
const messageInput = document.querySelector("#messageInput");
const addressInput = document.querySelector("#addressInput");
const sent = document.querySelector("#sent");
const errorMessage = document.querySelectorAll(".error");

// tester om formen er valid
function validate() {
  clearError();
  let errorPass = false;

  if (nameInput.value.length < 1) {
    errorMessage[0].innerText = "Please enter name";
    nameInput.classList.add("error");
    errorPass = true;
  }

  if (!emailValid(emailInput.value)) {
    errorMessage[1].innerText = "Please enter valid email";
    emailInput.classList.add("error");
    errorPass = true;
  }

  if (messageInput.value.length < 10) {
    errorMessage[2].innerText = "Please enter a valid message(must be atleast 10 characters";
    messageInput.classList.add("error");
    errorPass = true;
  }

  if (addressInput.value.length < 24) {
    errorMessage[3].innerText = "Please enter valid address(atleast 25 characters)";
    addressInput.classList.add("error");
    errorPass = true;
  }

  if (!errorPass) {
    sent.innerText = "You have sent us a message!";
  }
}
// fjerner error melding
function clearError() {
  for (let i = 0; i < errorMessage.length; i++) {
    errorMessage[i].innerText = "";
  }
  nameInput.classList.remove("error");
  emailInput.classList.remove("error");
  messageInput.classList.remove("error");
  addressInput.classList.remove("error");
}

// validerer emailen
function emailValid(email) {
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}
