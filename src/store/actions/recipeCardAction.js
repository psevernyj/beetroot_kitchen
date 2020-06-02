export const DATA_LOADED = 'DATA LOADEDD';
export const START_LOADING_DATA = 'START LOADING DATA';
export const ERROR_LOADING_DATA = 'ERROR LOADING DATAD';

const api = 'https://www.themealdb.com/api/json/v1/1/search.php';

export const getReciepeCard = (inputSearch) => {

    return(dispatch) => {
        dispatch({type: START_LOADING_DATA});
        fetch(`${api}?s=${inputSearch}`)
            .then(res => res.json())
            .then(res => {
                dispatch({type:DATA_LOADED, payload: res})
            })
            .catch(err => dispatch({type: ERROR_LOADING_DATA, error: err}))
    }
};





