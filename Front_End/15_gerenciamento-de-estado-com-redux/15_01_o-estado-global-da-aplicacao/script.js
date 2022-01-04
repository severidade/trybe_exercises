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
// console.log(store);
// console.log(store.getState());