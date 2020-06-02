import React from "react";
import FullRecipe from "../components/FullReciepeContent";
import '../scss/button/button.scss';
import '../scss/random/random.scss';
import {connect} from "react-redux";
import {getRandomRecipe} from "../store/actions/randomRecipeAction";

class RandomMeal extends React.Component {

    componentDidMount() {
        this.props.getRandomRecipe()
    }

    handleGetRandomRecipe = () => {
        this.props.getRandomRecipe()
    }

    render() {
        return(
            <div className={'main'}>
                <div className={'titles'}>
                    <button onClick={this.handleGetRandomRecipe} className="btn draw-border">Generate</button>
                </div>
                {this.props.randomRecipe.recipe &&
                this.props.randomRecipe.recipe.meals &&
                this.props.randomRecipe.recipe.meals.map(item => <FullRecipe meal={item}/>)}
            </div>
        )
    }

}
const mapStateToProps = (state) => {
    return {
        randomRecipe: state.randomRecipe
    }
}
const mapDispatchToProps = {
    getRandomRecipe
}


export default connect(mapStateToProps, mapDispatchToProps) (RandomMeal);

