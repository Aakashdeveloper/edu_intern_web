import React from 'react';

const Footer = () => {
    return(
        <div style={{width:'100%',display:'inline-block'}}>
            <hr/>
            <center>
                <h3>&copy; Developer Funnel</h3>
                <a href="www.facebook.com">
                        <img src="https://i.ibb.co/wyH9JxS/facebook.png" className="socialIcon"/>
                </a>
                <a href="www.instagram.com">
                        <img src="https://i.ibb.co/w0kZ5Hf/insta.png" className="socialIcon"/>
                </a>
            </center>
        </div>
    )
}

export default Footer;