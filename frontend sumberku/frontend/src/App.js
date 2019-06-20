import React, { Component } from "react";
import logo, { ReactComponent } from "./logo.svg";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import routes from "./routes";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

// function App() {
//   return (
//     <div className="App">
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
//     </div>
//   );
// }

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          {routes.map(route => (
            <Route exact path={route.path} component={route.component} />
          ))}
          {}
        </div>
      </Router>
    );
  }
}
export default App;
