import React from "react";
import ReactDOM from "react-dom";
import Create from './Create';
import Home from './Home';
import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = () => {
    return (
        <div className="container mx-auto">
            <Switch>
                <Route path="/create">
                    <Create />
                </Route>
                <Route path="/">
                   <Home /> 
                </Route>
            </Switch>
        </div>
    );
}

export default App;

if (document.getElementById("app")) {
    ReactDOM.render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
    , document.getElementById("app"));
}
