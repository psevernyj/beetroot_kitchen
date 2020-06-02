import React from "react";
import FullRecipe from "../components/FullReciepeContent";
import '../scss/random/random.scss';
import {connect} from "react-redux";
import {getChosenFullRecipe} from "../store/actions/chosenFullRecipeAction";


class ChosenFullRecipe extends React.Component {

    componentDidMount() {
        const idMeal = this.props.match.params.idMeal;
        this.props.getChosenFullRecipe(idMeal)
    }

    render() {
        return (
            <div className={'main'}>
                {this.props.chosenFullRecipe &&
                this.props.chosenFullRecipe.fullRecipe.meals &&
                this.props.chosenFullRecipe.fullRecipe.meals.map(item => <FullRecipe meal={item}/>)}
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    console.log(state, 'State')
    return {
        chosenFullRecipe: state.chosenFullRecipe
    }
}
const mapDispatchToProps = {
    getChosenFullRecipe
}


export default connect(mapStateToProps, mapDispatchToProps)(ChosenFullRecipe);