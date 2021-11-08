import React from 'react';

class App extends React.Component {

  constructor() {
    super()
    this.handleButtonOne = this.handleButtonOne.bind(this);
    this.handleButtonTwo = this.handleButtonTwo.bind(this);

    // para nossa funçao aceitar o this tem que escrever isso
    this.state = {
      cliquesOne: 0,
      cliquestwo: 0,
    }
  }

  handleButtonOne() {
    // aqui acontece de forma assincrona
    this.setState((estadoAnterior, _props) => ({
      cliquesOne: estadoAnterior.cliquesOne +1,
    }))
  }

  handleButtonTwo() {
    this.setState((estadoAnterior, _props) => ({
      cliquestwo: estadoAnterior.cliquestwo +1,
    }))
  }

  render() {
    // console.log(this);
    // return<button>meu botao</button>
    return (
      <>
        <button onClick={this.handleButtonOne}>Botão{this.state.cliquesOne}</button>
        <button onClick={this.handleButtonTwo}>Botão{this.state.cliquestwo}</button>
      </>
    )
  }
}

export default App;
