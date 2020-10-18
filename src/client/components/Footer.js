import React from 'react';
import Container from 'react-bootstrap/Container'


const Footer = () => {
    return (
        <>
            <div style={{background:'grey', height:200, position:"relative", bottom:0}}>
                <div style={{position:"absolute", bottom:0}}>
                    <p>this is footer</p>
                </div>
            </div>
            
        </>
    );
}

export default Footer;