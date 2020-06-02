import React from "react";
import salat from '../images/salat.jpg';
import salat1 from '../images/salat1.jpg';
import salat2 from '../images/salat2.jpg';
import salat3 from '../images/salat3.jpg';


import Carousel from "react-bootstrap/Carousel";

function MainContent() {
    const [index, setIndex] = React.useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };


    return(
        <div>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className={"d-block w-100 carousel"}
                        src={salat}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className={"d-block w-100 carousel"}
                        src={salat1}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className={"d-block w-100 carousel"}
                        src={salat2}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className={"d-block w-100 carousel"}
                        src={salat3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )

}

export default MainContent;