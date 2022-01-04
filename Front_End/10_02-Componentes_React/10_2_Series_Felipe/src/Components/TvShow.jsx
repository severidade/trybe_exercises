import React from "react";

class TvShow extends React.Component {
    render () {
      const tvShowData = this.props.tvShowData;
      const key = this.props.key;
      // console.log(tvShowData);

      // const data = {
      //   id: 5,
      //   name: "Sex Education",
      //   image: "https://i.imgur.com/SFKFvfg.jpg",
      //   characters: ["Otis", "Eric", "Maeve"],
      //   genre: "Comédia",
      //   info: {
      //     seasons: "3 temporadas",
      //     episodes: 24
      //   }
      // };

      return (
        <article key={key.id}>
          <h2>{tvShowData.name}</h2>
          <img src={tvShowData.image} alt={tvShowData.name} />
          <p>Gênero: {tvShowData.genre}</p>
          <p>Personagens: {tvShowData.characters.map((character) => {
            return <strong> {`${character} |`} </strong>
          })}</p>
        </article>
      )
    }
}

export default TvShow;
