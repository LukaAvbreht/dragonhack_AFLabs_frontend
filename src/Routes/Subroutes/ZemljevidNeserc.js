import React, { useState } from "react";
import { Field, Form, Formik } from "formik";
import {Col, Label, Row, FormGroup } from "reactstrap";
import Select from "react-select";


function ZemljevidNesrec() {
    const [state, setState] = useState({
        "leto" : null,
        "tekstCesteNaselja" : null,
        "opisKraja" : null,
        "vzrokNesrece" : null,
        "tipNesrece" : null,
        "vreme" : null,
        "gostotaPrometa" : null,
        "povzrociteljStarost" : null,
        "povzrociteljSpol" : null,
        "povzrociteljVinjenost" : null
    })

    function submitFilter() {
        return true;
    }

    async function handleSelectChange(field, e, formik) {
        await formik.setFieldValue(field, e, false);
        await setState(prevState => (
            { ...prevState, [field]:e.value}
        ));
    }

    let options = [
        {"value" : 1, "label" : 1},
        {"value" : 2, "label" : 2},
        {"value" : 3, "label" : 3},
        {"value" : 4, "label" : 4},
        {"value" : 5, "label" : 5},
        {"value" : 6, "label" : 6}
    ]

    return (
        <div className="appcontainer">
            <Row>
                <Col md={6}>
                    Tukaj bo zemljevid
                    { state.gostotaPrometa }
                </Col>
                <Col md={6}>
                    <Formik initialValues={state} onSubmit={submitFilter}>
                    {formik => 
                        <Form>
                            <Row className="m-3">
                                <Col className="" md={4}>
                                    <Label for="leto">Leto:</Label>
                                </Col>
                                <Col md={8}>
                                    <Select style={{"color" : "red" }}size="lg" name="leto" options={options} onChange={e => handleSelectChange("leto", e, formik)} placeholder="Vsa leta"/>
                                </Col>
                            </Row>
                            
                            <Row className="m-3">
                                <Col className="" md={4}>
                                    <Label for="tekstCesteNaselja">Naselje:</Label>
                                </Col>
                                <Col md={8}>
                                    <Select style={{"color" : "red" }}size="lg" name="tekstCesteNaselja" options={options} onChange={e => handleSelectChange("tekstCesteNaselja", e, formik)} placeholder="Ljubljana/Grosuplje/Maribor/..."/>
                                </Col>
                            </Row>
                            
                            <Row className="m-3">
                                <Col className="" md={4}>
                                    <Label for="opisKraja">Opis kraja:</Label>
                                </Col>
                                <Col md={8}>
                                    <Select style={{"color" : "red" }}size="lg" name="opisKraja" options={options} onChange={e => handleSelectChange("opisKraja", e, formik)} placeholder="Krizišče/Cesta/Parkirišče, ..."/>
                                </Col>
                            </Row>
                            
                            <Row className="m-3">
                                <Col className="" md={4}>
                                    <Label for="vzrokNesrece">Vzrok nesreče:</Label>
                                </Col>
                                <Col md={8}>
                                    <Select style={{"color" : "red" }}size="lg" name="vzrokNesrece" options={options} onChange={e => handleSelectChange("vzrokNesrece", e, formik)} placeholder="Neprilagojena hitrost ..."/>
                                </Col>
                            </Row>
                            
                            <Row className="m-3">
                                <Col className="" md={4}>
                                    <Label for="tipNesrece">Tip nesreče:</Label>
                                </Col>
                                <Col md={8}>
                                    <Select style={{"color" : "red" }}size="lg" name="tipNesrece" options={options} onChange={e => handleSelectChange("tipNesrece", e, formik)} placeholder="Bočno Trčenje/Nalet/..."/>
                                </Col>
                            </Row>
                            
                            <Row className="m-3">
                                <Col className="" md={4}>
                                    <Label for="vreme">Vreme:</Label>
                                </Col>
                                <Col md={8}>
                                    <Select style={{"color" : "red" }}size="lg" name="vreme" options={options} onChange={e => handleSelectChange("vreme", e, formik)} placeholder="Sonce/Dež/Megla/..."/>
                                </Col>
                            </Row>
                            
                            <Row className="m-3">
                                <Col className="" md={4}>
                                    <Label for="povzrociteljStarost">Starost povzročitelja:</Label>
                                </Col>
                                <Col md={8}>
                                    <Select style={{"color" : "red" }}size="lg" name="povzrociteljStarost" options={options} onChange={e => handleSelectChange("povzrociteljStarost", e, formik)} placeholder="e.g. 20-30, 30-40"/>
                                </Col>
                            </Row>
                            <Row className="m-3">
                                <Col className="" md={4}>
                                    <Label for="povzrociteljSpol">Spol povzročitelja:</Label>
                                </Col>
                                <Col md={8}>
                                    <Select style={{"color" : "red" }}size="lg" name="povzrociteljSpol" options={options} onChange={e => handleSelectChange("povzrociteljSpol", e, formik)} placeholder="Moški/Ženska"/>
                                </Col>
                            </Row>
                            <Row className="m-3">
                                <Col className="" md={4}>
                                    <Label for="povzrociteljVinjenost">Vinjenost:</Label>
                                </Col>
                                <Col md={8}>
                                    <Select style={{"color" : "red" }}size="lg" name="povzrociteljVinjenost" options={options} onChange={e => handleSelectChange("povzrociteljVinjenost", e, formik)} placeholder="Nad koliko promilov?"/>
                                </Col>
                            </Row>
                            
                        </Form>}
                </Formik>
                </Col>
            </Row>
        </div>

    );
}

export default ZemljevidNesrec;