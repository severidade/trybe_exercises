import React from 'react';
import './App.css';
import colors from './colorsData';

class App extends React.Component {
  constructor(){
    super();

    this.state ={
      filterInput: '',
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    // toda vez que hover uma mudança no campo input essa função é chamanda
    // console.log(event.target.value);
    // atualiza no constructor o texto que esta sendo digitado dentro do input
    this.setState( { filterInput: event.target.value });
  }

  render() {
    const { filterInput } = this.state;
    return(
      <main>
        <input 
          // onChange={ (event) => { this.handleChange(event) }} 
          onChange = { this.handleChange }
          // {/* pegar o que passa no evento e salvar no estado como props*/}
          value={ filterInput } 
          type="text" 
        />
        
        <ul>
          { colors
            .filter((color) => color.name.includes(filterInput))
            .map((color) => (
            <li key={color.hex} >
              < div style={ {background: color.hex } } className="color-display" />
              { color.name } 
            </li>
          ))}
        </ul>
      </main>
    )
  }
}

export default App;