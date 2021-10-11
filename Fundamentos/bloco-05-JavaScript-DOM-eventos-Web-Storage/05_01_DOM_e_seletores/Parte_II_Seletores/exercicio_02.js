// Exercicio_02
// Utilizando o mesmo template de exercício anterior:
// 01 Adicione uma classe igual para os dois parágrafos.

  // e preciso lembrar que a propriedade getElements getElementsByTagName retorna uma lista
  // se nao idicar a posicao ele nao fazz nada

  document.getElementsByTagName('p')[0].style.Color = "tomato";

  // resolvendo a questão
  let meusParagrafos = document.getElementsByTagName('p');
  for (let i = 0; i < meusParagrafos.length; i += 1) {
    document.getElementsByTagName('p')[i].classList.add('border_blue');
  }

// 02 Recupere os seus parágrafos via código JavaScript , usando a função getElementsByClassName ;
// 03 Altere algum estilo do primeiro deles.

  document.getElementsByClassName('super')[0].classList.add('magnifico');

// 04 Recupere o subtítulo e altere a cor dele usando a função getElementsByTagName . -->

document.getElementsByTagName('h4')[0].style.textAlign = "center";

let paragraphs = document.querySelectorAll("p");

for (let i = 0; i < meusParagrafos.length; i += 1) {
  document.querySelectorAll('p')[i].style.textAlign = "center";
}