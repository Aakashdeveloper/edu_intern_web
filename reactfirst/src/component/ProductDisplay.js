import React from 'react';
import './product.css';

const Product = (props) => {

    const renderProduct = props.prodData.map((item) => {
        return(
            <div className="card">
                <img src={item.image} alt={item.name} className="cardImage"/>
                <h3>{item.name}</h3>
                <h4>{item.description}</h4>
                <h4><strike>Rs.{item.cost}</strike></h4>
                <h4>Discount {item.discount}</h4>
            </div>
        )
    })


    return(
        <div className="container">
            {renderProduct}
        </div>
    )
}

export default Product