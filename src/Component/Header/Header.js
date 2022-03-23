import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <nav className='navbar'>
            <img src={logo} alt="" />
            <div>
                <ul>
                <li><a href="/udg">Order Management</a></li>
                <li><a href="/udg">Order Review</a></li>
                <li><a href="/udg">Order</a></li>
                
                 </ul>
                 </div>
        </nav>
    );
};

export default Header;