import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <>
            <Nav variant="pills" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link componentclass={Link} href="/home" to="/home" eventKey="1">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link componentclass={Link} href="/add" to="/add" eventKey="2">Add</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link componentclass={Link} href="/list" to="/list" eventKey="3" >List</Nav.Link>
                </Nav.Item>
            </Nav>
        </>
    );
}

