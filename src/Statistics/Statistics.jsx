import React from 'react';


const Statistics =() => {
    return (

        <div className="container">
            <div className="statistics__inner">
                <div className="statistics__col">

                    <div className="statistics__item">
                        <div className="statistics__effect1">
                            <div className="statistics__suptitle">мы</div>
                            <div className="statistics__title">1</div>
                            <div className="statistics__subtitle">на рынке</div>
                        </div>
                    </div>

                    <div className="statistics__item">
                        <div className="statistics__effect2">
                            <div className="statistics__suptitle">гарантируем</div>
                            <div className="statistics__title">50%</div>
                            <div className="statistics__subtitle">безопасность</div>
                        </div>
                    </div>

                    <div className="statistics__item">
                        <div className="statistics__effect3">
                            <div className="statistics__suptitle">календарик за</div>
                            <div className="statistics__title">2001<span className="statistics__g">г.</span></div>
                            <div className="statistics__subtitle">в подарок</div>
                        </div>
                    </div>

                    <div className="statistics__item">
                        <div className="statistics__effect4">
                            <div className="statistics__suptitle">путешествие</div>
                            <div className="statistics__title">597</div>
                            <div className="statistics__subtitle">дней</div>
                        </div>
                    </div>

                </div>

            </div>
        </div>

    );

}


export default Statistics;