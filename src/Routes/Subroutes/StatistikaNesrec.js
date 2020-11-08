import React, { useState } from "react";
import {Col, Row, FormGroup, Container }  from "react-bootstrap";
import AccidentFrequencyGraph from "../../Components/Graphs/AccidentFrequency";
import CausePieChart from "../../Components/Graphs/CaucePieChart";
import AlkoholRadialChart from "../../Components/Graphs/AlkoholCezLetoChart";

function StatistikaNesrec() {

    return (
        <Container fluid="xl" >
            <h2>Mesečna število nesreč med leti 2000 - 2020</h2>
            <Row className="mt-5 mb-3">
                <Col sm={8}>
                    <div>
                        <AccidentFrequencyGraph />
                    </div>
                </Col>
                <Col md={4}> Opomba: Hiter design nekaj grafov, za napredne grafe in filterje nam je žal zmanjkalo časa :( Le prvi graf ima prave podatke.</Col>
            </Row>
            <h2>Delež nesreč glede na vzrok nesreče</h2>

            <Row className="mt-3">
                <Col sm={4}> 
                    Graf nam prikazuje delež prometnih nesreč glede na vzrok nesreče. Možni vzroki so recimo: <br/>
                    <ul>
                        <li> Neprilagojena hitrost</li>
                        <li> Neprimerna varnostna razdalja</li>
                        <li> Neupoštevanje pravil o prednosti</li>
                        <li> ... </li>
                    </ul> 
                </Col>
                <Col sm={8}>
                    <div>
                        <CausePieChart />
                    </div>
                </Col>
            </Row>
            
            <h2 className="mt-3">Prometne nesreče vinjenih voznikov glede na mesec</h2>
            <Row className="mt-5">
                <Col sm={6}>
                    <div>
                        <AlkoholRadialChart />
                    </div>
                </Col>
                <Col sm={2}></Col>
                <Col className="mt-5" sm={4}>
                    <p>
                        Graf prikazuje število nesreč vinjenih voznikov v odvisnosti od meseca v letu.
                    </p>
                </Col>

            </Row>

        </Container>


    );
}

export default StatistikaNesrec;