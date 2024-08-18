document.querySelector('div').addEventListener('click', function() {
    alert('Hola! Soy el div');
});


const miBoton = document.getElementById('miBoton');
const miDiv = document.getElementById('miDiv');


miBoton.addEventListener('click', function(event) {
  event.stopPropagation(); 
});



  