import React from 'react';

function Heading(props){
return (
    <>
        <h1><span className="heading1">{props.title}</span></h1>
        <h2><span className="heading2">{props.subtitle}</span></h2>
        <h3><span className="heading3">{props.subsubtitle}</span></h3>
    </>
)

}

export default Heading