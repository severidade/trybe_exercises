window.onload = function() {
    
    let n = 10;
    let symbol = '😀';
    let inputLine = '';
    
    for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
      inputLine = inputLine + symbol;
    };
    for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
    //   console.log(inputLine);
      let li = document.createElement('li');
      document.getElementById('myItemList').appendChild(li).innerHTML = `${inputLine}`;
    };

};
