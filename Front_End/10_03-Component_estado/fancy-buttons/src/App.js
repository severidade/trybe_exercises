import React from 'react';

class App extends React.Component {

  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this);
    // para nossa funçao aceitar o this tem que escrever isso
    // console.log('componente sendo construído')
  }

  handleClick() {
    // console.log(this);
    console.log('Clicou no botão!');
  }

  render() {
    // console.log(this);
    return (<button onClick={this.handleClick}>Botão</button>);
    // return<button>meu botao</button>
  }
}

export default App;
