import React, { Component } from 'react';
import { connect } from 'react-redux';

// import categories from '../data/data_filmes';

class Sidebar extends Component {
  render() {
    const { categories } = this.props;

    return (
      <aside>
      <fieldset>
        <legend>
          {'< '}
          Sidebar
          {' >'}
        </legend>
        {categories.map((category) => (
          <div key={category.id}>
            <h3>{category.name}</h3>
            <ul>
              {category.movies.map((movie) => (
                <li key={movie.id}>
                  {movie.title} was released in {movie.released}
                  <button
                    type="button"
                  >
                    Assistir
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </fieldset>
    </aside>
    );
  }
}

const mapStateToProps = (store) => ({
  categories: store.movieReducer.categories,
});

export default connect(mapStateToProps)(Sidebar);
