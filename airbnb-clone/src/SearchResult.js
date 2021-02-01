import React from 'react';
import './SearchResults.css';
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";


function SearchResult({
    img,
    location,
    title,
    description,
    star,
    price,
    total,
}) {
    return (
        <div className="searchResult"> 
            <img src={img} alt="" />
            <FavoriteBorderIcon className="searchResulr_heart" />


            <div className="searchResult_info">
                <div className="searchResult_infoTop">
                    <p>{location}</p>
                    <h3>{title}</h3>
                    <p>_____</p>
                    <p>{description}</p>
                </div>


                <div className="serachResult_infoBottom">
                    <div className="serachResult_stars">
                        <StarIcon className="searchResult_star" />

                        <p>
                           <strong>{star}</strong>
                        </p>

                    </div>
                <div className="serachResults_price">
                    <h2>{price}</h2>
                    <p>{total}</p>
                </div>
                </div>

            </div>
        </div>
    )
}

export default SearchResult
