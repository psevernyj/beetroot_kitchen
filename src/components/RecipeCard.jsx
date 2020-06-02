import React from "react";
import {Card} from "react-bootstrap";
import '../scss/button/button.scss'
import {NavLink} from "react-router-dom";

function RecipeCard({meal}) {

    return (
        <div key={meal.idMeal}>
            <Card className="b-game-card" style={{ width: '20rem', height: '40rem', backgroundColor: '#C5D0CC', color: '#5f5f5a' }} >
                <div className="b-game-card__cover">
                    <Card.Img src={meal.strMealThumb} />
                    <Card.Body>
                        <Card.Title><p className={'reciepeTitle'}>Name of Reciepe:</p><h3 className={'reciepeName'}>{meal.strMeal}</h3></Card.Title>
                        <Card.Title><p className={'reciepeTitle'}>Category:</p> <h4 className={'reciepeName'}>{meal.strCategory}</h4> </Card.Title>
                        {/*<Card.Text>*/}
                        {/*    Join preview? Hit button for Details..*/}
                        {/*</Card.Text>*/}
                        <NavLink to={'/full-recipe/' + meal.idMeal}>
                            <button className="btn draw-border">Full receipe</button>
                        </NavLink>
                    </Card.Body>
                </div>


            </Card>
        </div>
    )

}

export default RecipeCard;