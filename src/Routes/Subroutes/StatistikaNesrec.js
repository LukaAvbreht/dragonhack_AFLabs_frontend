import React, { useState } from "react";
import { Field, Form, Formik } from "formik";
import {Col, Label, Row, FormGroup } from "reactstrap";
import Select from "react-select";

function StatistikaNesrec() {

    const [state, setState] = useState({
        "ura" : null,
        "leto" : null,
        "klasifikacija" : null,
        "vrstaCestee" : null,
        "tekstCesteNaselja" : null,
        "opisKraja" : null,
        "vzrokNesrece" : null,
        "tipNesrece" : null,
        "vreme" : null,
        "gostotaPrometa" : null,
        "stanjeVozisca" : null,
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

    let ureOptions = [
        {"value" : 1, "label" : 1},
        {"value" : 2, "label" : 2},
        {"value" : 3, "label" : 3},
        {"value" : 4, "label" : 4},
        {"value" : 5, "label" : 5},
        {"value" : 6, "label" : 6}
    ]

    return (
        <div className="appcontainer">
            Stran je v izdelavi. Nažalost ni bilo dovolj časa, da bi implementirali vse, kar smo si želeli :(
        </div>

    );
}

export default StatistikaNesrec;