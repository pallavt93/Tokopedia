import React from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions/productsActions';
import ProductItem from './ProductItem';

class ProductsList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            productPage: 1
        }
        this.handleLoadMore = this.handleLoadMore.bind(this);
    }
    componentDidMount(){
        console.log(this.props.products);
        if(this.props.products.length === 0 ){
            this.props.fetchProducts(this.state.productPage);
            this.setState((prevState)=>({ productPage: prevState.productPage + 1 }));
        }else{
            this.setState((prevState)=>({ productPage: prevState.productPage + 1 }));
        }
        
    }
    renderProducts(){
        return this.props.products.map( product => {
            return (
                <ProductItem product={product} key={product.id}/>
            );
        });
    }
    handleLoadMore() {
        console.log("page Number =", this.state.productPage);
        this.props.fetchProducts(this.state.productPage);
        this.setState((prevState)=>({ productPage: prevState.productPage + 1 }));
    }
    render(){
        return (
            <div>
                {this.renderProducts()}
                <button onClick = {this.handleLoadMore}>Load More</button>
            </div>
        );
    }
}

function mapStateToProps(state){
    return { products: state.products }
}

export default connect(mapStateToProps, { fetchProducts })(ProductsList);