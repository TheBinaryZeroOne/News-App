import React from 'react'
import "./Loading.css"

const Loading = () => {
    return (
        <>
            <div className='main-container'>
                <div className="image-container">Lodaing</div>
                <div className="content-container">
                    <div className="author-container"></div>
                    <div className="description">
                        <div className="desc-container"></div>
                        <div className="cont">
                            <div className="main-desc"></div>
                            <div className="main-desc"></div>
                        </div>
                    </div>
                    <div className="date-container"></div>
                    <div className="button"></div>
                </div>
            </div>
        </>
    )
}

export default Loading
