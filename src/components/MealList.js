import React from 'react'
import Meal from './Meal'


const MealList = ({food}) => {
    return (
        
        <div className="meal-list">
            <h1>Meals</h1>
            <div className="meals-center">
                {food == null ? <p className="meal-error">no meal</p> : food.map((item)=>(
                    <Meal key={item.idMeal} {...item} />
                ))}    
            </div>        
        </div>
        
    )
}

export default MealList
