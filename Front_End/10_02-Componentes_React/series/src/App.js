import React, { Component } from "react";
import TvShow from "./Components/TvShow";

import Catalog from "./Data/SeriesData";

import "./App.css";


class App extends Component {
  render() {
    console.log(Catalog);
    return (
      <div>
        <h1>Lista de Séries</h1>
        <section>
          {/* <TvShow name={Catalog[0].name} genre={catalog[0].genre}/> */}
          <TvShow tvShowData={Catalog[0]}/>
        </section>
      </div>
    );
  }
}

export default App;
