import React from "react";
import RecipeCard from "../components/RecipeCard";
import {getReciepeCard} from "../store/actions/recipeCardAction";
import '../scss/reciepes/reciepes.scss';
import '../scss/button/button.scss';
import {FormControl, InputGroup} from "react-bootstrap";
import {connect} from "react-redux";
import RecipeTopic from "../components/RecipeTopic";

class Recipes extends React.Component {

    state = {
        inputSearch: null,
    }

    handleInputChange = (e) => {
        this.setState({
            inputSearch: e.target.value
        })

    }

    handleClickInput = () => {
        this.props.getReciepeCard(this.state.inputSearch)
    }
    handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            this.props.getReciepeCard(this.state.inputSearch)
            console.log('do validate');
        }
    }


    render() {

        return (
            <div className={'reciepesContainer'}>
                <div className={'titles'}>
                    <h1>Recipes Journal. Enjoy!</h1>
                    <h3>What's on a menu today?</h3>
                </div>

                <div className={'inputGroup'}>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <button onClick={this.handleClickInput} className="btn draw-border">Search</button>
                        </InputGroup.Prepend>
                        <FormControl onKeyDown={this.handleKeyDown} onChange={this.handleInputChange} value={this.state.inputSearch}
                                     style={{height: '60px'}} aria-describedby="basic-addon1"/>
                    </InputGroup>
                </div>

                {this.props.reciepeCard && this.props.reciepeCard.recipes.meals ? <div className={'reciepesCards'}>
                        {this.props.reciepeCard && this.props.reciepeCard.recipes && this.props.reciepeCard.recipes.meals && this.props.reciepeCard.recipes.meals.map(item =>
                            <RecipeCard
                                meal={item} className={'card'}/>)}
                    </div>
                    :
                    <RecipeTopic/>
                }


            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        reciepeCard: state.reciepeCard
    }
}
const mapDispatchToProps = {
    getReciepeCard
}

export default connect(mapStateToProps, mapDispatchToProps)(Recipes);