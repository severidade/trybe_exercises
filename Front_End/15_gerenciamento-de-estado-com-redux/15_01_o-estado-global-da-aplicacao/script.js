const ESTADO_INICIAL = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

// 02 ==== Criando o Reducer ====
const reducer = ( state = ESTADO_INICIAL, action) => {
  switch (action.type){
    // 03 ==== Actions NEXT_COLOR e PREVIOUS_COLOR  ====
    case 'NEXT_COLOR':
      return {
        ...state,
        index: state.index === state.colors.length - 1 ? 0 : state.index + 1,
      };
    case 'PRIVIOUS_COLOR':
      return {
        ...state,
        index: state.index === state.colors.length -1 ? 0 : state.index - 1,
      };
    default:
      return state;
  }

}


// 01 ==== Criando a Store ====
const store = Redux.createStore(reducer);

//04 == Criando eventListeners
document.getElementById('next').addEventListener('click', () => {
  store.dispatch({ type: 'NEXT_COLOR' });
});
document.getElementById('previous').addEventListener('click', () => {
  store.dispatch({ type: 'PRIVIOUS_COLOR' });
});