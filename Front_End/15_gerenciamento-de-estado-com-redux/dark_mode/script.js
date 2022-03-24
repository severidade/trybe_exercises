// I INICIALIZAR O ESTADO
// Definir o estado da aplicação
const INITIAL_STATE = {
  theme: 'light'
}

// Definir as mudanças do estado 
// =========== Actions ===========
// devolver um objeto {type: CHANGE_THEME'}
// ACTION CREATOR
function changeTheme() {
  return { type: 'CHANGE_THEME'}
}

// Definir o que as Actions vão mudar no estado
// =========== Reducer ===========
function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'CHANGE_THEME':
      return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' }
    default:
      return state;
  }
}

// II LIDANDO COM ESTADO
// ter em mãos o gerenciador do estado
// =========== Store ===========
const store = Redux.createStore(reducer);
// DÚVIDA aqui entra como segundo parâmetro a linha que faz as coisas aparecerem no navegador

// Definir o que vai mudar na aplicação de acordo com a mudança no store
// =========== Subscribe ===========
store.subscribe(()=>{
  const wrapper = document.getElementById('wrapper');
  const state = store.getState();
  wrapper.className = state.theme;
})

// III ALTERAR O ESTADO
// =========== Dispatch ===========
const buttonEl = document.getElementById('light-switch');
buttonEl.addEventListener('click', () => {
  store.dispatch( changeTheme() );
});
