import React from 'react';
import {Route, Switch} from "react-router-dom";
import './App.css';
import Nav from "./components/Nav";
import Main from "./containers/Main";
import Footer from "./components/Footer";
import RandomMeal from "./containers/Random";
import Recipes from "./containers/Recipes";
import ChosenFullRecipe from "./containers/ChosenFullRecipe";
import AboutUs from "./containers/AboutUs";


function App() {
    return (
        <>
            <Nav/>
            <Switch>
                <Route path='/' exact component={Main}/>
                <Route path='/recipes' component={Recipes}/>
                <Route path='/random-meal' component={RandomMeal}/>
                <Route path='/full-recipe/:idMeal?' component={ChosenFullRecipe}/>
                <Route path='/about' component={AboutUs}/>
            </Switch>
            <Footer/>
        </>
    );
}

export default App;
