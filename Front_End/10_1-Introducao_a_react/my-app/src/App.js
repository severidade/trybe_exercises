import React, {Component} from 'react';
import HelloWorld from './component/HelloWorld';
import Heder from './component/Heder';
import Exemplo01 from './component/Exemplo01';
import Componente01 from './component/Componente01.jsx';

import './App.css';

class App extends Component {
  
  render () {

    return (
      <>
        <Heder /> 
        <HelloWorld />
        <hr></hr>
        <Exemplo01 />
        <Componente01 />
      </>
    );
  }
}

export default App;
