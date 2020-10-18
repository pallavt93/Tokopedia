import React from 'react';
import { connect } from 'react-redux';
import Header from './components/Header';
import Footer from './components/Footer';
import { renderRoutes } from 'react-router-config';
import { fetchInitialAppData } from '../client/actions/appActions';
import { Container } from 'react-bootstrap';

const App = ( { route, history, initialAppData} ) => {
    return (
        <div>
            <Header logo={initialAppData.logo} history={history} />
            <Container>
                {renderRoutes(route.routes)}
            </Container>
            <Footer />
        </div>
    );
};

function mapStateToProps(state){
    return { initialAppData: state.initialAppData }
}

function loadData(store, match) {
    return store.dispatch(fetchInitialAppData());
}

export default {
    loadData,
    component: connect(mapStateToProps, { fetchInitialAppData })(App)
}




