import React from "react";

class TvShow extends React.Component {
    render () {
      const tvShowData = this.props.tvShowData;
      console.log(tvShowData);

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
        <article>
          <h2>{tvShowData.name}</h2>
          <img src={data.image} alt={data.name} />
          <p>Gênero: {data.genre}</p>
          <p>Personagens: {data.characters.map((character) => {
            return <strong> {`${character} |`} </strong>
          })}</p>
        </article>
      )
    }
}

export default TvShow;
