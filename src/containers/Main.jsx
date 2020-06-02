import React from "react";
import MainContent from "../components/MainContent";
import '../scss/main/main.scss';
import generalPic from '../images/cover.png';

class Main extends React.Component{

    render() {
        return(
            <div className={'main_container'}>
                <div className={'logo'}>
                    <img className={'general_logo'} src={generalPic} alt={''}/>
                    <h4 className={'general_quote'}>Eat at pleasure, drink with measure.</h4>
                </div>
                <div className={'gallary'}>
                    <MainContent/>
                </div>
            </div>
        )
    }
}

export default Main;