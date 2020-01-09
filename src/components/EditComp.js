import React, { memo, useState } from 'react';
import FormU from "./FormU";
import Axios from "axios";
import { useHistory } from "react-router-dom"
export default memo(({ ...props }) => {

    //Path Url
    const updatePath = 'http://192.168.0.158:5000/api/v1/user/';

    //Duplicate object
    const [data, setData] = useState(props.location.state.list)

    console.log();
    //History variable
    let history = useHistory();

    

    const handleSubmit = (e) => {
        console.log('called')
        e.preventDefault();
        Axios.put(updatePath + data._id, data)
            .then(res => {
                console.log(res)
                if (res.status === 200) {
                    history.push("/user/list")
                }
            })
            .catch(err => console.error(err))
    }

    function handleChange(e) {
        const newData = { ...data };
        newData[e.target.name] = e.target.value;
        setData(newData)
        console.log(newData)
    }

    return <FormU {...{ data, name: 'Update', handleChange, handleSubmit }} />

})




