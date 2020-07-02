import React from 'react';
import { Link } from 'react-router-dom';

function Nav(){
    return(
        <ul>
            {/* Link 标签跳转 */}
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            {/* a 标签跳转 */}
            <li><a href="#/message">Message</a></li>
            <li><a href="#/list">List</a></li>
        </ul>
    )
}

export default Nav