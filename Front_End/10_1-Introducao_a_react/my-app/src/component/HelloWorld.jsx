import React, {Component} from 'react';

class HelloWorld extends Component {
  
  render () {
    const element = (
      <h1 className="ola">Hello World!</h1>
    )

    const currentLearning = (subject) => {
      return (
        <h2>Estou aprendendo sobre {subject} </h2>
      )
    }

    const arrayComidas = ["🥧", "🍪", "🍰"]
    return (
      <>
        {element}
        <p>Este é o meu primeiro parágrafo</p>
        {currentLearning("ReactJS")}

        <ul>
          {arrayComidas.map((food) => {
            return <li key={food}>{food}</li>
          })}
        </ul>
      </>
    );
  }
}

export default HelloWorld;
