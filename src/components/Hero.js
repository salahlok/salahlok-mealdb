import React from 'react'
import Dish from './dish.png'
const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-section">
                <div className="hero-content">
                    <h1>Learn.Cook.Share.</h1>
                    <h1>Cooking Made Easy</h1>
                    <p>Say good bye to long and frustrating food blogs and recipe videos, Access our recipe cards to prepare any dish in minutes.</p>
                    <a href="#search" className="btn">Browse Meal</a>
                </div>
                <div className="hero-image">
                    <img src={Dish} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero
