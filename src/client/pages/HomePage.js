import React from 'react';
import { fetchProducts } from '../actions/productsActions';
import ProductsList from '../components/ProductsList';
import ProductsCarousel from '../components/ProductsCarousel';

const HomePage = () => {
    return (
        <div>
            <ProductsCarousel />
            <ProductsList />
        </div>
    );
};

function loadData(store) {
    return store.dispatch(fetchProducts());
}

export default {
    loadData,
    component: HomePage
}