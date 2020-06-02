import {DATA_LOADED} from "../actions/recipeCardAction";
import {ERROR_LOADING_DATA} from "../actions/recipeCardAction";
import {LOCATION_CHANGE} from "react-router-redux";

const initStore = {
    recipes: [],
    error: null
};

export const recipeCardReducer = (initialState = initStore, action) => {

    switch (action.type) {
        case DATA_LOADED:
            return {...initialState, recipes: action.payload}
        case ERROR_LOADING_DATA :
            return {...initialState, error: action.payload}
        default:
            return initialState
    }
    // if (action.type === DATA_LOADED) {
    //     return {...initialState, reciepes: action.payload}
    // }
    // if (action.type === ERROR_LOADING_DATA) {
    //     return {...initialState, error: action.payload}
    // }
    // if (action.type === LOCATION_CHANGE){
    //     return {}
    // }
    // return initialState
}