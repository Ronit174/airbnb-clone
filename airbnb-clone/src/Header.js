import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Avatar from '@material-ui/core/Avatar';
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="header">
        <Link to='/'>
        <img className="header_icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1200px-Airbnb_Logo_B%C3%A9lo.svg.png"  alt=" "/>

        </Link>   
            
           <div className='header_center'>
                <input type="text" />
                <SearchIcon />
           </div>

             <div className="header_right">
               <p>Become a host</p>
                 <LanguageIcon />
                 <ExpandMoreIcon />
                 <Avatar />
               </div>  
           
        </div>
    )
}

export default Header;
