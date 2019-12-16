import React from 'react';
import  travel__img from '../images/images/Путешествие.png';

const Travel =() => {
    return (

            <div className="container">
                <div className="travel"><img src={travel__img} alt=""/></div>
                <div className="travel2">Путешествие на красную планету</div>
            </div>

    );

}


export default Travel;