import React, {Component} from 'react';

class Exemplo01 extends Component {

  render () {
    const nome = 'Jorge Maravilha';
    const classe = 'hello-class';
    const cumprimento = <h1 className={classe}>Hello, {nome}</h1>;
  
    return (
      <>
        {cumprimento};
      </>
    );
  }
}

export default Exemplo01;
