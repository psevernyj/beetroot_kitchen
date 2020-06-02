export const DATA_LOADED = 'CHOOSEN RECIPE DATA LOADED';
export const START_LOADING_DATA = 'CHOOSEN RECIPE START LOADING DATA';
export const ERROR_LOADING_DATA = ' CHOOSEN RECIPE ERROR LOADING DATA';

const api = 'https://www.themealdb.com/api/json/v1/1/lookup.php';

export const getChosenFullRecipe = (idMeal) => {

    console.log(idMeal)
    return(dispatch) => {
        dispatch({type: START_LOADING_DATA});
        fetch(`${api}?i=${idMeal}`)
            .then(res => res.json())
            .then(res => {
                 console.log(res , 'WTF')
                dispatch({type:DATA_LOADED, payload: res})
            })
            .catch(err => dispatch({type: ERROR_LOADING_DATA, error: err}))
    }
};