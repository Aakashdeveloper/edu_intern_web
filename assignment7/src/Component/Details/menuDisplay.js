import React,{Component} from 'react';

class MenuDisplay extends Component {

    orderId = [];

    addItem = (id) => {
        this.orderId.push(`${id}`)
        this.props.finalOrder(this.orderId)
    }

    removeItem = (id) => {
        this.orderId.splice(this.orderId.indexOf(id.toString()),1)
        this.props.finalOrder(this.orderId)
    }

    renderCart = (orders) => {
        if(orders){
            return orders.map((item,index) => {
                return(
                    <b key={index}>{item} &nbsp; &nbsp;</b>
                )
            })
        }
    }

    renderMenu = ({menuData}) => {
        if(menuData){
            return menuData.map((item) => {
                return(
                    <div key={item.menu_id}>
                        <div className="col-md-7">
                            <b>{item.menu_id}</b> &nbsp;
                            <img src={item.menu_image} alt={item.menu_name} style={{height:80,width:80}}/>
                            &nbsp; &nbsp;
                            {item.menu_name}-Rs.{item.menu_price}
                            <p>{item.description}</p>
                        </div>
                        <div className="col-md-4">
                            <button className="cartBtn btn btn-primary" onClick={() => {this.addItem(item.menu_id)}}>
                                <span className="glyphicon glyphicon-plus"></span>
                            </button> &nbsp;
                            <button className="cartBtn btn btn-danger" onClick={() => {this.removeItem(item.menu_id)}}>
                                <span className="glyphicon glyphicon-minus"></span>
                            </button> 
                        </div>
                    </div>
                )
            })
        }
    }
    render(){
        console.log(">>>menu",this.props)
        return(
            <>
                <div className="col-md-12 bg-success">
                    <h2>Item Added</h2>
                    Item Number {this.renderCart(this.orderId)} added
                </div>
                <div className="col-md-12 bg-info">
                    {this.renderMenu(this.props)}
                </div>
            </>
        )
    }
}

export default MenuDisplay;