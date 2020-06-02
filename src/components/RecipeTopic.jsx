import React from "react";
import '../scss/reciepes/reciepes.scss';
import one from '../images/coockingTopic/aesthetic_1.jpg';
import two from '../images/coockingTopic/aesthetic_2.jpg';
import three from '../images/coockingTopic/aesthetic_3.jpg';
import four from '../images/coockingTopic/aesthetic_4.jpg';
import five from '../images/coockingTopic/aesthetic_5.jpg';
import six from '../images/coockingTopic/aesthetic_6.jpg';

class RecipeTopic extends React.Component {

    render() {
        return (
            <div>
                <div className={'coockingTopic'}>
                    <div className={'item'}>
                        <p className={'paragraph'}>
                            <img  src={one}/>
                            When we cook, we boil, roast, fry or stew our food. We boil eggs, meat, chicken,
                            fish, milk, water and vegetables. We fry eggs, fish and vegetables.
                            We stew fish, meat, vegetables or fruit. We roast meat or chicken.
                            We put salt, sugar, pepper, vinegar and mustard into our food to make it salted,
                            sweet, sour or simply tasty. Our food may taste good or bad or it may be tasteless.
                        </p>
                    </div>

                    <div className={'item'}>
                        <p className={'paragraph'}>
                            <img src={two}/>
                            The usual meals in England are breakfast,
                            lunch, tea and dinner or, in simpler houses,
                            breakfast, dinner, tea and supper.

                        </p>

                    </div>
                    <div className={'item'}>
                        <p className={'paragraph'}>
                            <img src={three}/>
                            For breakfast English people mostly have porridge
                            or corn-flakes with milk or cream and sugar, bacon
                            and eggs, marmalade with buttered toast and tea or coffee.
                            For a change they can have a boiled egg, cold ham, or fish.

                        </p>

                    </div>

                    <div className={'item'}>
                        <p className={'paragraph'}>
                            <img src={four}/>
                            English people generally have lunch about one o'clock.
                            At lunch time in a London restaurant one usually finds
                            a mutton chop, or steak and chips, or cold meat or fish
                            with potatoes and salad, then a pudding or fruit to follow.

                        </p>

                    </div>
                    {/*<div className={'item'}>*/}

                    {/*    <p className={'paragraph'}>*/}
                    {/*        <img src={five}/>*/}
                    {/*        Afternoon tea can hardly be called a meal.*/}
                    {/*        It is a substantial meal only in well-to-do families.*/}
                    {/*        It is between five and six o'clock. It is rather a sociable sort of thing,*/}
                    {/*        as friends often come in then for a chat while they have their cup of tea, cake or biscuit.*/}
                    {/*    </p>*/}
                    {/*</div>*/}
                    {/*<div className={'item'}>*/}

                    {/*    <p className={'paragraph'}>*/}
                    {/*        <img src={six}/>*/}
                    {/*        In some houses dinner is the biggest meal of the day. But in great many*/}
                    {/*        English homes, the midday meal is the chief one of the day, and in the*/}
                    {/*        evening there is usually a much simpler supper — an omelette, or sausages,*/}
                    {/*        sometimes bacon and eggs and sometimes just bread and cheese, a cup of coffee*/}
                    {/*        or cocoa and fruit.*/}
                    {/*    </p>*/}
                    {/*</div>*/}

                </div>
            </div>
        );
    }
}

export default RecipeTopic;