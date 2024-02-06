// Dynamically generate calendar days
/*const daysContainer = document.querySelector('.days');

for (let i = 1; i <= 31; i++) {
  const dayElement = document.createElement('div');
  dayElement.classList.add('day');
  dayElement.textContent = i;
  daysContainer.appendChild(dayElement);
}*/




let room = document.getElementById('room');
let inn = document.getElementById('inn');
let out = document.getElementById('out');

let prenom = document.getElementById('prenom');
let nom = document.getElementById('nom');
let adress = document.getElementById('adress');



 function showdata(){

  document.getElementById("room").value = 4 ;
  document.getElementById("inn").value =2 ;
  document.getElementById("out").value = 3 ;
  document.getElementById("prenom").value ="anas" ;
  document.getElementById("nom").value ="htit" ;
  document.getElementById("adress").value="hay saada pergola" ;

}


function showdata2(){

  document.getElementById("room").value = 4 ;
  document.getElementById("inn").value =27 ;
  document.getElementById("out").value = 29 ;
  document.getElementById("prenom").value ="DYLAN" ;
  document.getElementById("nom").value ="BATES" ;
  document.getElementById("adress").value="STREET 434 CALIFORNIA" ;

}


/*document.getElementById('dateee').addEventListener('click', function() {
  toggleVisibility('info');
});

function toggleVisibility(elementId) {
  var targetElement = document.getElementById(elementId);
  targetElement.style.display = (targetElement.style.display === 'none' || targetElement.style.display === '') ? 'block' : 'none';
}





function showall() {
  let info = document.querySelector(".info");
  if (info.style.display === "none" || info.style.display === "") {
    info.style.display = "block";
  } else {
    info.style.display = "block";
  }
}


function showInfo() {
  var infoDiv = document.getElementById('info');
  infoDiv.style.display = "block";
}*/

function showdatavide(){

  document.getElementById("room").value ="" ;
  document.getElementById("inn").value ="";
  document.getElementById("out").value = "" ;
  document.getElementById("prenom").value ="" ;
  document.getElementById("nom").value ="" ;
  document.getElementById("adress").value="" ;

}

function infovide(){
  showInfo()
  showdatavide()
}


function show() {

  toggleVisibility('info') ;
  showdata();
}

