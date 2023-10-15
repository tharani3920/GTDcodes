function validateAndDisplay() {
  var email = document.querySelector('input[type="email"]').value;
  var name = document.querySelector('input[type="text"]').value;

  var emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
  var chename = /^[A-Za-z0-9]{4,}$/;

  if (email.match(emailRegex) && name.match(chename)) {
    document.getElementById("output").innerHTML =
      "Email: " + email + "<br>Name: " + name;
    window.alert("email and name save successfully ");
    console.log("Email & name", email, name);
  } else {
    document.getElementById("output").innerHTML =
      "Invalid email format or name";
  }
}

function checkvalidate() {
  var fname = document.getElementById("fn").value;
  var lname = document.getElementById("ln").value;

  if (document.getElementById("fn").checkValidity()) {
    document.getElementById("name").innerHTML =
      "fname:" + fname + " lname:" + lname;
  } else {
    document.getElementById("name").innerHTML = "not submitted";
  }
}

function convertToInches() {
  var lengthInOtherUnit = parseFloat(document.getElementById("length").value);
  var inches = lengthInOtherUnit / 2.54; // Conversion factor: 1 inch = 2.54 cm
  document.getElementById("result").innerHTML =
    lengthInOtherUnit +
    " cm is approximately " +
    inches.toFixed(2) +
    " inches.";
}
