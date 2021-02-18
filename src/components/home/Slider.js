import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import SliderWelcomeText from "./SliderWelcomeText";



function Slider() {
return (
  <>
  <div className="carosouelSlider">
      <Carousel className="carosouelSlider__carosouel ">

        <Carousel.Item className="carosouelSlider__carosouel__carosouelItem">
          <img className="carosouelSlider__carosouel__carosouelItem__sliderImg" src={require('../../images/carosouel1.jpg')} alt="Slider 1 Hotel" />
        </Carousel.Item>

        <Carousel.Item className="carosouelSlider__carosouel__carosouelItem">
          <img className="carosouelSlider__carosouel__carosouelItem__sliderImg" src={require('../../images/carosouel2.jpg')} alt="Slider 2 PoolSide" />
        </Carousel.Item>

        <Carousel.Item className="carosouelSlider__carosouel__carosouelItem">
          <img className="carosouelSlider__carosouel__carosouelItem__sliderImg" src={require('../../images/carosouel3.jpg')} alt="Slider 3 SunBath" />
        </Carousel.Item>

        <Carousel.Item className="carosouelSlider__carosouel__carosouelItem">
          <img className="carosouelSlider__carosouel__carosouelItem__sliderImg" src={require('../../images/carosouel4.jpg')} alt="Slider 4 SwimmingPool" />
        </Carousel.Item>

      </Carousel>
  
      <div className="carosouelSlider__welcomeText">
            <SliderWelcomeText />
      </div> 
  </div>

    <div className="smallScreenImg">
      <img className="smallScreenImg__img" src={require('../../images/carosouel1.jpg')} alt="Slider 1 Hotel" />

      <div className="smallScreenImg__welcomeText">
          <SliderWelcomeText />
      </div> 

    </div>

    </>
 
)

}

export default Slider