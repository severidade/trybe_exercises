import React from 'react';

class App extends React.Component {

  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
    // para nossa funçao aceitar o this tem que escrever isso
    this.state = {
      numeroDeCliques: 0 
    }
  }

  handleClick() {
    // aqui acontece de forma assincrona
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques +1
    }))
  }

  render() {
    // console.log(this);
    return (<button onClick={this.handleClick}>Botão{this.state.numeroDeCliques}</button>)
    // return<button>meu botao</button>
  }
}

export default App;
