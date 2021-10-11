document.getElementById('header-container').style.backgroundColor = "#00b069";
document.getElementsByClassName('emergency-tasks')[0].style.backgroundColor = "#ff9f84";
document.querySelectorAll('.no-emergency-tasks')[0].style.backgroundColor = "#f9db5e";

// testa seletor css 
// a[href*="tableless"] Seleciona todo elemento <a> que tem um atributo href com o valor contém "tableless"

let todasSecoes = document.querySelectorAll('section[class*="emergency"]');
for (let i = 0; i < todasSecoes.length; i += 1) {
  document.querySelectorAll('section[class*="emergency"]')[i].classList.add('border_blue');
}

let emergency = document.querySelectorAll('.emergency-tasks h3');
for (let i = 0; i < emergency.length; i += 1) {
  // document.querySelectorAll('section[class*="emergency"]')[i].classList.add('border_blue');
  document.querySelectorAll('.emergency-tasks h3')[i].style.backgroundColor = "#a500f3";
}

const noEmergency = document.querySelectorAll('.no-emergency-tasks h3');
for (let i = 0; i < noEmergency.length; i += 1) {
  document.querySelectorAll('.no-emergency-tasks h3')[i].style.backgroundColor = "black";
  
}
