import React from 'react'

const Loading = () => {
    return (
        <div className="loading">
            <div className="dots">
                <span className="dot" id='anim1'></span>
                <span className="dot" id='anim2'></span>
                <span className="dot" id='anim2'></span>
            </div>
            <div className="loading-title">Loading...</div>            
        </div>
    )
}

export default Loading
