import React from "react";
import {Button, Form} from "react-bootstrap";

export default function FormU({data, name, handleChange, handleSubmit}) {
    return (<div className="container-md">
        <Form onSubmit={handleSubmit}>
            {
                Object.keys(data).map((fieldNames, index) => {
                    // console.log(fieldNames)
                    if (fieldNames !== '__v' && fieldNames !== '_id') {
                        return (

                            <Form.Group controlId={`formGroup${fieldNames}`} key={index}>
                                <Form.Label> {fieldNames} </Form.Label>
                                <Form.Control
                                    name={fieldNames}
                                    onChange={e => handleChange(e)}
                                    value={Object.values(data)[index]}
                                    type="text"
                                    placeholder={`Enter ${fieldNames}`}/>
                            </Form.Group>
                        );
                    }
                })
            }
            <Button className="button"
                    variant="primary"
                    type="submit"
            >{name}</Button>
        </Form>
    </div>);
}
