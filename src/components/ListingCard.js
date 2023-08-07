import React, { useEffect } from "react";
import { useState} from "react";
function ListingCard() {

  const [listings, setlistings] = useState([]);
 

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((response) => response.json())
      .then((data) => setlistings(data));
  }, []);

    const Card=listings.map((listings)=>{
      
      <>
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listings.image} alt={""} />
      </div>
      <div className="details">
        {true ? (
          <button className="emoji-button favorite active">★</button>
        ) : (
          <button className="emoji-button favorite">☆</button>
        )}
        <strong>{listings.description}</strong>
        <span> · {listings.location}</span>
        <button className="emoji-button delete">🗑</button>
      </div>
    </li>
    
    </>
      
    });
    return<div>{Card}</div>
  
}

export default ListingCard;
