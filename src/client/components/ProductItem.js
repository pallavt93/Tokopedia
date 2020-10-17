import React from 'react';

class ProductItem extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        let product = this.props.product;
        return (
            <div>
                    <img src={product.img} alt={product.name}/>
                    <p>Name: {product.name}</p>
                    <p>Price: Rs.{product.price}</p>
            </div>
        );
    }
}

export default ProductItem;