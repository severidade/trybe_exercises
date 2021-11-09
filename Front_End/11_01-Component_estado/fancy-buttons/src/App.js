import React from 'react';

class App extends React.Component {

  constructor() {
    super()
    this.handleButtonOne = this.handleButtonOne.bind(this);
    this.handleButtonTwo = this.handleButtonTwo.bind(this);
    this.handleButtonThree = this.handleButtonThree.bind(this);

    // para nossa funçao aceitar o this tem que escrever isso
    this.state = {
      cliquesOne: 0,
      cliquestwo: 0,
      cliquesThree: 0,
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

  handleButtonThree() {
    this.setState((estadoAnterior, _props) => ({
      cliquesThree: estadoAnterior.cliquesThree +1,
    }))
  }

  getButtonColor(num) {
    // Essa função contém um ternário que realiza a lógica para mudarmos
    // a cor do botão para verde quando for um número par
    return num % 2 === 0 ? 'green' : 'white';
  }

  render() {
    const { cliquesOne } = this.state;
    // console.log(this);
    // return<button>meu botao</button>
    return (
      <>
        <button 
          onClick={this.handleButtonOne}
          style={{ backgroundColor: this.getButtonColor(cliquesOne) }}
          >Botão Número um <strong>{this.state.cliquesOne}</strong>
        </button>
        <button onClick={this.handleButtonTwo}>Botão Número dois <strong>{this.state.cliquestwo}</strong></button>
        <button onClick={this.handleButtonThree}>Botão Número Três <strong>{this.state.cliquesThree}</strong></button>
      </>
    )
  }
}

export default App;
