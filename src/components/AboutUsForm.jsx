import React from "react";
import '../scss/button/button.scss';
import {Field, reduxForm} from 'redux-form';
import '../scss/aboutUs.scss';


const UserForm = (props) => {
    return(
        <>
            <form className={'generalForm'}>
                <div className={"form__group field"}>
                    <label htmlFor="email" className={"form__label"}>Email</label>
                    <Field className={'form__field'} component={'input'} name={'email'} placeholder={'Email'}/>
                </div>
                <div className={"form__group field"}>
                    <label htmlFor="name" className={"form__label"}>Name</label>
                    <Field className={'form__field'} component={'input'} name={'name'} placeholder={'Name'}/>
                </div>
                <div className={"form__group field"}>
                    <label htmlFor="message" className={"form__label"}>Message</label>
                    <Field className={'form__field'} component={'textarea'} name={'message'} placeholder={'Your message'}/>
                </div>
                <div>
                    <button className="btn draw-border">Send</button>
                </div>

            </form>
        </>
    )
}

export default UserForm;