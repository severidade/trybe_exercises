window.onload = function() {
let n = 20;
let symbol = '😀';
let inputLine = '';
let inputPosition = n;

  for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
    for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
      if (columnIndex < inputPosition) {
        inputLine = inputLine + '🙈';
      } else {
        inputLine = inputLine + symbol;
      }
    }
    
    let li = document.createElement('li');
    document.getElementById('myItemList').appendChild(li).innerHTML = `${inputLine}`;

    inputLine = '';
    inputPosition -= 1;
  };
};