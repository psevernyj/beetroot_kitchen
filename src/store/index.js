import {combineReducers, createStore, applyMiddleware} from "redux";
import {recipeCardReducer} from "./redusers/recipeCardReducer";
import thunk from "redux-thunk";
import {compose} from "redux";
import {randomRecipeReducer} from "./redusers/randomRecipeReducer";
import {chosenFullRecipeReducer} from "./redusers/chosenFullRecipeReducer";
import {reducer as formReducer} from 'redux-form';

const reducers = combineReducers({reciepeCard: recipeCardReducer, randomRecipe: randomRecipeReducer, chosenFullRecipe: chosenFullRecipeReducer, form: formReducer});

const enhanceMiddleware = compose(applyMiddleware(thunk))

export const store = createStore(reducers, enhanceMiddleware)