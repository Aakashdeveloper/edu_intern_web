import React,{Component} from 'react';
import './placeOrder.css'

const menuUrl = "https://xomato.herokuapp.com/menuItem";
const placeOrder = "https://xomato.herokuapp.com/placeOrder"

class PlaceOrder extends Component {
    constructor(props){
        super(props)

        this.state={
            id:Math.floor(Math.random()*100000),
            rest_name:this.props.match.params.restName,
            name:'Aakash',
            phone:'987654324',
            email:'aakash@gmail.com',
            cost:0,
            address:'Hno123',
            menuItems:''

        }
    }

    handleSubmit = () => {
        /*var obj = this.state;
        obj.details = sessionStorage.getItem('menu');
        delete obj.menuItems
        console.log(obj)*/
        fetch(placeOrder,{
            method:'POST',
            headers:{
                'accept':'application/json',
                'content-type':'application/json'
            },
            body:JSON.stringify(this.state)
        })
        //.then(this.props.history.push('/viewBooking'))
        .then(console.log('going for payment'))
    }
    renderItems = (data) => {
        if(data){
            return data.map((item,index) => {
                return(
                    <div className="orderItems" key={index}>
                        <img src={item.img} alt={item.name}/>
                        <h3>{item.name}</h3>
                    </div>
                )
            })
        }
    }

    handleChange = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }
    render(){
        return(
            <div className="container">
                <br/>
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        Place Order
                    </div>
                    <div className="panel-body">
                        <form action="http://localhost:4100/paynow" method="POST">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input className="form-control" name="name"
                                        value={this.state.name} onChange={this.handleChange}/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input className="form-control" name="email"
                                        value={this.state.email} onChange={this.handleChange}/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Phone</label>
                                        <input className="form-control" name="phone"
                                        value={this.state.phone} onChange={this.handleChange}/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Address</label>
                                        <input className="form-control" name="address"
                                        value={this.state.address} onChange={this.handleChange}/>
                                    </div>
                                </div>
                            </div>
                            {this.renderItems(this.state.menuItems)}
                            <input type="hidden" name="cost" value={this.state.cost}/>
                            <input type="hidden" name="id" value={this.state.id}/>
                            <input type="hidden" name="rest_name" value={this.state.rest_name}/>
                            <div className="row">
                                <div className="col-md-12">
                                    <h2>Total Cost is Rs.{this.state.cost}</h2>
                                </div>
                            </div>
                            <button className="btn btn-success" type="submit" onClick={this.handleSubmit}
                            >
                                Place order
                            </button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount(){
        let menuItems = sessionStorage.getItem('menu')
        let menuIds = []
        menuItems.split(',').map((item) => {
            menuIds.push(parseInt(item))
            return 'ok'
        })
        fetch(menuUrl,{
            method:'POST',
            headers:{
                'accept':'application/json',
                'content-type':'application/json'
            },
            body:JSON.stringify(menuIds)
        })
        .then((res) => res.json())
        .then((data) => {
            let menuDetails = [];
            let totalPrice = 0;
            data.map((item) => {
                var myObj = {}
                totalPrice = totalPrice + parseInt(item.menu_price)
                myObj.name = item.menu_name;
                myObj.img = item.menu_image
                menuDetails.push(myObj);
                return 'ok'
            })
            this.setState({cost:totalPrice,menuItems:menuDetails})
        })
    }
}

export default PlaceOrder;