import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

function Nav() {
    return (
        <ul className="nav">
            {/* Link 标签跳转 */}
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/login">Login</Link></li>
            {/* a 标签跳转 */}
            <li><a href="#/message">Message</a></li>
            <li><a href="#/list">List</a></li>
        </ul>
    )
}

export default Nav