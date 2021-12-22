import React from 'react';
import {Link} from 'react-router-dom';

const QuickDisplay = (props) => {
    const renderMeal = ({quickData}) => {
        if(quickData){
            return quickData.map((item) => {
                return(
                    <Link to={`/list/${item.mealtype_id}`} key={item.mealtype_id}>
                        <div class="tileContainer">
                            <div class="tileComponent1">
                                <img src={item.meal_image} alt="snacks"/>
                            </div>
                            <div class="tileComponent2">
                                <div class="componentHeading">
                                    <p>{item.mealtype}</p>
                                </div>
                                <div class="componentSubHeading">
                                    {item.content}
                                </div>
                            </div>
                        </div>
                    </Link>
                    
                )
            })
        }
    }

    return(
        <div class="mainTileContainer">
            {renderMeal(props)}
        </div>
    )
}

export default QuickDisplay;