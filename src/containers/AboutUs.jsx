import React from "react";
import UserForm from "../components/AboutUsForm";
import {reducer as formReducer, reduxForm} from 'redux-form';
import '../scss/aboutUs.scss';

class AboutUs extends React.Component {
    render() {
        return (
            <div className={'wrapperAboutUs'}>

                <div className={'mainContent'}>
                    <div className={'testForm'}>
                        <LoginReduxForm/>
                    </div>

                    <div className="l-container">
                        <div className="b-game-card">
                            <div className="b-game-card__cover"
                                 style={{backgroundImage: 'url(https://i.pinimg.com/564x/d6/0a/4f/d60a4f617ab5036d6ba2b8cc5a9bdc71.jpg)'}}>
                            </div>
                        </div>
                        <div className="b-game-card">
                            <div className="b-game-card__cover"
                                 style={{backgroundImage: 'url(https://i.pinimg.com/564x/97/ad/be/97adbe2e420f07a84806c6d268be648a.jpg)'}}>
                            </div>
                        </div>
                        <div className="b-game-card">
                            <div className="b-game-card__cover"
                                 style={{backgroundImage: 'url(https://i.pinimg.com/564x/a3/6f/9c/a36f9c4a976e6c22dffffa532e8baca8.jpg)'}}>
                            </div>
                        </div>
                        <div className="b-game-card">
                            <div className="b-game-card__cover"
                                 style={{backgroundImage: 'url(https://i.pinimg.com/564x/5c/41/33/5c4133e5767087cfc0ebf975eca97457.jpg)'}}>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'bottomInfo'}>
                    <p>Subscriptions are a critical part of many newsroom business models.
                        Newsrooms are using a variety of strategies to find new subscribers,
                        from advertising via email to using sponsored posts on social media.
                        But what works and what doesn’t?</p>
                    <p>The purpose of this report is to provide data on several possible strategies.
                        This research was funded by the American Press Institute and involved two steps.
                        We first conducted in-depth interviews with staff from six news organizations with strong
                        reputations for securing donations or subscriptions. Informed by these conversations,
                        we then conducted experiments in collaboration with three U.S. newsrooms:
                        one mid-sized local newspaper in the southwest, one small regional news
                        magazine in the west, and one large local newspaper in the southwest.</p>
                </div>

            </div>
        )
    }

}

const LoginReduxForm = reduxForm({
    form: 'aboutUs'
})(UserForm)
export default AboutUs