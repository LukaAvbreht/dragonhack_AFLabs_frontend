import React from "react";
import {Col, Label, Row, FormGroup, Button, Container } from "reactstrap";

function Home() {
    return (
        <Container fluid="xl" className="mt-5">
            <Row>
                <Col md={4}>
                    <h1 style={{"fontSize" : "3rem"}}><i>Projekt Pasavec</i></h1>
                    <img
                        src="/appicon.png"
                        width="250"
                        height="350"
                        className="d-inline-block align-top ml-2"
                        alt="React Bootstrap logo"
                    />
                </Col>
                <Col md={8}>
                    <div className="ml-3 pl-3" style={{"height" : "200px"}}></div>
                    <p style={{"fontSize" : "1.5rem"}}>
                        Projekt Pasavec ponuja vizualizacijo in statistiko prometnih nesreč na slovenskih cestah med leti 2000 in 2020.
                    </p>
                    <p style={{"fontSize" : "1.1rem"}}>
                        <ul>
                            <li>
                                Na zavihku Statistika lahko najdemo razne grafe.
                            </li>
                            <li>
                                Pod zavihkom zemljevid imamo navoljo vpogled v HeatMap prometnih nesreč, ki nam omogoča vpogled v kritične in nevarne točke na slovenskih cestah.
                                Na voljo imamo tudi filtriranje po več parametrih  (tip nesreče, vzrok nesreče, vreme, vinjenost voznika, ...).
                            </li>
                            <li>
                                Zavihek nesreče nam omogoča v tabelarni pogled posameznih nesreč skupaj z razširjenimi podatki.
                            </li>
                        </ul>
                    </p>
                </Col>
            </Row>
        </Container>

    );
}

export default Home;