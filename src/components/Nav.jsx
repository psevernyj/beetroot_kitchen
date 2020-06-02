import React from "react";
import '../scss/mainNav.scss';
import {Link} from "react-router-dom";


function Nav(props) {

    return (
        <div className={'wrapper'}>
            <nav className={'navbar'}>
                <Link className={"nav-link"} to='/'>Main</Link>
                <Link className={"nav-link"} to='/recipes'>Recipes</Link>
                <Link className={"nav-link"} to='/random-meal'>Random meal</Link>
                <Link className={"nav-link"} to='/about'>About us</Link>
            </nav>
        </div>

    )

}

export default Nav;