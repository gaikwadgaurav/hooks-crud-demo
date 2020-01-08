import React from "react";
import {Nav} from "react-bootstrap";
import {Link} from "react-router-dom";

export default function NavBar() {
    return (

        <Nav variant="pills" defaultActiveKey="/list">
            <Nav.Item>
                <Link componentclass={Link} href="/home" to="/home" eventkey="1">Home</Link>
            </Nav.Item>
            <Nav.Item>
                <Link componentclass={Link} href="/add" to="/add" eventkey="2">Add</Link>
            </Nav.Item>
            <Nav.Item>
                <Link componentclass={Link} href="/list" to="/list" eventkey="3">List</Link>
            </Nav.Item>
        </Nav>

    );
}

