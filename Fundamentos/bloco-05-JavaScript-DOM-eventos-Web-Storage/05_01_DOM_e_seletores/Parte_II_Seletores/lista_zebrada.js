function listaZebrada( alvo, color) {
        
  let itensSelecionados = document.querySelectorAll(alvo);

  for (let index = 0; index < alvo.length; index +=2) {
    itensSelecionados[index].style.backgroundColor = color;
  }

}

listaZebrada('.lista_zebada li', '#2196f3');