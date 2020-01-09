import React, { Fragment, useState } from "react";
import Axios from "axios";
import Alert from 'react-bootstrap/Alert'
// import { Form, Button } from "react-bootstrap";
// import e from "@testing-library/user-event/src";
import FormU from "./FormU";
import { useHistory } from "react-router-dom";
const getPath = "http://192.168.0.158:5000/api/v1/user"

export default function AddComp() {
    //Setting State
    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    //Creating history variable
    const history = useHistory();

    const [show, setShow] = useState(false);


    //POST METHOD
    const handleSubmit = (e) => {
        console.log('called')
        e.preventDefault();

        Axios.post(getPath, data)
            .then(res => {
                console.log(res.data)
                if (res.status === 200) {
                    setShow(true)
                     history.push("/home")
                }
            })
            .catch(err => console.error(err))
    }

    function handleChange(e) {
        const newData = { ...data };
        newData[e.target.name] = e.target.value;
        setData(newData)
    }

    return (
        <Fragment>
            <FormU {...{ data, name: 'Add', handleChange, handleSubmit }} />
            <Alert show={show} variant={"success"}>
                <Alert.Heading>User added successfully.</Alert.Heading>
            </Alert>
        </Fragment>

    );
}