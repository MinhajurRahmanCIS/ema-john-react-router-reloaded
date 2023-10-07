import React from 'react';
import './Header.css'
import logo from '../../assets/images/Logo.svg'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <nav className='navbar'>
            <img src={logo} alt="" />
            <div>
                <Link to='/'>Shop</Link >
                <Link to='/orders'>Order Review</Link >
                <Link to='/inventory'>Manage Inventory</Link >
                <Link to='/login'>Login</Link >
            </div>
        </nav>
    );
};

export default Header;