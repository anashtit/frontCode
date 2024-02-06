/*document.addEventListener("DOMContentLoaded", function () {
    var seseButton = document.getElementById("sese");
  
    seseButton.addEventListener("click", function () {
      var innValue = document.getElementById("inn").value;
      var outValue = document.getElementById("out").value;
      var personnesValue = document.getElementById("personnes").value;
      var roomsValue = document.getElementById("put").value;
  
      if (innValue === "" || outValue === "" || personnesValue === "" || roomsValue === "") {
        // Display the message when any input is empty
        alert("YOU HAVE TO ENTER YOUR INFO PLEASE");
      } else {
        // Display the message when all inputs are not empty
        alert("WELCOME TO BATES MOTEL");
      }
    });
  });*/





  //////////////////////////////////////////////////////////////////////////////////////////////////////////









  // PERSONNS
function validateNumber() {
  var numberInput = document.getElementById('numberInput');
  var errorMessage = document.getElementById('error-message');

  if (isNaN(numberInput.value)) {
      errorMessage.innerText = "Invalid input. Please enter a number.";
  } else {
      if (parseFloat(numberInput.value) > 5) {
          errorMessage.innerText = "Invalid input. Please enter a number 5 or less.";
      } else {
          errorMessage.innerText = "";
      }
  }
}

// SEND BTN
function validateForm() {
  var CHECKIN = document.getElementById('inn').value;
  var CHECKOUT = document.getElementById('out').value;
  var ROOMS= document.getElementById('numberInput2').value;
  var personnes = document.getElementById('numberInput').value;

  if (CHECKIN !== '' && CHECKOUT !== '' && ROOMS !== '' && personnes !== '') {
      window.location.href = 'file:///C:/Users/hp/Desktop/BATES%20MOTEL/PAYE.HTML';
  } else {
      alert('Please enter your information in all fields.');
  }
}

// ROOMS
function validateNumber2() {
  var numberInput = document.getElementById('numberInput2');
  var errorMessage = document.getElementById('error-message');

  if (isNaN(numberInput.value)) {
      errorMessage.innerText = "Invalid input. Please enter a number.";
  } else {
      if (parseFloat(numberInput.value) > 5) {
          errorMessage.innerText = "Invalid input. Please enter a number 8 or less.";
      } else {
          errorMessage.innerText = "";
      }
  }
}