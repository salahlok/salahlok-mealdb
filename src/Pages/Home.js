import React,{useState, useEffect} from 'react'
import SearchForm from '../components/SearchForm'
import MealList from '../components/MealList'
import Loading from '../components/Loading'
import Hero from '../components/Hero'

const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s='


const Home = () => {

  const [loading,setLoading] = useState(true)
  const [food,setFood] = useState([])
  const [search,setSearch] = useState('')


  const fetchData = async() =>{
    const response = await fetch(`${url}${search}`)
    const data = await response.json()
    const recipe = data.meals
    setFood(recipe)
    setLoading(false)
    
    
  }

  useEffect(() =>{    
    fetchData()
    
  },[search])

  if(loading) {
    return <Loading />
  }
    return (
        <main>
          <Hero/>       
          <SearchForm setSearch={setSearch}/>               
          <MealList food={food}/>            
        </main>
    )
}

export default Home
