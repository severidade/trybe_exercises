// action type
export const SELECT_MOVIE = 'SELECT_MOVIE';

//action creator
export function movieAction(category, movie) {
  return {
    type: 'SELECT_MOVIE',
    category,
    movie,
  };
}