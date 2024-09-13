import React from 'react'
import { PiReadCvLogoBold } from "react-icons/pi"

const Card = ({ ...item }) => {

    function truncateText(input) {
        if (!input) {
            return "";
        } else {
            let truncatedStr = input.slice(0, 80);
            return input.length > 80 ? `${truncatedStr}...` : truncatedStr;
        }
    }

    const extractDate = (dateTimeString) => {
        const dateObject = new Date(dateTimeString);
        // Using toLocaleDateString to get the date in local format
        return dateObject.toLocaleDateString();
    };

    return (
        <>
            <div className="card" style={{ width: "100%", height: "45vh", cursor: "pointer" }}>
                <img src={item.urlToImage} style={{ height: "18vh" }} className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className='text-truncate'><span className='fw-bold'>Author: </span>{item.author}</p>
                    <h5 className="card-title text-truncate fw-bold">{item.title}</h5>
                    <div style={{ height: "32%" }}>
                        <p className="card-text">{truncateText(item.description)}</p>
                    </div>
                    <p className='text-truncate'><span className='fw-bold'>publishedAt: </span>{extractDate(item.publishedAt)}</p>
                    <a href={item.url} target="_blank" className="btn btn-danger fw-bold w-100">Read More <PiReadCvLogoBold /></a>
                </div>
            </div>
        </>
    )
}

export default Card
