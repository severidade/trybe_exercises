// Estado inicial
const ESTADO_INICIAL = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

// 02 ==== Criando o Reducer ====
const reducer = ( state = ESTADO_INICIAL, action) => {
  switch (action.type){
    default:
      return state;
  }
}

// 01 ==== Criando a Store ====
const store = Redux.createStore(reducer);

// Criar o escutador
document.getElementById('next').addEventListener('click', () => {
  alert('clicouNext');
});
document.getElementById('previous').addEventListener('click', () => {
  alert('clicouPrev')
});

// console.log(store);
// console.log(store.getState());