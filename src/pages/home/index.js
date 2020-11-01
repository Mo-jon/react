import React from 'react';
import './index.css';
import logo from '../../logo.svg';
import Nav from '../../components/nav'

function Home() {
    return (
        <div className="Home">
          <header>this is page of Home</header>
          <Nav></Nav>
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