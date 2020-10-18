import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import { Button } from 'react-bootstrap';

export default (props) => {
    let history = props.history;
    return (
        <div>
            <Navbar bg="dark">
                <Navbar.Brand href="/">
                    <img
                        src={props.logo}
                        width="100"
                        height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                { history.location.pathname !== "/" ? <Button type="bg-dark" onClick={()=>{ history.push("/") }}>Back</Button>: null }
            </Navbar>
        </div>
    );
};
