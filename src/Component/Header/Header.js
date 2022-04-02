import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <nav className='navbar'>
            <img src={logo} alt="" />
            <div>
                <ul>
               <li><Link to="/order"> Order Management</Link></li>
                <li><Link to="/OrderReview">Order Review</Link></li>
                <li><Link to="/order">Order</Link></li>
                
                 </ul>
                 </div>
        </nav>
    );
};

export default Header;