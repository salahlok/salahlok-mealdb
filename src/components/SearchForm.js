import React from 'react'
import { BiSearchAlt } from "react-icons/bi";
const SearchForm = ({setSearch}) => {
    return (
        <div className="search" id="search">
            <div className="search-form">
                <label htmlFor="">Search Your Favorite Meal</label>
                <form >
                    <input type="text" onChange={(e)=> setSearch(e.target.value)} required/>
                    <BiSearchAlt className="fa"/>
                    </form>     
                </div> 
        </div>        
    )
}

export default SearchForm
