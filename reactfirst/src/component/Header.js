import React,{Fragment,Component} from 'react';
import './header.css';

class Header extends Component{
   render(){
        return(
            <Fragment>
                <header>
                    <div class="logo">Developer Funnel</div>
                    <center>
                        <input/>
                        <div style={{color:'white',fontSize:'20px'}}>User Input Here</div>
                    </center>
                    <hr/>
                </header>
            </Fragment>
        ) 
   }
}

export default Header