import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

function Nav(){
    return(
        <ul className="nav">
            {/* a 标签跳转 */}
            <li><a href="#/login">Login</a></li>
            {/* Link 标签跳转 */}
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/demo">Demo</Link></li>
        </ul>
    )
}

export default Nav