import React from 'react'
import Meal from './Meal'


const MealList = ({caty}) => {
    return (
        
        <div className="meal-list">
            <h1>Meals</h1>
            <div className="meals-center">
                {caty == null ? <p>no meal</p> : caty.map((item)=>(
                    <Meal key={item.idMeal} {...item} />
                ))}    
            </div>        
        </div>
        
    )
}

export default MealList
