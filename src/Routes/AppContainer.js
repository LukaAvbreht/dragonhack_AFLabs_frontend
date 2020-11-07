import React, {useState} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ZemljevidNesrec from "./Subroutes/ZemljevidNeserc";
import StatistikaNesrec from "./Subroutes/StatistikaNesrec";
import Nesrece from "./Subroutes/Nesrece";
import Home from "./Subroutes/Home";
import SeznamNesrec from "./Subroutes/SeznamNesrec";
import NesrecaDetail from "./Subroutes/NesrecaDetail";

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

                    <Route path="/excd" exact={true}>
                        <SeznamNesrec />
                    </Route>

                    <Route path="/excd/:id" exact={true}>
                        <NesrecaDetail />
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