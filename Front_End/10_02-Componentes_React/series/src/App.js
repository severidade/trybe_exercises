import React, { Component } from "react";
import TvShowList from "./Components/TvShowList";
import "./App.css";


class App extends Component {
  render() {
    return (
      <div>
        <h1>Lista de Séries</h1>
        <TvShowList />
      </div>
    );
  }
}

export default App;
