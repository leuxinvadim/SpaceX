import React from 'react';
import Header from '../Header/Header';
import Statistics from '../Statistics/Statistics';
import Travel from '../Travel/Travel';
import Button from '../Button/Button';
import Line from '../Line/Line';


const Intro =() => {
    return (
        <div className="intro">
            <Header />
            <Travel />
            <Button />
            <Line />
            <Statistics />

        </div>
    );

}


export default Intro;