import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const ProductDetails = (props) => {
    let product = props.product;
    return (
        <Container>
            <Row className="justify-content-md-center" md={{cols:2, noGutters:false}}>
                <Col md={{span:2}} ><Image src={product.img} fluid rounded /></Col>
                <Col md={{span:10}} >
                    <Row>
                        <Col md={{span:2}}><div style={{fontWeight: 600}}>Name</div></Col>
                        <Col md={{span:10}}>{product.name}</Col>
                    </Row>
                    <Row>
                        <Col md={{span:2}}><div style={{fontWeight: 600}}>Rating</div></Col>
                        <Col md={{span:10}}>{product.rating}</Col>
                    </Row>
                    <Row>
                        <Col md={{span:2}}><div style={{fontWeight: 600}}>Price</div></Col>
                        <Col md={{span:10}}>{product.price}</Col>
                    </Row>
                    <Row>
                        <Col md={{span:2}}><div style={{fontWeight: 600}}>Description</div></Col>
                        <Col md={{span:10}}>{product.description}</Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default ProductDetails;