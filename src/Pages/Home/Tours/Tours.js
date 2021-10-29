import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Tour from '../Tour/Tour';
import './Tours.css';


// set the tourism place
const Tours = () => {
    const [tours, settours] = useState([]);
    useEffect( () => {
        fetch('http://localhost:5000/tours')
        .then(res => res.json())
        .then(data => settours(data))
    } , [])
    return (
        <div id="tours">
            <div className="tours-header">
            <h3>Special Deals And last Minute <br />Amazing Offers</h3>
            </div>
            <div className="tour-container">
                {
                    tours.map(tour => <Tour key={tour.id} tour={tour}></Tour>)
                }
            </div>
        </div>
    );
};

export default Tours;