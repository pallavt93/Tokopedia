import App from './App';
import HomePage from './pages/HomePage';
import ProductDiscriptionPage from './pages/ProductDiscriptionPage';

export default [
    {
        ...App,
        routes: [
            {
                ...HomePage,
                path: '/',
                exact: true
            }
        ]
    }
];