function show2() {

  toggleVisibility('info');
  showdata2();
}

  
function showmoredetails() {
  var moreinfo = document.querySelector(".moreinfo");
  if (moreinfo.style.display === "none" || moreinfo.style.display === "") {
    moreinfo.style.display = "block";
  } else {
    moreinfo.style.display = "none";
  }
}


  
/*
  .info{

    display:none;  
    margin-left: 180px;
  }

  //HTML
  <div id="dateee"
  onclick=" showall() " >3</div>

  
<div class="info">

<h1>Guest Information</h1>
<DIv class="S1">
<h3>Search</h3>
<input    placeholder="tape here"      type="text"   id="search">
</DIv>
</div>

  //JS

function showall() {
    var info= document.getElementById("info");
    if (info.style.display === "none") {
      info.style.display = "block";
    } else {
      info.style.display = "none";
    }
  }

  Function MakeItRed(){

    let red = document.getElementById("dateee") ;
    red.style.backgroundColor = 'red'; 

  }

  document.addEventListener('DOMContentLoaded', function() {
    var colorButton = document.getElementById('colorButton');
    var coloredDiv = document.getElementById('dateee');
  
    colorButton.addEventListener('click', function() {
      coloredDiv.style.backgroundColor = 'red';
    });
  });
  

  document.addEventListener('DOMContentLoaded', function() {
    var colorButton = document.getElementById('colorButton');
    var dateeeDivs = document.getElementsById('dateee');
  
    colorButton.addEventListener('click', function() {
      // Loop through each div with the class 'color-div' and set its background color to red
      for (var i = 0; i < dateeeDivs.length; i++) {
        dateeeDivs[i].style.backgroundColor = 'red';
      }
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    var colorButton = document.getElementById('colorButton');
  
    colorButton.addEventListener('click', function() {
      // Set the background color of each div by its unique id
      document.getElementById('dateee').style.backgroundColor = 'red';
      document.getElementById('dateee2').style.backgroundColor = 'red';
     
    });
  });


  document.addEventListener('DOMContentLoaded', function() {
    var colorButton = document.getElementById('colorButton');
    var dateeeDivs = document.getElementsByClassName('date4');
  
    colorButton.addEventListener('click', function() {
      // Loop through each div with the class 'dateee' and set its background color to red
      for (var i = 0; i < dateeeDivs.length; i++) {
        dateeeDivs[i].style.backgroundColor = 'RED';
      }
    });
  });*/




  function changeColor1() {
    var dateeeDivs = document.querySelectorAll('.date1');

    dateeeDivs.forEach(function(div) {
      div.style.backgroundColor = ' #bdeffd';
    });
  }
  function changeColor2() {
    var dateeeDivs = document.querySelectorAll('.date2');

    dateeeDivs.forEach(function(div) {
      div.style.backgroundColor = ' #bdeffd';
    });
  }
  function changeColor3() {
    var dateeeDivs = document.querySelectorAll('.date3');

    dateeeDivs.forEach(function(div) {
      div.style.backgroundColor = ' #bdeffd';
    });
  } 
   function changeColor4() {
    var dateeeDivs = document.querySelectorAll('.date4');

    dateeeDivs.forEach(function(div) {
      div.style.backgroundColor = ' #bdeffd';
    });
  }
  function changeColor5() {
    var dateeeDivs = document.querySelectorAll('.date5');

    dateeeDivs.forEach(function(div) {
      div.style.backgroundColor = ' #bdeffd';
    });
  }
  function changeColor6() {
    var dateeeDivs = document.querySelectorAll('.date6');

    dateeeDivs.forEach(function(div) {
      div.style.backgroundColor = ' #bdeffd';
    });
  }
  function changeColor7() {
    var dateeeDivs = document.querySelectorAll('.date7');

    dateeeDivs.forEach(function(div) {
      div.style.backgroundColor = ' #bdeffd';
    });
  }
  function changeColor8() {
    var dateeeDivs = document.querySelectorAll('.date8');

    dateeeDivs.forEach(function(div) {
      div.style.backgroundColor = ' #bdeffd';
    });
  }







  function ROOM1() {
    var dateeeDivs = document.querySelectorAll('.date1');

    dateeeDivs.forEach(function(div) {
      div.style.backgroundColor = ' RED';
    });
  }
 

  function ROOM2() {
    var dateeeDivs = document.querySelectorAll('.date2');

    dateeeDivs.forEach(function(div) {
      div.style.backgroundColor = ' RED';
    });
  }
 
  function ROOM3() {
    var dateeeDivs = document.querySelectorAll('.date3');

    dateeeDivs.forEach(function(div) {
      div.style.backgroundColor = ' RED';
    });
  }

   
  function ROOM4() {
    var dateeeDivs = document.querySelectorAll('.date4');

    dateeeDivs.forEach(function(div) {
      div.style.backgroundColor = ' RED';
    });
  }

  function ROOM5() {
    var dateeeDivs = document.querySelectorAll('.date5');

    dateeeDivs.forEach(function(div) {
      div.style.backgroundColor = ' RED';
    });
  }

  function ROOM6() {
    var dateeeDivs = document.querySelectorAll('.date6');

    dateeeDivs.forEach(function(div) {
      div.style.backgroundColor = ' RED';
    });
  }

  function ROOM7() {
    var dateeeDivs = document.querySelectorAll('.date7');

    dateeeDivs.forEach(function(div) {
      div.style.backgroundColor = ' RED';
    });
  }

  function ROOM8() {
    var dateeeDivs = document.querySelectorAll('.date8');

    dateeeDivs.forEach(function(div) {
      div.style.backgroundColor = ' RED';
    });
  }
 
 
 
 
 

  function CHCO1(){

   
    changeColor1();
    changeColor2();
    changeColor3();
    changeColor4();
    changeColor5();
    changeColor6();
    changeColor7();
    changeColor8();
    ROOM1();
  }


  function CHCO2(){

   
    changeColor1();
    changeColor2();
    changeColor3();
    changeColor4();
    changeColor5();
    changeColor6();
    changeColor7();
    changeColor8();
    ROOM2();
  }

  function CHCO3(){

   
    changeColor1();
    changeColor2();
    changeColor3();
    changeColor4();
    changeColor5();
    changeColor6();
    changeColor7();
    changeColor8();
    ROOM3();
  }

  function CHCO4(){

   
    changeColor1();
    changeColor2();
    changeColor3();
    changeColor4();
    changeColor5();
    changeColor6();
    changeColor7();
    changeColor8();
    ROOM4();
  }

  function CHCO5(){

   
    changeColor1();
    changeColor2();
    changeColor3();
    changeColor4();
    changeColor5();
    changeColor6();
    changeColor7();
    changeColor8();
    ROOM5();
  }

  function CHCO6(){

   
    changeColor1();
    changeColor2();
    changeColor3();
    changeColor4();
    changeColor5();
    changeColor6();
    changeColor7();
    changeColor8();
    ROOM6();
  }

  function CHCO7(){

   
    changeColor1();
    changeColor2();
    changeColor3();
    changeColor4();
    changeColor5();
    changeColor6();
    changeColor7();
    changeColor8();
    ROOM7();
  }

  function CHCO8(){

   
    changeColor1();
    changeColor2();
    changeColor3();
    changeColor4();
    changeColor5();
    changeColor6();
    changeColor7();
    changeColor8();
    ROOM8();
  }
  /* document.addEventListener('DOMContentLoaded', function() {
    var colorButton = document.getElementsByClassName('R1');
    var dateeeDivs = document.getElementsByClassName('dateee');
  
    colorButton.addEventListener('click', function() {
      // Loop through each div with the class 'dateee' and set its background color to red
      for (var i = 0; i < dateeeDivs.length; i++) {
        dateeeDivs[i].style.backgroundColor = 'red';
      }
    });
  });






 Get references to the elements
 const dateeeElement = document.querySelector('.date');
 const romsButton = document.querySelector('.ROMS');

 // Add click event listener to the button
 romsButton.addEventListener('click', function() {
   // Change the background color of the dateee element to blue
   //dateeeElement.style.backgroundColor = 'blue';
   for (var i = 0; i < dateDivs.length; i++) {
    dateDivs[i].style.backgroundColor = 'blue';
  }
 });.*/





  
    