import React, {memo, useEffect, useState,} from 'react';
import Axios from "axios";
import {Button} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import Table from "react-bootstrap/Table";

export default  memo(({props})=> {
    let history = useHistory();
    //Setting url constant
    const getID = "http://192.168.0.158:5000/api/v1/user/list";


    //Setting State
    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });


    //Fetching the data through Get Method
    useEffect(() => {
        Axios.get(getID)
            //Axios.get('http://192.168.0.176:4500/api/v1/user/list')
            .then(res => {
                setData(res.data);
                console.log(res.data)
            })
            .catch()
    }, []);

    //Displaying List
    const renderTable = data.length > 0 && data.map((list, index) => {
        return (
            <tr key={index}>
                <td>{list.firstName}</td>
                <td>{list.lastName}</td>
                <td>{list.email}</td>
                <td><Button onClick={() => Update(list)} className="btnUpdate" variant="success"/></td>
                <td><Button onClick={() => remove(list._id)} className="btnDelete" variant="danger"/></td>
            </tr>
        )
    })

    function Update(list) {
        // console.log(list);
        history.push("/edit", {list})
    }

    const deleteUrl = 'http://192.168.0.158:5000/api/v1/user/';

    function remove(id) {

        Axios.delete(deleteUrl + id)
            .then(res => {
                console.log(res)
                if(res.status===200)
                {
                    let cloneData=data
                    console.log('before', cloneData)
               const filterIdIndex = cloneData.findIndex(user => user._id === id)
                    console.log(filterIdIndex)
                    cloneData.splice(filterIdIndex,1)
                    console.log('after', cloneData)
                setData(cloneData)
                    console.log('before', data
                    )
                }
            })
            .catch(err => console.log(err))
    }

    return (<Table striped bordered hover>
            <thead>
            <tr>

                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Update</th>
                <th>Delete</th>


            </tr>
            </thead>
            <tbody>
            {renderTable}
            </tbody>
        </Table>
    );

})