import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

const Header = () => {
    return(
        <>
        <div id="header">
                <div id="brand">
                    <Link to="/">EduMato</Link>
                </div>
                <div className="social">
                    <a href="www.facebook.com">
                        <img src="https://i.ibb.co/wyH9JxS/facebook.png" className="socialIcon"/>
                    </a>
                    <a href="www.instagram.com">
                        <img src="https://i.ibb.co/w0kZ5Hf/insta.png" className="socialIcon"/>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Header;