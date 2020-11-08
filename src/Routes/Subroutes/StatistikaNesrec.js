import React, { useState } from "react";
import {Col, Row, FormGroup, Container }  from "react-bootstrap";
import AccidentFrequencyGraph from "../../Components/Graphs/AccidentFrequency";

function StatistikaNesrec() {

    return (
        <Container fluid="xl" >
            <Row>
                <Col sm={8}>
                    <div>
                        <AccidentFrequencyGraph />
                    </div>
                </Col>
                <Col sm={4}> Statistika nesrec </Col>
            </Row>

            <Row>
                Pregled frekvence nesreč po mesecih čez čas
            </Row>

            <Row>
                Ta pregled služi kot demo, za bolj interktiven statističen pregled nam je zmanjkalo časa
            </Row>
        </Container>


    );
}

export default StatistikaNesrec;