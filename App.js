import logo from './logo.svg';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import QuesView from "./QuesView";
import Home from "./Home";

import {Navbar,Nav,NavDropdown,Form,FormControl,Button} from "react-bootstrap";
function App() {
  return (
    <Router>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand href="#home">Open Source Org Forum</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link  href="/">Home</Nav.Link>
              <Nav.Link href="/ques_view">Ques Veiw</Nav.Link>
              <Nav.Link href="/answer">Users</Nav.Link>
              <Nav.Link href="/login">Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/ques_view">
            <QuesView />
          </Route>
          <Route path="/answer">
            <Answer />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          
        </Switch>
    </Router>
  );
}


function About() {
  return <h2>About</h2>;
}

function Answer() {
  return <h2>Answer</h2>;
}

function Login() {
  return <h1>Login</h1>;
}
export default App;
