import React from 'react'
import {Link} from 'react-router-dom'



const Meal = ({strMeal,strArea,strMealThumb,idMeal}) => {
    return (
        <div className="meal">
            <div className="img-container"><img src={strMealThumb} alt=""/></div>
            <div className="meal-footer">
                <h1>{strMeal}</h1>
                <h4>{strArea}</h4>
                <Link to={`/meal/${idMeal}`} className='btn'>DETAILS</Link>
            </div>
        </div>
    )
}

export default Meal
