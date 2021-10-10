let numero = 5;
let simbolo ='*';
let vazio = ' ';
let linha ='';

for (let i = 0; i < numero + 1; i += 1 ) {
  console.log(linha);
  
  let quantosVazio = numero - i;

  linha = linha + simbolo;
}

