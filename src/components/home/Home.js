import React from 'react';
import Slider from "./Slider";
import About from './About';
import Rooms from './Rooms';
import CustomerFeedback from './CustomerFeedback';

export function Home() {
    return (
        <>
               
            <Slider />

            <About />

            <Rooms />

            <CustomerFeedback />
        </>
       

    );
}




export default Home