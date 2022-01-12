import React from 'react'
import mealdb from './mealdb.png'
const About = () => {
    return (
        <div className="about">
            <div className="about-container">
                <h1>ABOUT</h1>
                <div className="about-content">
                    <p>TheMealDB was built in 2016 to provide a free data source api for recipes online <br />
                        in the hope that developers would build applications and cool projects ontop of it.
                        TheMealDB originated on the <a href="https://forum.kodi.tv/showthread.php?tid=282387&pid=2373121#pid2373121">Kodi forums</a> as a way to browse recpies on your TV.</p>
                    <img src={mealdb} alt="" />
                </div>
            </div>            
        </div>
    )
}

export default About
