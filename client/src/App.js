import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login";
import "./styles.scss";
import BubblePage from './components/BubblePage';
import SecurePath from './components/SecurePath';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        <SecurePath exact path = '/bubbles' component={BubblePage} />
      </div>
    </Router>
  );
}

export default App;