window.onload = function() {
    
    let n = 30;
    let lado = n * n;
    let symbol = '😀';
    let largura = n * 20;
    
    for (let lineIndex = 0; lineIndex < lado; lineIndex += 1) {
      let li = document.createElement('li'); // crio o elemento li 
      document.getElementById('myItemList').appendChild(li).innerHTML = `${symbol}`;
      document.getElementById("myItemList").style.width = `${largura}px`; // largura é definida pelo número de elementos
    };

};
