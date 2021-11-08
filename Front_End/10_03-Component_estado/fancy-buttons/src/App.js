    // src/App.js
    import React from 'react';

    class App extends React.Component {

      handleClick() {
        console.log('Clicou no botão!');
      }

      render() {
        // console.log(this);
        return (<button onClick={ this.handleClick }>Botão</button>);
        // return<button>meu botao</button>
      }
    }

    export default App;