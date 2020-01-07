import React, { useEffect, useState } from 'react';
import Axios from "axios";
import Home from "./Home";
export default function ListComp(props) {

    //Setting url constant
    const getID = "http://192.168.0.158:4500/api/v1/user/list";

    //Duplicate Object for response data
    //const [ list, setList ] = useState([]);

    //Setting State
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: ""
    });

    //Fetching the data through Get Method
    useEffect(() => {
        Axios.get(getID)
            //Axios.get('http://192.168.0.158:4500/api/v1/user/list')
            .then(res => {
                setData(res.data);
                console.log(res.data)
            })
            .catch()
    }, []);

    //Displaying List
    const renderTable = () =>{
        return data.map(list =>{
            return(
                <tr>

                </tr>
            )
        })
    }

    return(<Home {...{ data }} />
    );

}