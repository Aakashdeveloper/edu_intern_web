import React,{Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import JSON from './db.json'
import ProductDisplay from './ProductDisplay'

class Home extends Component{

    constructor(){
        super()

        this.state={
            products:JSON,
            filtered:JSON
        }
    }

    Wait

    filterProduct = (userText) => {
        const output = this.state.products.filter((data) => {
            return data.name.toLowerCase().indexOf(userText.toLowerCase())>-1
        })
        this.setState({filtered:output})
    }

    render(){
        return(
            <React.Fragment>
                <Header userInput={(data) => {this.filterProduct(data)}}/>
                <ProductDisplay prodData={this.state.filtered}/>
                <Footer year="2021" month="Dec"/>
            </React.Fragment>
        ) 
    }
}

export default Home