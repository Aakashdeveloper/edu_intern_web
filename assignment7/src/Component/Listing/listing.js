import React,{Component} from 'react';
import './listing.css';
import ListingDisplay from './listingDisplay';
import axios from 'axios';

const url = "https://xomato.herokuapp.com/filter";

class Listing extends Component {
    constructor(props) {
        super(props);

        this.state={
            restList:''
        }
    }

    render(){
        return(
            <>
            <p class="heading">Listing Page</p>
            <div id="main">
                <div class="filter">
                    <center><h3>Filters</h3></center>
                </div>
                <div class="content">
                   <ListingDisplay restData={this.state.restList}/>
                </div>
            </div>
            </>
        )
    }

    componentDidMount(){
        const mealId = this.props.match.params.id;
        axios.get(`${url}/${mealId}`)
        .then((res) => {
            this.setState({restList:res.data})
        })
    }
}

export default Listing