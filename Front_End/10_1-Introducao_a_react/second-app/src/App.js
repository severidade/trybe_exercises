import React from 'react';
import Header from './component/Header';
import ListadeTarefas from './component/ListadeTarefas';
import Content from './component/Content';
import Footer from './component/Footer';
import './App.css';

class App extends React.Component {

  render() {
    return (
      <>
        <Header />
        <ListadeTarefas />
        <Content />
        <Footer />
      </>
    );
  }
}

export default App;
