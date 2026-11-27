// Smart Phone - JavaScript (simple version)

// 1. Greeting on the home page, depends on the time
function showGreeting() {
  var hour = new Date().getHours();
  var text;
  if (hour < 12) {
    text = "Good Morning! Welcome to Smart Phone";
  } else if (hour < 17) {
    text = "Good Afternoon! Welcome to Smart Phone";
  } else {
    text = "Good Evening! Welcome to Smart Phone";
  }
  document.getElementById("greeting").innerHTML = text;
}

// 2. Register form validation
function validateRegister() {
  var name = document.getElementById("name").value.trim();
  var email = document.getElementById("email").value.trim();
  var phone = document.getElementById("phone").value.trim();
  var pass = document.getElementById("password").value;
  var confirmPass = document.getElementById("confirm").value;

  if (name.length < 3) {
    alert("Name must have at least 3 letters");
    return false;
  }

  // email must have @ and a dot after it
  if (email.indexOf("@") == -1 || email.lastIndexOf(".") < email.indexOf("@")) {
    alert("Please enter a valid email");
    return false;
  }

  // phone number: 10 digits, starts with 6,7,8 or 9
  var phonePattern = /^[6-9][0-9]{9}$/;
  if (!phonePattern.test(phone)) {
    alert("Phone number must be 10 digits and start with 6, 7, 8 or 9");
    return false;
  }

  if (pass.length < 6) {
    alert("Password must have at least 6 characters");
    return false;
  }

  if (pass != confirmPass) {
    alert("Password and confirm password are not same");
    return false;
  }

  return true; // everything is ok, form will be submitted
}

// 3. Login form validation
function validateLogin() {
  var email = document.getElementById("email").value.trim();
  var pass = document.getElementById("password").value;

  if (email == "" || pass == "") {
    alert("Please enter email and password");
    return false;
  }
  return true;
}

// 4. Show / hide password (checkbox)
function showPassword() {
  var p = document.getElementById("password");
  if (p.type == "password") {
    p.type = "text";
  } else {
    p.type = "password";
  }
  // confirm box is only on the register page
  var c = document.getElementById("confirm");
  if (c) {
    c.type = p.type;
  }
}

// 5. Search box on the mobiles page - hides the phones that do not match
function searchPhones() {
  var text = document.getElementById("search").value.toLowerCase();
  var phones = document.getElementsByClassName("phone");

  for (var i = 0; i < phones.length; i++) {
    var phoneText = phones[i].innerText.toLowerCase();
    if (phoneText.indexOf(text) > -1) {
      phones[i].style.display = "";
    } else {
      phones[i].style.display = "none";
    }
  }
}

// 6. Ask before buying
function confirmBuy(name) {
  return confirm("Do you want to buy " + name + "?");
}
