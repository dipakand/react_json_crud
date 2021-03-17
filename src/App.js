import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Navbar from "./components/layout/Navbar";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./components/pages/NoteFount";
import AddUsers from "./components/users/AddUsers";
import EditUser from "./components/users/EditUser";
import ViewUser from "./components/users/ViewUser";

function App() {
  return (
    <div className="App">
      {/* <h1>Hello World !</h1> */}
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/users/add" component={AddUsers} />
          <Route exact path="/users/edit/:id" component={EditUser} />
          <Route exact path="/users/view/:id" component={ViewUser} />
          <Route component={NotFound} />
        </Switch>
        {/* <Home />
        <About />
        <Contact /> */}
      </Router>
    </div>
  );
}

export default App;
