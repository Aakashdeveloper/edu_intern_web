import React from 'react';
import {Link} from 'react-router-dom'

const ListingDisplay = (props) => {

    const renderData = ({restData}) => {
        if(restData){
            if(restData.length>0){
                return restData.map((item) => {
                    return(
                        <div class="cardContainer">
                                <div class="component1">
                                    <img src={item.restaurant_thumb} alt={item.restaurant_name}/>
                                    <Link class="btn btn-danger" to={`/details/${item.restaurant_id}`}>
                                        Proceed
                                    </Link>
                                </div>
                                <div class="component2">
                                    <h2>{item.restaurant_name}</h2>
                                    <p>{item.address}</p>
                                    <p>Rating: {item.average_rating} star</p>
                                    <p>Cost: Rs {item.cost}/2 person</p>
                                    <div>
                                        <span class="label label-primary">{item.mealTypes[0].mealtype_name}</span>
                                        &nbsp;
                                        <span class="label label-danger">{item.mealTypes[1].mealtype_name}</span>
                                    </div>
                                    <div className="cuisine_type">
                                        <span class="label label-info">{item.cuisines[0].cuisine_name}</span>
                                        &nbsp;
                                        <span class="label label-success">{item.cuisines[1].cuisine_name}</span>
                                    </div>
                                    
                            </div>
                        </div>
                    )
                })
            }else{
                return(
                    <div>
                        <h3>No Data Found</h3>
                    </div>
                )
            }
            
        }else{
            return(
                <div>
                    <img src="/images/loader.gif" alt="loader"/>
                </div>
            )
        }

    }

    return(
        <>
           {renderData(props)}
        </>
    )
}

export default ListingDisplay