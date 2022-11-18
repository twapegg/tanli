var attempts = 0;

function viewPassword() {
  var x = document.getElementById("pass");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

function check() {
  // variables for username
  var input = document.getElementById("user").value.toString();
  var char = "";

  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  var upperCheck = 0;
  var lowerCheck = 0;
  var numberCheck = 0;
  var specialCharCheck = specialChars.test(input);

  // variables for password
  var input2 = document.getElementById("pass").value.toString();
  var char2 = "";

  var digitCheck = 0;
  var passSpecialCharCheck = specialChars.test(input2);

  // for username
  for (var i = 0; i <= input.length; i++) {
    char = input.charAt(i);
    if (char >= "0" && char <= "9") {
      // compares the ASCII value between 0 to 9
      numberCheck++;
    }
    if (char >= "A" && char <= "Z") {
      // compares the ASCII value between capitalS A to Z
      upperCheck++;
    }
    if (char >= "a" && char <= "z") {
      // compares the ASCII value between a to z
      lowerCheck++;
    }
  }

  // for password
  for (var x = 0; x <= input2.length; x++) {
    char2 = input2.charAt(x);
    if (char2 >= "0" && char2 <= "9") {
      digitCheck++;
    }
  }

  // Blank Checking
  if (input == "" && input2 == "") {
    alert("Username and Password cannot be empty.");
  } else if (input == "") {
    alert("Username cannot be empty.");
  } else if (input2 == "") {
    alert("Password cannot be empty.");
  }
  // Length Checking
  else if (input.length < 5 || input2.length < 6) {
    alert(
      "Username must be not be less than 5 characters.\nPassword must not be less than 6 characters."
    );
    attempts++;
  }

  // Username Trapping
  else if (numberCheck > 0) {
    alert("Username cannot contain numbers.");
    attempts++;
  } else if (specialCharCheck == true) {
    alert("Username cannot contain special characters.");
    attempts++;
  } else if (upperCheck < 1 || lowerCheck < 1) {
    alert("Username must be a combination of Uppercase and Lowercase letters.");
    attempts++;
  }

  // Password Trapping
  else if (digitCheck < 1) {
    alert("Password must have atleast one number.");
    attempts++;
  } else if (passSpecialCharCheck == false) {
    alert("Password must have atleast one special character.");
    attempts++;
  }

  if (
    upperCheck > 0 &&
    lowerCheck > 0 &&
    input.length >= 5 &&
    digitCheck > 0 &&
    input2.length >= 5 &&
    passSpecialCharCheck == true
  ) {
    alert("Congratulations! You have successfully logged in.");
  }

  // for attempts
  if (attempts == 1) {
    document.getElementById("counter").style.visibility = "visible";
  }
  if (attempts == 2) {
    document.getElementById("counter").innerHTML =
      attempts - 1 + " attempts left";
  }
  // disable if maximum attempts
  if (attempts == 3) {
    document.getElementById("form").style.visibility = "hidden";
    document.getElementById("counter").style.visibility = "hidden";
    document.getElementById("popup").style.visibility = "visible";
  }
}

function hint() {
  alert(
    "Username must not be less than 5 characters and must be a combination of uppercase and lowercase letters. \nPassword must not be less than 6 characters and must have atleast 1 number and special character."
  );
}
