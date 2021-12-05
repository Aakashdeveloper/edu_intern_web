import React,{Fragment,Component} from 'react';
import './header.css';

class Header extends Component{
    constructor(props){
        super(props)
        console.log(">>>>inside constructor")
        this.state={
            title:"Developer Funnel",
            keyword:"User Input Here"
        }
    }

    handleChange = (event) => {
       /// console.log(event.target.value)
        this.setState({keyword:event.target.value?event.target.value:"User Input Here"})
        this.props.userInput(event.target.value)
    }


    render(){
        console.log(">>>>inside render")
        return(
            <Fragment>
                <header>
                    <div className="logo">{this.state.title}</div>
                    <center>
                        <input onChange={this.handleChange}/>
                        <div style={{color:'white',fontSize:'20px'}}>{this.state.keyword}</div>
                    </center>
                    <hr/>
                </header>
            </Fragment>
        ) 
    }
}

export default Header