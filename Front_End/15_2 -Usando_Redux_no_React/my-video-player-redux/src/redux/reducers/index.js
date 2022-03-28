import { combineReducers } from "redux";
import movieReducer from "./movieReducer";

const rootReducer = combineReducers( {movieReducer} );

export default rootReducer;

// sou responsavel po receber a action, processar as informacoes e enviar para a store