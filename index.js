function handleSubmit(e) {
  e.preventDefault();

  nameValidation();
  companyValidation();
  mobileNoValidation();
  emailValidation();
  messgaeValidation();
}

function nameValidation() {
  const name = document.getElementById("name").value;
  const nameRegex = /\d/;
  if (!name) {
    const element = document.getElementById("name-error");
    element.innerText = "Name is Required";
    element.classList.remove("d-none");
  } else if (name.length < 3 || name.length > 6) {
    const element = document.getElementById("name-error");
    element.innerText = "Name must be of 3 to 6 characters";
    element.classList.remove("d-none");
  } else if (nameRegex.test(name)) {
    const element = document.getElementById("name-error");
    element.innerText = "Name can't contain numbers";
    element.classList.remove("d-none");
  } else {
    const element = document.getElementById("name-error");
    element.innerText = "";
    element.classList.add("d-none");
  }
}

function companyValidation() {
  const company = document.getElementById("Company").value;
  if (!company) {
    const element = document.getElementById("comp-error");
    element.innerText = "Company is Required";
    element.classList.remove("d-none");
  } else {
    const element = document.getElementById("comp-error");
    element.innerText = "";
    element.classList.add("d-none");
  }
}

function emailValidation() {
  const email = document.getElementById("Email").value;

  if (!email) {
    const element = document.getElementById("email-error");
    element.innerText = "Email is Required";
    element.classList.remove("d-none");
  } else {
    const element = document.getElementById("email-error");
    element.innerText = "";
    element.classList.add("d-none");
  }
}

function mobileNoValidation() {
  const mobileNumber = document.getElementById("Mobile").value;

  const NumberRegex = /^\d+$/;
  if (!mobileNumber) {
    const element = document.getElementById("mobile-error");
    element.innerText = "Mobile number is Required";
    element.classList.remove("d-none");
  } else if (!NumberRegex.test(mobileNumber)) {
    const element = document.getElementById("mobile-error");
    element.innerText = "Mobile number can only contain digits";
    element.classList.remove("d-none");
  } else if (mobileNumber.length !== 10) {
    const element = document.getElementById("mobile-error");
    element.innerText = "Mobile number should be of 10 digits";
    element.classList.remove("d-none");
  } else {
    const element = document.getElementById("mobile-error");
    element.innerText = "";
    element.classList.add("d-none");
  }
}
function messgaeValidation() {
  const message = document.getElementById("message").value;

  if (!message) {
    const element = document.getElementById("message-error");
    element.innerText = "Message is Required";
    element.classList.remove("d-none");
  } else {
    const element = document.getElementById("message-error");
    element.innerText = "";
    element.classList.add("d-none");
  }
}
