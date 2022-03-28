import categories from "../../data/data_filmes";
import { SELECT_MOVIE } from "../actions/movieAction";

const INITIAL_STATE = {
    categories: [...categories],
    selectedMovie: {},
    selectedCategory: {},
};

function movieReducer(state = INITIAL_STATE, action) {
 switch(action.type) {
   case SELECT_MOVIE:
     return {
       ...state,
       selectedMovie:action.movie,
       selectedCategory: action.category,
     }
   default:
    return state;
 }
}

export default movieReducer;