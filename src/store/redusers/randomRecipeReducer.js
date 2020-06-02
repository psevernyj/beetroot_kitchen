import {DATA_LOADED} from "../actions/randomRecipeAction";
import {ERROR_LOADING_DATA} from "../actions/randomRecipeAction";

const initStore = {
    recipe: {},
    error: null
};

export const randomRecipeReducer = (initialState = initStore, action) => {
// console.log(action, 'action')
    switch (action.type) {
        case DATA_LOADED:
            return {...initialState, recipe: action.payload}
        case ERROR_LOADING_DATA :
            return {...initialState, error: action.payload}
        default:
            return initialState
    }
}