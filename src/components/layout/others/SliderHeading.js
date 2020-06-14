import React from 'react';

function SliderHeading(props){
return (
    <>
        <h1><span className="sliderHeading1">{props.title}</span></h1>
        <h2><span className="sliderHeading2">{props.subtitle}</span></h2>
    </>
)

}

export default SliderHeading