import {DATA_LOADED} from "../actions/chosenFullRecipeAction";
import {ERROR_LOADING_DATA} from "../actions/recipeCardAction";

const initStore = {
    fullRecipe: {},
    error: null
};

export const chosenFullRecipeReducer = (initialState = initStore, action) => {
console.log(action.type, 'actionS')
    switch (action.type) {
        case DATA_LOADED:
            return {...initialState, fullRecipe: action.payload}
        case ERROR_LOADING_DATA :
            return {...initialState, error: action.payload}
        default:
            return initialState
    }
}