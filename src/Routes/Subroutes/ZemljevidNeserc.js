import React, { useState, useEffect } from "react";
import { Field, Form, Formik } from "formik";
import {Col, Label, Row, FormGroup, Button } from "reactstrap";
import Select from "react-select";
import apiClient from "../../api/ApiClient";
import Zemljevid from "./Zemljevid";


function ZemljevidNesrec() {
    const [state, setState] = useState({
        "leto" : null,
        "text_ceste_naselja" : null,
        "opis_kraja" : null,
        "vzrok_nesrece" : null,
        "tip_nesrece" : null,
        "vremenske_okoliscine" : null,
        "povzrociteljStarost" : null,
        "povzrociteljSpol" : null,
        "povzrociteljVinjenost" : null
    })

    function range(begin, end){
        var arr = [];
        for(var i=begin; i<=end; i++){
            arr.push(i);
        }
        return arr;
     }

    const [options, setOptions] = useState({
        "leto" : range(2000, 2020).map(el => ({"value" : el, "label" : el})),
        "tekstCesteNaselja" : [],
        "opisKraja" : [],
        "vzrokNesrece" : [],
        "tipNesrece" : [],
        "vreme" : [],
        "povzrociteljStarost" : [],
        "povzrociteljSpol" : [],
        "povzrociteljVinjenost" : []
    })

    const [query_parts, set_query_parts] = useState([])
    const [naseljeQuery, setNaseljeQuery] = useState("")
    const [steviloNesrec, setSteviloNesrec] = useState(0)
    const [heatMapPoints, setHeatMapPoints] = useState([])
    const [countHeatMapPoints, setCountHeatMapPoints] = useState(0)
    const [centerLatitude, setCenterLatittude] = useState()
    const [centerLongitude, setCenterLongitude] = useState()

    function get_query_parts() {
        let query = []
        for (let key in state) {
            if (state[key]) {
                query.push(`${key}=${state[key]}`)
            }
        }
        return query;
    }

    function submitFilter() {
        set_query_parts(get_query_parts())
    }

    async function handleSelectChange(field, e, formik) {
        await formik.setFieldValue(field, e, false);
        await setState(prevState => (
            { ...prevState, [field]:e.value}
        ));
    }

    function handleInputChange(query) {
        if (!query && !naseljeQuery) {
            return;
        }

        if (query != naseljeQuery) {
            setNaseljeQuery(query)
        }
    }

    async function fetchHeatMapPoints(){
        let url = "/nesrece/geolocation?"

        let parts = query_parts;
        if (state.text_ceste_naselja) {
            parts.push(`address_id=${state.text_ceste_naselja}`)
        }
        console.log(parts, typeof(parts))
        const response = await apiClient(url + parts.join("&"))
        const points = response.data.locations.map(row => ({"lng" : row.long, "lat" : row.lat}))
        setHeatMapPoints(points)
        setCountHeatMapPoints(points.length)
        setCenterLatittude(response.data.lat)
        setCenterLongitude(response.data.long)
    }


    async function fetchNaseljeOptions(){
        if (!naseljeQuery) {return true}

        const response = await apiClient(`/text_ceste_naselja?contains=${naseljeQuery}`)
        const naselja = response.data.results.map(row => ({"value" : row.id, "label" : row.ime}))
        setOptions(prevOptions => ({
            ...prevOptions,
            "tekstCesteNaselja" : naselja
        }))
        return true;
    }

    async function handleDragEnd(e){
        console.log(e)
    }

    async function getOptions() {
        try {
            const response = await apiClient("/other/other")
            const tipNesrece = response.data.TipNesrece.map(row => ({"value" : row.id, "label" : row.ime}))
            const vzrokNesrece = response.data.VzrokNesrece.map(row => ({"value" : row.id, "label" : row.ime}))
            const vreme = response.data.VremenskeOkoliscine.map(row => ({"value" : row.id, "label" : row.ime}))
            const opisKraja = response.data.OpisKraja.map(row => ({ "value" : row.id, "label" : row.ime }))
            setOptions(prevOptions => ({
                ...prevOptions,
                "tipNesrece" : tipNesrece,
                "vzrokNesrece" : vzrokNesrece,
                "vreme" : vreme,
                "opisKraja" : opisKraja
            }))
        } catch(e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getOptions()
        fetchHeatMapPoints()
    }, [])

    useEffect(() => {
        fetchNaseljeOptions()
    }, [naseljeQuery])

    useEffect(() => {
        fetchHeatMapPoints()
    }, [query_parts])

    return (
        <div className="appcontainer p-4">
            <h4 className="ml-3">Z izbranimi filtri je bilo na označenem območju skupaj {countHeatMapPoints} prometnih nesreč.</h4>
            <Row className="p-3">
                <Col md={7}>
                    { URL }
                    <Zemljevid heatMapPoints={heatMapPoints} handleDragEnd={handleDragEnd} lat={centerLatitude} lng={centerLongitude} />
                </Col>
                <Col md={5}>
                    <Formik initialValues={state} onSubmit={submitFilter}>
                    {formik => 
                        <Form>
                            <Row className="m-3">
                                <Col className="" md={4}>
                                    <Label for="leto">Leto:</Label>
                                </Col>
                                <Col style={{ "color" : "black"}} md={8}>
                                    <Select style={{"color" : "red" }} name="leto" options={options.leto} onChange={e => handleSelectChange("leto", e, formik)} placeholder="Vsa leta"/>
                                </Col>
                            </Row>
                            
                            <Row className="m-3">
                                <Col className="" md={4}>
                                    <Label for="text_ceste_naselja">Naselje:</Label>
                                </Col>
                                <Col style={{ "color" : "black"}} md={8}>
                                    <Select style={{"color" : "red" }} 
                                            name="text_ceste_naselja" 
                                            options={options.tekstCesteNaselja}
                                            onChange={e => handleSelectChange("text_ceste_naselja", e, formik)} 
                                            onInputChange={e=> handleInputChange(e)} 
                                            placeholder="Ljubljana/Grosuplje/Maribor/..."/>
                                </Col>
                            </Row>
                            
                            <Row className="m-3">
                                <Col className="" md={4}>
                                    <Label for="opis_kraja">Opis kraja:</Label>
                                </Col>
                                <Col style={{ "color" : "black"}} md={8}>
                                    <Select style={{"color" : "red" }} name="opis_kraja" options={options.opisKraja} onChange={e => handleSelectChange("opis_kraja", e, formik)} placeholder="Krizišče/Cesta/Parkirišče, ..."/>
                                </Col>
                            </Row>
                            
                            <Row className="m-3">
                                <Col className="" md={4}>
                                    <Label for="vzrok_nesrece">Vzrok nesreče:</Label>
                                </Col>
                                <Col style={{ "color" : "black"}} md={8}>
                                    <Select style={{"color" : "red" }} name="vzrok_nesrece" options={options.vzrokNesrece} onChange={e => handleSelectChange("vzrok_nesrece", e, formik)} placeholder="Neprilagojena hitrost ..."/>
                                </Col>
                            </Row>
                            
                            <Row className="m-3">
                                <Col className="" md={4}>
                                    <Label for="tip_nesrece">Tip nesreče:</Label>
                                </Col>
                                <Col style={{ "color" : "black"}} md={8}>
                                    <Select style={{"color" : "red" }} name="tip_nesrece" options={options.tipNesrece} onChange={e => handleSelectChange("tip_nesrece", e, formik)} placeholder="Bočno Trčenje/Nalet/..."/>
                                </Col>
                            </Row>
                            
                            <Row className="m-3">
                                <Col className="" md={4}>
                                    <Label for="vremenske_okoliscine">Vreme:</Label>
                                </Col>
                                <Col style={{ "color" : "black"}} md={8}>
                                    <Select style={{"color" : "red" }} name="vremenske_okoliscine" options={options.vreme} onChange={e => handleSelectChange("vremenske_okoliscine", e, formik)} placeholder="Sonce/Dež/Megla/..."/>
                                </Col>
                            </Row>
                            
                            <Row className="m-3">
                                <Col className="" md={4}>
                                    <Label for="povzrociteljStarost">Starost povzročitelja:</Label>
                                </Col>
                                <Col style={{ "color" : "black"}} md={8}>
                                    <Select style={{"color" : "red" }} name="povzrociteljStarost" options={options.povzrociteljStarost} onChange={e => handleSelectChange("povzrociteljStarost", e, formik)} placeholder="e.g. 20-30, 30-40"/>
                                </Col>
                            </Row>
                            <Row className="m-3">
                                <Col className="" md={4}>
                                    <Label for="povzrociteljSpol">Spol povzročitelja:</Label>
                                </Col>
                                <Col style={{ "color" : "black"}} md={8}>
                                    <Select style={{"color" : "red" }} name="povzrociteljSpol" options={options.povzrociteljSpol} onChange={e => handleSelectChange("povzrociteljSpol", e, formik)} placeholder="Moški/Ženska"/>
                                </Col>
                            </Row>
                            <Row className="m-3">
                                <Col className="" md={4}>
                                    <Label for="povzrociteljVinjenost">Vinjenost:</Label>
                                </Col>
                                <Col style={{ "color" : "black"}} md={8}>
                                    <Select style={{"color" : "red" }} name="povzrociteljVinjenost" options={options.povzrociteljVinjenost} onChange={e => handleSelectChange("povzrociteljVinjenost", e, formik)} placeholder="Nad koliko promilov?"/>
                                </Col>
                            </Row>
                            
                        </Form>}
                </Formik>
                <Button className="ml-4 pl-3 btn-danger" onClick={() => submitFilter()}> Filtriraj </Button>
                </Col>
            </Row>
        </div>

    );
}

export default ZemljevidNesrec;