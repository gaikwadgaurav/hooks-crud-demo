import React, {memo, useState, useEffect} from 'react';
import FormU from "./FormU";
import Axios from "axios";

export default memo(({...props}) => {
    const data = props.location.state.list;
    //const name = props.location.state.name;

    const [ updateData, setUpdateData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password:''
    });


    function handleSubmit(data) {
        return dispatch => {
            console.log(data)
            return Axios.put('http://192.168.0.158:5000/api/v1/user/5dc5661c4dae4617cf962e9f // id')
        }
    }

    function handleChange(e) {
        const newData = {...data};
        newData[e.target.name] = e.target.value;
        //setData(newData)
    }

    return <FormU {...{data, handleChange, handleSubmit}}/>

})