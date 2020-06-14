import React from 'react';
import Heading from "../layout/Heading";
import Paragraph from "../layout/Paragraph";

function ServicesText() {
    return(
       
                    <div className="hotelServices">
                
                        <div className="hotelServices__heading">
                            <Heading subtitle="Activities in Holidaze" />
                        </div>
                
                        <div className="hotelServices__paragraph">
                            <Paragraph>
                            At Holidaze, there are many activities to enjoy and relax. These activities as take bath/swim in open waters and/or swimming pool. After enjoying water, to relax in sun or go to spa for body massage, even order lunch on the pool-site.
                            </Paragraph>
                        </div>
                    </div>
                   
    )
}

export default ServicesText