window.onload = function() {
    let n = 30;
    let symbol = '😀';
    let inputLine = '';
    
    for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
    //   console.log(inputLine);
      inputLine = inputLine + symbol;
      let li = document.createElement('li');
      document.getElementById('myItemList').appendChild(li).innerHTML = `${inputLine}`;
    };
    
};
