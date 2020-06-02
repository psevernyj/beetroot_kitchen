import React from "react";
import '../scss/random/random.scss';
import YouTube from 'react-youtube';

function FullRecipe({meal}) {


    const ingredientsArray = []
    const ingredients = [];
    const measures = [];

    for (let [key, value] of Object.entries(meal)) {
        if (key.search('strIngredient') >= 0 && value) {
            ingredients.push(value)
        }
        if (key.search('strMeasure') >= 0 && value) {
            measures.push(value)
        }
    }

    for (let i = 0; i < ingredients.length; i++) {
        ingredientsArray.push(ingredients[i] + (measures[i] ? ' - ' + measures[i] : ''))
    }

    const opts = {
        // height: '390',
        // width: '640',
        // position: "absolute",
        // top: 0,
        // left: 0,
        // width: "100%",
        // height: "100%",
        playerVars: {
            autoplay: 0,
        },

    };

    const videoID = meal.strYoutube.split('v=')[1];


    return (
        <div className={'generalContainer'}>
            <div className={'generalTitle'}>
                <h1 className={'title'}>{meal.strMeal}</h1>
                <div className={'addl'}>
                    <p>Category: {meal.strCategory}</p>
                    <p>Area: {meal.strArea}</p>
                </div>
            </div>

            <div className={'ingridients'}>
                <img className={'pictureOfDish'} src={meal.strMealThumb}/>
                <div>
                    <h3>What need:</h3>
                    <ol>
                        {ingredientsArray.map(item => <li>{item}</li>)}
                    </ol>
                </div>
            </div>


            <div className={'block'}>
                <div className={'instructions'}>
                    <h4>Procedure:</h4>
                    <p> {meal.strInstructions}</p>
                </div>
                <div  className={'playerWrapper'}>
                    <YouTube className={'reactPlayer'} videoId={videoID} opts={opts}/>
                </div>
            </div>
        </div>
    )
}

export default FullRecipe;