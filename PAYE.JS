/*function showmoredetails() {
  var moreinfo = document.getElementById(".BANK");
  if (moreinfo.style.display === "none" || moreinfo.style.display === "") {
      moreinfo.style.display = "block";
  } else {
      moreinfo.style.display = "none";
  }
}



  function validateForm() {
    // Get input values
    var name = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var cin = document.getElementById('cin').value;
    var adress = document.getElementById('adress').value;
    var phone = document.getElementById('phnbr').value;
    var mail = document.getElementById('mail').value;


    // Check if all inputs are not empty
    if (name !== '' && lname !== '' && cin !== '' && adress !== '' && phone !== '' && mail !== '') {

        showmoredetails();

        
    } else {
        // Display error message
        alert('Please enter your information in all fields.');
    }
}

function ALL(){
  validateForm() ;
  showmoredetails();
}


    function areInputsFilled() {
      var name = document.getElementById('fname').value;
      var lname = document.getElementById('lname').value;
      var cin = document.getElementById('cin').value;
      var adress = document.getElementById('adress').value;
      var phone = document.getElementById('phnbr').value;
      var mail = document.getElementById('mail').value;

    return  name !== ""&& lname!== "" && cin !== ""&& adress !== "" && phone !== ""&& mail!== "" ;

}







 
  // Function to toggle the display of the payment div
  function togglePaymentDiv() {
    var paymentDiv = document.getElementById('BANK');
    paymentDiv.style.display = (paymentDiv.style.display === 'none' || paymentDiv.style.display === '') ? 'block' : 'none';
}

  
      
      
      
      
      
      
  









*/




const cinInput = document.getElementById('cin');
const cinErrorMsg = document.getElementById('cinErrorMsg');

cinInput.addEventListener('input', function () {
    if (cinInput.validity.patternMismatch && cinInput.value.length >= 7) {
        cinErrorMsg.textContent = "Invalid info.";
    } else {
        cinErrorMsg.textContent = "";
    }
});



document.addEventListener('DOMContentLoaded', function () {
  var inputs = document.querySelectorAll('input[data-validation]');

  inputs.forEach(function (input) {
    input.addEventListener('blur', function () {
      validateInput(input);
    });
  });

  function validateInput(input) {
    var errorMsgElement = document.getElementById(input.id + 'ErrorMsg');

    if (!input.checkValidity()) {
      // Input is invalid, show error message
      errorMsgElement.textContent = 'Invalid info';
    } else {
      // Check if the input has at least 3 letters
      if (input.value.length < 3) {
        errorMsgElement.textContent = 'Please enter at least 3 letters';
      } else {
        // Input is valid, clear error message
        errorMsgElement.textContent = '';
      }
    }
  }
});





document.addEventListener('DOMContentLoaded', function () {
  var inputs = document.querySelectorAll('input[data-validation]');

  inputs.forEach(function (input) {
    input.addEventListener('blur', function () {
      validateInput(input);
    });
  });

  function validateInput(input) {
    var errorMsgElement = document.getElementById(input.id + 'ErrorMsg');

    if (!input.checkValidity()) {
      // Input is invalid, show error message
      errorMsgElement.textContent = 'Invalid info';
    } else {
      // Input is valid, clear error message
      errorMsgElement.textContent = '';
    }
  }
});


document.addEventListener('DOMContentLoaded', function () {
  var phoneNumberInput = document.getElementById('phnbr');
  var errorMsgElement = document.getElementById('errorMsg');

  phoneNumberInput.addEventListener('blur', function () {
    if (!phoneNumberInput.checkValidity()) {
      // Input is invalid, show error message
      errorMsgElement.textContent = 'Invalid info';
    } else {
      // Input is valid, clear error message
      errorMsgElement.textContent = '';
    }
  });
});




document.addEventListener('DOMContentLoaded', function () {
  var inputs = document.querySelectorAll('input[data-validation]');

  inputs.forEach(function (input) {
    input.addEventListener('blur', function () {
      validateInput(input);
    });
  });

  function validateInput(input) {
    var errorMsgElement = document.getElementById(input.id + 'ErrorMsg');

    if (!input.checkValidity()) {
      // Input is invalid, show error message
      errorMsgElement.textContent = 'Invalid info';
    } else {
      // Input is valid, clear error message
      errorMsgElement.textContent = '';
    }
  }
});


// email validation 

function validateEmail() {
  var emailInput = document.getElementById('mail');
  var errorMessage = document.getElementById('error-message');

  // Check if the input is not empty
  if (emailInput.value.trim() === "") {
      errorMessage.innerText = "Email address is required.";
      return;
  }

  // Check if the entered text is a valid email address
  if (!isValidEmail(emailInput.value)) {
      errorMessage.innerText = "Invalid email address.";
  } else {
      errorMessage.innerText = "";
  }
}

function isValidEmail(email) {
  // Regular expression for basic email validation
  var emailRegex = /^\S+@\S+\.\S+$/;
  return emailRegex.test(email);
}





//ADRESSE

const addressInput = document.getElementById('address');
const addressErrorMsg = document.getElementById('addressErrorMsg');

addressInput.addEventListener('blur', function () {
    if (addressInput.value.length >= 20 || !addressInput.validity.patternMismatch) {
        addressErrorMsg.textContent = "Invalid address. Please enter up to 25 alphanumeric characters.";
    } else {
        addressErrorMsg.textContent = "";
    }
});





//SAVE


document.addEventListener('DOMContentLoaded', function () {
  // Get references to the button and inputs in the info section
  var payButton = document.getElementById('sese');
  var nameInput = document.getElementById('fname');
  var lnameInput = document.getElementById('lname');
  var cinInput = document.getElementById('cin');
  var adressInput = document.getElementById('adress');
  var phoneInput = document.getElementById('phnbr');
  var mailInput = document.getElementById('mail');
  var bankSection = document.getElementById('BANK');
  var infoSection = document.getElementById('info');

  // Add click event listener to the button in the info section
  payButton.addEventListener('click', function () {
    console.log('Button Clicked'); // Check if the button click event is triggered

    // Check if all inputs in the info section are not empty
    if (areInputsFilled([nameInput, lnameInput, cinInput, adressInput, phoneInput, mailInput])) {
      console.log('Inputs are filled'); // Check if this condition is true

      // Hide infoSection and show bankSection
      bankSection.style.display = 'block';
       //infoSection.style.display = 'none'; Uncomment this line if you want to hide infoSection
    } else {
      console.log('Inputs are NOT filled'); // Check if this condition is true

      // Inputs are empty, provide feedback or take appropriate action
      alert('Please fill in all inputs in the Guest Information section before proceeding.');
    }
  });

  // Function to check if an array of inputs are filled
  function areInputsFilled(inputs) {
    return inputs.every(function (input) {
      return input.value.trim() !== '';
    });
  }
});










