import React from 'react';
import  Button__img from '../images/images/кнопка1.png';


const Button =() => {
    return (

        <div className="container">
            <div className="button">
                <input className="button__img" type="image" src={Button__img}/>
            </div>
        </div>

    );

}


export default Button;