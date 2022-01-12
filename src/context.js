import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'



const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s='

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading,setLoading] = useState(true)
  const [searchTerm,setSearchTerm] = useState('a')
  const [food,setFood] = useState([])

  const fetchData = useCallback(async() => {
    setLoading(true)
    try{
      const response = await fetch(`${url}${searchTerm}`)
      const data = await response.json()
      const {amine} = data.meals

      if(amine){
        const newAmine = amine.map((item)=> {
          const {idMeal,strMeal,strCategory,strIngredient1} = item
          return {
            id:idMeal,name:strMeal,cate:strCategory,image:strIngredient1
          }
        })
        setFood(newAmine)
        
        
      }
      else {
        setFood([])
      }
      setLoading(false)

    }catch(err){
      setLoading(false)
    }

  },[searchTerm])
  useEffect(() => {
    fetchData()
  },[searchTerm])
  return <AppContext.Provider value={{
    loading,food,searchTerm,setSearchTerm

  }}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }