import React, {useState} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ZemljevidNesrec from "./Subroutes/ZemljevidNeserc";
import StatistikaNesrec from "./Subroutes/StatistikaNesrec";
import Home from "./Subroutes/Home";

function AppContainer(props) {
    return (

        <>
            <Router>
                <Switch>

                    <Route path="/" exact={true}>
                        <Home />
                    </Route>

                    <Route path="/stat" exact={true}>
                        <StatistikaNesrec />
                    </Route>

                    <Route path="/map" exact={true}>
                        <ZemljevidNesrec />
                    </Route>

                </Switch>
            </Router>



            <div>
                {props.childrenl}
            </div>

        </>



    );
}

export default AppContainer;