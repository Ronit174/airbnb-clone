import React, { useState } from 'react';
import './Banner.css';
import { Button } from "@material-ui/core";
import Search from './Search';
import { useHistory } from "react-router-dom"; 

function Banner() {  
    const history= useHistory();
    const [showSearch, setShowSearch] = useState(true);
    return (
        <div className='banner'>
            <div className='banner_search'>

            {showSearch && <Search />}


                <Button onClick={() => 
                 setShowSearch(!showSearch)}
                   className='banner_searchButton' variant='outlined'>
                       {showSearch ? "Hide" : "Search Dates"}
                   </Button>
            </div>
            <div className='banner_info'>
                <h1>Get out and strech your imagination</h1>

                <h5>
                    Plan a diiferent kind of gateway to uncover the hidden gems for you. 
                </h5>
                <Button  onClick={() => history.push('/search')} variant='outlined' >Explore Nearby</Button>
            </div>
        </div>
    )
}

export default Banner;
