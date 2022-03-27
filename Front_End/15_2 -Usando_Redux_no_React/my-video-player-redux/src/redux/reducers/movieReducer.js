import categories from "../../data/data_filmes";

const INITIAL_STATE = {
    categories: [...categories],
    selectedMovie: {},
    selectedCategory: {},
};

function movieReducer(state = INITIAL_STATE, action) {
 switch(action.type) {
   default:
    return state;
 }
}

export default movieReducer;