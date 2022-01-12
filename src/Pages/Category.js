import React,{useState,useEffect} from 'react'


const url = 'https://www.themealdb.com/api/json/v1/1/categories.php'


const Category = () => {
    const [category,setCategory] = useState([])
    const [readMore, setReadMore] = useState(false);
    const getCategory = async () =>{
        const response = await fetch(url)
        const data = await response.json()
        const amine = data.categories
        setCategory(amine)
        
    }
    useEffect(() =>{
        getCategory();
    },[])

    return (
        
        <div className="category">
            <div className="category-container">
                <h1>List of Meal Category:</h1>
                <div className="category-card-grid">
                    {category.map((item)=>(
                        <div key={item.idCategory}className="card-cate">
                            <img src={item.strCategoryThumb} alt="" />
                            <div className="card-details">
                                <h1>{item.strCategory}</h1> 
                                <p>
                                    {readMore ? item.strCategoryDescription : `${item.strCategoryDescription.substring(0, 200)}...`}
                                    <a onClick={() => setReadMore(!readMore)} >
                                    {readMore ? 'show less' : '  read more'}
                                    </a>
                                    
                                    
                                    
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        
    )
}

export default Category
