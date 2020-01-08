import React, {useState} from "react";
import Axios from "axios";
// import { Form, Button } from "react-bootstrap";
// import e from "@testing-library/user-event/src";
import FormU from "./FormU";

const getPath = "http://192.168.0.158:5000/api/v1/user"

export default function AddComp() {
    //Setting State
    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    //POST METHOD
    const handleSubmit = (e) => {
        console.log('called')
        e.preventDefault();
        Axios.post(getPath, data)
            .then(res => {
                console.log(res.data)
                setData(data)
            })
            .catch(err => console.error(err))
    }

    function handleChange(e) {
        const newData = {...data};
        newData[e.target.name] = e.target.value;
        setData(newData)
    }

    return (<FormU {...{data, name: 'Add', handleChange, handleSubmit}}/>

    );
}