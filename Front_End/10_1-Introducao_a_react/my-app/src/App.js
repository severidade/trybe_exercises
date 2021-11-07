import React, {Component} from 'react';
import HelloWorld from './component/HelloWorld';
import Heder from './component/Heder';
import './App.css';

class App extends Component {
  
  render () {

    return (
      <>
        <Heder /> 
        <HelloWorld />
      </>
    );
  }
}

export default App;
