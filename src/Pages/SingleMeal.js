import React,{useState,useEffect} from 'react'
import {Link,useParams} from 'react-router-dom'
import Loading from '../components/Loading'

const url = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i='



const SingleMeal = () => {
    const {idMeal} = useParams()
    const [loading,setLoading] = useState(false)
    const [meal,setMeal] = useState(null)
    const [readMore, setReadMore] = useState(false);
    useEffect(() => {
        setLoading(true)
        async function getMeal(){
            try {
                    const response = await fetch(`${url}${idMeal}`)
                    const data = await response.json()
                    console.log(data.meals);
                    if(data.meals){
                        const {strMeal:name,strMealThumb:image,strCategory:category,strArea:country,strInstructions:instructions,strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5,strIngredient6,strIngredient7,strIngredient8,strIngredient9,strIngredient10,strIngredient11,strIngredient12,strIngredient13,strIngredient14,strIngredient15,strIngredient16,strIngredient17,strIngredient18,strYoutube:youtube} = data.meals[0]
                        const ingredients = [strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5,strIngredient6,strIngredient7,strIngredient8,strIngredient9,strIngredient10,strIngredient11,strIngredient12,strIngredient13,strIngredient14,strIngredient15,strIngredient16,strIngredient17,strIngredient18] 
                        const newMeal = {name,image,category,country,instructions,ingredients,youtube}
                        setMeal(newMeal)
                    }
                    else {
                        setMeal(null)
                    }
                    setLoading(false)
            } catch(err){
                setLoading(false)
            }
        }
        getMeal()
    },[idMeal])
    if (loading) {
        return <Loading />
    }
    if(!meal){
        return <h1>no cocktail to display</h1>
    }
    const {name,image,category,country,instructions,ingredients,youtube} = meal
    return (
        <div className="single">
            <h1>Meal details :</h1>
            <div className="single-container">
                <div className="image-container">
                    <img src={image} alt="" /> 

                </div>
                <div className="single-content">
                    <h1>{name}</h1>                    
                    <h3>category: <span>{category}</span></h3>
                    <h3>Country: <span>{country}</span></h3>  
                    <h4> ingredients :
                    {ingredients.map((item, index) => {
                        return item ? <span key={index}>{item}, </span> : null
                    })} 
                    </h4> 
                    <p>
                    {readMore ? instructions : `${instructions.substring(0, 200)}...`}
                        <a onClick={() => setReadMore(!readMore)} >
                        {readMore ? 'show less' : '  read more'}
                        </a>
                    </p>  
                    

                </div>
                <div className="watch">
                    <a className="btn" href={youtube}>WATCH VIDEO</a>
                    <Link to="/" className="btn">RETURN</Link>
                </div>
            </div>
            
        </div>
    )
}

export default SingleMeal