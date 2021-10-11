let clickP = document.getElementById('clicar');

clickP.addEventListener("click", recebeClick);

// reaproveitando as funcoes do exemplo 02
clickP.addEventListener('mouseover', entra);
clickP.addEventListener('mouseleave', sai);

function recebeClick (evento){
  console.log(evento.target);
  console.log(evento.type);
}

// Exmeplo 02

let saiEntra = document.getElementById('mouse-hover-leave');

saiEntra.addEventListener('mouseover', entra);
saiEntra.addEventListener('mouseleave', sai)

function entra (euSou){
  console.log(euSou.target);
  console.log('mouse passou por cima');
}

function sai(euSou){
  console.log(euSou.target);
  console.log('mouse saiu');
}