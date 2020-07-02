import React from 'react';
import './App.css';

// import { HashRouter } from 'react-router-dom';
import Routes from './router';

function App(props) {
  return (
    <div className="App">
      {Routes}
    </div>
  );
}

export default App

// export default class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       location: props.history.location
//     };
//   }

//   render() {
//     return (<div className="App">
//       {this.props.children}
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>)
//   }
// }
