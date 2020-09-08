import React from 'react';


const Home = React.lazy(() => import('./components/Home/Home'))
const Dress = React.lazy(() => import('./components/Dress/Dress'))


const routes = [
    { path: '/home', exact: true, name: 'Home', component: Home },
    { path: '/dress', exact: true, name: 'dress', component: Dress },
]

export default routes