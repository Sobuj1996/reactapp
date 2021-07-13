import React from "react"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Route, Switch, Redirect } from "react-router";
import Home from "./Home"
import About from "./About"
import Service from "./Service"
import Contact from "./Contact"
import Navbar from "./Navbar"

const App = () => {
    return(
        <>
        {/* <Router basename={process.env.NODE_ENV === 'production'?'/ReactApp': ''}> */}
        <Navbar/>
        <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/service" component={Service}/>
        <Route exact path="/contact" component={Contact}/>
        <Redirect to="/" />
        <Home/>
        </Switch>
        {/* </Router> */}
        </>
    );
};
export default App;