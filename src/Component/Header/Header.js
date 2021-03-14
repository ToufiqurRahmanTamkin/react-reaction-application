import React from 'react';
// import Logo from '../../images/logo.png';
import Logo from '../../images/reactLogoNav.png'
// import bannerImage from '../../images/reactLogoNav.png'
import './Header.css';
const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <nav className="navbar">
                    {/* <img className="bannerImagebg" src={bannerImage} alt="banner"/> */}
                    <img className="navbar__img" src={Logo} alt="Reactia" />
                </nav>
            </div>
        </header>
    );
};

export default Header;