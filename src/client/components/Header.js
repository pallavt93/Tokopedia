import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
    return (
        <div style={{background:"black"}}>
            <Link to="/">back</Link>
            <img src={props.logo} alt="logo"/>
        </div>
    );
};