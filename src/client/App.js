import React from 'react';
import { connect } from 'react-redux';
import Header from './components/Header';
import Footer from './components/Footer';
import { renderRoutes } from 'react-router-config';
import { fetchInitialAppData } from '../client/actions/appActions';

const App = ( { route, initialAppData} ) => {
    return (
        <div>
            <Header logo={initialAppData.logo}/>
            {renderRoutes(route.routes)}
            <Footer />
        </div>
    );
};

function mapStateToProps(state){
    return { initialAppData: state.initialAppData }
}

function loadData(store) {
    return store.dispatch(fetchInitialAppData());
}

export default {
    loadData,
    component: connect(mapStateToProps, { fetchInitialAppData })(App)
}




