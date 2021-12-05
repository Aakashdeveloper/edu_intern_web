import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

const Header = () => {
    return(
        <>
        <div id="header">
                <div id="brand">
                    <span>EduMato</span>
                </div>
                <div className="social">
                    <a href="www.facebook.com">
                        <img src="images/facebook.png" className="socialIcon"/>
                    </a>
                    <a href="www.instagram.com">
                        <img src="images/insta.png" className="socialIcon"/>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Header;