import React from 'react';
import logo from '../../logo.svg';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="Home">
          <header>this is page of Home</header>
          <ul>
            {/* Link 标签跳转 */}
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            {/* a 标签跳转 */}
            <li><a href="#/message">Message</a></li>
          </ul>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </div>
    );
}

export default Home;