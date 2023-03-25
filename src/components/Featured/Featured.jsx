import { faEarthAfrica, faHotel, faTag, faTaxi } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "./Featured.css";

const Featured = () => {
  return (
    <div className='featured'>
        <div className="featuredContainer">
            <div className="FeaturedBox">
                <div className="logoContainer">
                <FontAwesomeIcon icon={faHotel} className="icon"/>
                </div>
                <span className="features">Hotel</span>
            </div>

            <div className="FeaturedBox">
                <div className="logoContainer">
                <FontAwesomeIcon icon={faTaxi} className="icon"/>
                </div>
                <span className="features">Car Hire</span>
            </div>

            <div className="FeaturedBox">
                <div className="logoContainer">
                <FontAwesomeIcon icon={faEarthAfrica} className="icon"/>
                </div>
                <span className="features">Explore every Where</span>
            </div>
            <div className="FeaturedBox">
                <div className="logoContainer">
                <FontAwesomeIcon icon={faTag} className="icon"/>
                </div>
                <span className="features">Hot hotel deals</span>
            </div>
            </div>

            </div>
  )
}

export default Featured