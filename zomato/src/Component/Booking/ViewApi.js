import React,{Component} from 'react';
import axios from 'axios';
import ViewDisplay from './viewDisplay'

const url = "https://xomato.herokuapp.com/orders";

class ViewApi extends Component{
    constructor(props){
        super(props);

        this.state={
            orders:''
        }
    }

    render(){
        return(
            <ViewDisplay bookData={this.state.orders}/>
        )
    }

    componentDidMount(){
        axios.get(url).then((res) => {this.setState({orders:res.data})})
    }
}


export default ViewApi