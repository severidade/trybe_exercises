import React, { Component } from 'react';
import { connect } from 'react-redux';

class Player extends Component {
  render() {
    return (
      <div className="player">
        <fieldset>
          <legend>Player</legend>
          <h2>{this.props.selectedCategory.name}</h2>
          <h3>{this.props.selectedMovie.title}</h3>
        </fieldset>
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     selectedMovie: state.movieReducer.selectedMovie,
//     selectedCategory: state.movieReducer.selectedCategory,
//     // lembrando que movieReducer traz os dados que estao no reducer.
//   }
// }

const mapStateToProps = (store) => ({
  selectedMovie: store.movieReducer.selectedMovie,
  selectedCategory: store.movieReducer.selectedCategory,
});

// Conecatar ao estado
// essa funcao recebe dois argumentos
// O primeiro e a funcao mapStateToProps
// o segundo e o componente
export default connect(mapStateToProps)(Player)

// export default Player;
