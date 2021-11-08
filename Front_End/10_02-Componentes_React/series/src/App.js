import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    const data = {
      id: 5,
      name: "Sex Education",
      image: "https://i.imgur.com/SFKFvfg.jpg",
      characters: ["Otis", "Eric", "Maeve"],
      genre: "Comédia",
      info: {
        seasons: "3 temporadas",
        episodes: 24
      }
    };

    return (
      <div>
        <h1>Lista de Séries</h1>
        <section>

          <article>
            <h2>{data.name}</h2>
            <img src={data.image} alt={data.name} />
            <p>Gênero: {data.genre}</p>
            <p>Personagens: {data.characters.map((character) => {
              return <strong> {`${character} |`} </strong>
            })}</p>
          </article>

        </section>
      </div>
    );
  }
}

export default App;
