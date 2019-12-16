import React from 'react';


import  logo from '../images/images/Logo.png'

class Header  extends React.Component  {
    state = {
        showNavingationMenu: false
    };
    constructor (props) {
        super(props);
        this.toggleNavigationMenu = this.toggleNavigationMenu.bind(this)
    }
    toggleNavigationMenu  () {
        this.setState({showNavingationMenu: !this.state.showNavingationMenu})
    }
    render () {
        return (
            <div>
                <header className="header">
                    <div className="container">
                        <div className="header__inner">
                            <div className="header__logo"><a href="index.html"><img className="logo__img" src={logo} alt=""/></a></div>

                            <nav className={"nav" + (this.state.showNavingationMenu ? ' active' : '')} id="nav">
                                <a className="nav__link" href="#">Главная</a>
                                <a className="nav__link" href="#">Технология</a>
                                <a className="nav__link" href="#">График полетов</a>
                                <a className="nav__link" href="#">Гарантии</a>
                                <a className="nav__link" href="#">О компании</a>
                                <a className="nav__link" href="#">Контакты</a>
                            </nav>

                            <button onClick={this.toggleNavigationMenu} className={"nav-toggle" +(this.state.showNavingationMenu ? ' active' : '')} id="nav_toggle" type="button">
                                <span className="nav-toggle__item">Menu</span>
                            </button>

                        </div>
                    </div>
                </header>
            </div>
        );
    }

}


export default Header;