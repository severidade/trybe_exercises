import React, { Component } from 'react';

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composição de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composição de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
]

class Content extends Component {
  render() {
    return (
      <>
        {conteudos.map((elemento) => {
        return <div>
            <h4>{`O conteudo é: ${elemento.conteudo}`}</h4>
            <p>{`status: ${elemento.status}`}</p>
            <p>{`O Bloco: ${elemento.bloco}`}</p>
          </div>
        })}
      </>
    );
  }
}

export default Content;
// obs: O nome do componente precisa sempre vir em maúscula