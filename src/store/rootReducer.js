import { combineReducers } from "redux";    
import listMovieReducer from "../pages/HomeTemplate/HomePage/duck/reducer";
const rootReducer = combineReducers({
    //child
    listMovieReducer
})


export default rootReducer;