import React,{Component} from 'react';
import './Search.css';

const locationUrl = "https://xomato.herokuapp.com/location";
const restUrl = "https://xomato.herokuapp.com/restaurants?city="

class Search extends Component {
    constructor(props) {
        super(props);
        console.log(">>>inside constructor");
        this.state={
            locations:'',
            restaurants:''
        }
    }

    renderCity = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option key={item.location_id} value={item.state_id}>
                        {item.state}
                    </option>
                )
            })
        }
    }

    renderRestaurants = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option key={item.restaurant_id} value={item.restaurant_id}>
                        {item.restaurant_name} | {item.address}
                    </option>
                )
            })
        }
    }

    handleRest = (event) => {
        console.log(event.target.value)
        fetch(`${restUrl}${event.target.value}`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({restaurants:data})
        })
    }

    render(){
        console.log(">>>inside render",this.state);
        return(
            <div id="search">
                    <div id="logo">
                        <span>e!</span>
                    </div>
                    <div id="heading">
                        Find Thé Bešt Plače Nêär Yoü
                    </div>
                    <div id="dropdown">
                        <select onChange={this.handleRest}>
                            <option>-------SELECT CITY-----</option>
                            {this.renderCity(this.state.locations)}
                        </select>
                        <select className="restDrop">
                            <option>-------SELECT RESTAURANTS-----</option>
                            {this.renderRestaurants(this.state.restaurants)}
                        </select>
                    </div>
            </div>
        )
    }

    //on page load call api method  
    componentDidMount(){
        console.log(">>>inside componentDidMount");
        fetch(locationUrl,{method:'GET'} )
        .then((res) => res.json())
        .then((data) => {
            this.setState({locations:data})
        })
    }

}

export default Search;