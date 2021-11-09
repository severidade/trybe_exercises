import React from "react";
import colorsData from "./colorsData"
import ImageColor from './components/ImageColor'
import image from './trybe.png'
import "./App.css";

// 1. Listar as cores - ok
// 2. Quadradinho de cor do lado do nome da cor - ok
// 3. Criar um input - ok
// 4. Filtrar as cores - 
// 5. Adicionar foto e fazer ela mudar de cor de acordo com a primeira cor da lista

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      typedText: ""
    }
    this.digitando = this.digitando.bind(this);
    this.corSelecionada = this.corSelecionada.bind(this);
    // se eu nao coloco isso ele nao reconehce a funcao em linha 21
  }

  digitando (event) {
    console.log(event.target.value)
    // para atulaizar o estado usar this.setState se  fosse um botao podia ser PreviusState
    this.setState({
      typedText: event.target.value
    })
  }

  corSelecionada (){
    if(this.state.typedText === "") return "#000"

    const color = colorsData.find((color) => {
      return color.name.includes(this.state.typedText)
    })

    if (color) {
      return color.hex
    }

    return "#000"

  }

  render() {
    return (
      <div>
        <h1>Color Filter App</h1>
        <input type="text" value= {this.state.typedText} onChange={this.digitando}/>

        <div className="conteinerImage">
          <figure style={{backgroundColor: this.corSelecionada()}}> 
            <img src={image} alt="logo"/>
          </figure>

          <ImageColor imageColor={this.corSelecionada()} nameColor={this.state.typedText}/>
        </div>

        <ul>
          {colorsData
          .filter((color) => color.name.includes(this.state.typedText.toLowerCase()))
          .map((color) => ( 
            <li key={color.hex}>
              <div className="display_color" style={{backgroundColor:color.hex}}></div>
              {color.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
