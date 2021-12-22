import React,{Component} from 'react';
import './details.css';
import axios from 'axios';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import MenuList from './menuDisplay';

const url = "https://xomato.herokuapp.com/restaurant"
const menuUrl = "https://xomato.herokuapp.com/menu"

class Details extends Component {
    constructor(props) {
        super()
        this.state={
            details:'',
            menulist:'',
            userItem:''
        }
    }

    addToCart = (data) => {
        this.setState({userItem:data})
    }
    proceed = () => {
        sessionStorage.setItem('menu', this.state.userItem);
        this.props.history.push(`/placeOrder/${this.state.details.restaurant_name}`)
    }
    render(){
        //let details = this.state.details
        let {details} = this.state
        return(
            <div className="main">
            <div id="content">
                <div id="imgDiv">
                    <img src={details.restaurant_thumb}/>
                </div>
                <div id="textDiv">
                    <h1>{this.state.details.restaurant_name}</h1>
                    <i className="fas fa-star checked"></i>
                    <i className="fas fa-star checked"></i>
                    <i className="fas fa-star checked"></i>
                    <i className="fas fa-star checked"></i>
                    <i className="far fa-star"></i>
                    <span>289 Customer Reviews</span>
                    <h3><strike>Old Price 180</strike></h3>
                    <h3>New Price {details.cost}</h3>
                    <h3>Best Taste of {details.restaurant_name} At your Door or DineIn</h3>
                    <div>
                        <div className="icon">
                            <img src="https://i.ibb.co/0KzLdwC/No-contact-delivery-final-CB432269791.png" alt="icon"/>
                            <p>Contact Less Delivery</p>
                        </div>
                        <div class="icon">
                            <img src="https://i.ibb.co/kgcsZ3z/icon-amazon-delivered-CB485933725.png" alt="icon"/>
                            <p>Free Home Delivery</p>
                        </div>
                    </div>
                    <h2 className="stock">
                        Available Now
                    </h2>
                    <div>
                        <button className="btn btn-atc">Back</button>
                        <button className="btn btn-checkout" onClick={this.proceed}>Checkout</button>
                        
                    </div>
                    
                </div>
            </div>
            <div className="col-md-12">
                <Tabs>
                    <TabList>
                        <Tab>Details</Tab>
                        <Tab>Contact</Tab>
                        <Tab>Menu</Tab>
                    </TabList>
                    <TabPanel>
                        <h2>
                            {details.restaurant_name}
                        </h2>
                        <p>
                            Manali is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets 
                        </p>
                    </TabPanel>
                    <TabPanel>
                        <h2>{details.address}</h2>
                        <h2>Contact No: 87665765886</h2>
                    </TabPanel>
                    <TabPanel>
                        <MenuList menuData={this.state.menulist}
                        finalOrder = {(data) => {this.addToCart(data)}}/>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
        )
    }

    async componentDidMount(){
        const restId = this.props.match.params.id;
        const response = await axios.get(`${url}/${restId}`)
        const menuResponse = await axios.get(`${menuUrl}/${restId}`)
        this.setState({details:response.data[0],menulist:menuResponse.data})
    }
}

export default Details