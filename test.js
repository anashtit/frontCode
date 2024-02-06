
<div id="info">
    
    <h3>Check in</h3>
    <input    placeholder=""      type="number"   id="in">
    
    <h3>Check out</h3>
    <input    placeholder=""      type="number"   id="out">
    
    <h3>First name</h3>
    <input    placeholder=""      type="text"   id="prenom">

    <h3>Last name</h3>
    <input    placeholder=""      type="text"   id="nom">
</div>


<div class="date">31</div>



this is the div id="info" i want to show it when i click on the div class ="date"


and The initial state of the "info" div is set to display: none





I WANT TO SAVE THIS DATA  WHEN I CLICK ON BUTTON SAVE

First name
LAST NAME
CHECK in
CHECK out
adress
ROOM number
VEHICULE
VEHICULE MODEL



HOW TO SHOW THIS DATA WHEN I CLICK ON <div class="date">




THIS IS HTML

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="BOOKINGS.CSS">
  <title>BOOK NOW</title>
</head>
<body>


<div id="info">

        <h1>Guest Information</h1>
    
        <div class="S3">
        <h3>Check in</h3>
        <input  class="put"  placeholder=""      type="date"   id="inn">
        </div>
    
        <div class="S4">
        <h3>Check out</h3>
        <input    class="put"     placeholder=""    type="date"   id="out">
        </div>
    
       <div class="S6">
            <h3> Personnes</h3>
            
            <input  class="put"   type="text" id="numberInput" oninput="validateNumber()">
            <span id="error-message" style="color: red;"></span>
            
            <div class="S10">
      <h3>Rooms</h3>
   

      <input    class="put"   type="text" id="numberInput2" oninput="validateNumber2()">
      <span id="error-message" style="color: red;"></span>
      </div>

      <div id="welcomeMessage"></div>
              
        <!--    <div class="S5">
        <h3>First name</h3>
        <input    placeholder=""      type="text"   id="prenom">
        </div>
    
        <div class="S6">
        <h3>Last name</h3>
        <input    placeholder=""      type="text"   id="nom">
        </div>
    
        <div class="S7">
        <h3>Adress</h3>
        <input   id="put" placeholder=""      type="text"   id="adress">
        </div>
    
      
      <DIv class="S8">
      <h3>Vehicule</h3>
      <input  id="put"  placeholder="tape here"      type="text"   id="vehucule">
      </DIv>
    
      <DIv class="S9">
      <h3>Vehucule Model</h3>
      <input id="put"  class="ROM" placeholder=""      type="text"   id="model">
      </DIv>
    
     
      <button class="up"><h3> PAY </h3></BUTTON> -->

        <Div class="BTN">
          <button onclick=" validateForm()" class="up" id="sese">
            <h3>SEND</h3>
          </button>
                
     
    
        </Div>
 </div>

 <script src="bookings.JS"></script>
</body>









this is js



//PERSONNS

  function validateNumber() {
    var numberInput = document.getElementById('numberInput');
    var errorMessage = document.getElementById('error-message');

    // Check if the entered value is a number
    if (isNaN(numberInput.value)) {
        errorMessage.innerText = "Invalid input. Please enter a number.";
    } else {
        // Check if the number is 5 or less
        if (parseFloat(numberInput.value) > 5) {
            errorMessage.innerText = "Invalid input. Please enter a number 5 or less.";
        } else {
            errorMessage.innerText = "";
        }
    }
}







//SEND BTN

  function validateForm() {
    // Get input values
    var name = document.getElementById('inn').value;
    var email = document.getElementById('out').value;
    var message = document.getElementById('put').value;
    var personnes = document.getElementById('personnes').value;

    // Check if all inputs are not empty
    if (name !== '' && email !== '' && message !== '' && personnes !== '') {
        // All inputs are filled, navigate to another page (replace 'another-page.html' with your desired URL)
        window.location.href = ' file:///C:/Users/hp/Desktop/BATES%20MOTEL/PAYE.HTML';
    } else {
        // Display error message
        alert('Please enter your information in all fields.');
    }
}
  



//ROOMS

document.addEventListener('DOMContentLoaded', function () {
  var numberInput = document.getElementById('put');

  // Add input event listener to the input field
  numberInput.addEventListener('input', function () {
    var enteredValue = parseInt(numberInput.value, 10);

    // Check if the entered value is a number and within the range
    if (!isNaN(enteredValue) && enteredValue >= 1 && enteredValue <= 8) {
      // Valid input
    } else {
      // Invalid input, show alert
      alert('Please enter a number between 1 and 8.');
      // Clear the input field
      numberInput.value = '';
    }
  });
});




THIS IS css

body{
    background: rgb(40, 39, 39);
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    text-transform: capitalize;
  
    display: flex;
    text-align: center;
    align-items: center;
}

#info{



    display:inline-block;  
    margin-left: 70px;
    
    
    position:  relative;
}
.S3{

    display: flex;
  justify-content: space-between;

  }  .S4{

    display: flex;
  justify-content: space-between;

  }  .S5{

    display: flex;
  justify-content: space-between;

  }  .S6{

    display: flex;
  justify-content: space-between;

  }  .S7{

    display: flex;
  justify-content: space-between;

  }  .S8{

    display: flex;
  justify-content: space-between;

  }
.S9{

    display: flex;
  justify-content: space-between;

  }  .S10{

    display: flex;
  justify-content: space-between;

  }

  h3{
    margin-top: 3px;
    
  }

  input{

    
    width: 50%;
    height: 10px;
    outline: none;
    border: none;
    margin: 3px ;
    background: rgb(255, 255, 255);
    border-radius: 4px;
    padding: 5px ;
    color: rgb(0, 0, 0);
    
    transition: background-color 0.3s ,transform 0.3s; /* Add a smooth transition for the color change */

  }
  input:hover{
    background-color: #d3d3d3; /* Change the background color on hover */
    transform: scale(1.1); /* Increase the size on hover */
}
  

  button{
    
    background-color: #dff8ff;
    font-family: 'Arial', sans-serif;
    font-size: medium;
    border: none;
    letter-spacing: 0,5px;
    margin-top: 2px;
    
    
  }

  /* Add more styling as needed */
  .up{

    background: rgb(72, 157, 255) ;
    width: 80px;
    height: 30px;
    font-family: 'Arial', sans-serif;
    font-size: small;
    border: none;
    
    color: white;
    align-items: center;
    justify-content: center;
    
    border-radius: 5px;
    margin-left: 16px;
    cursor: pointer;
    transition: background-color 0.3s ,transform 0.3s; /* Add a smooth transition for the color change */

}
  .up:hover {
    background-color: #dc0000; /* Change the background color on hover */
    transform: scale(1.1); /* Increase the size on hover */
}



#put{
    margin-top: 10px;
   width: 50%;
   height: 15px;
   outline: none;
   border: none;
   margin: 3px ;
   background: rgb(255, 255, 255);
   border-radius: 4px;
   padding: 2px ;
   color: rgb(0, 0, 0);
   top: -140px;
   display: block;
 
 }

 
