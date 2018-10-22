
import React from 'react';
import { Route, Switch,	BrowserRouter } from 'react-router-dom';


import App from './components/app/App'; // Componente Principal
import Login from './components/login';
import Menu from './components/menu'; 
// import Page404 from './components/page404';

const AppRoutes = () => {
	return (
	<App>
		<BrowserRouter basename = { process.env.PUBLIC_URL }>
			<Switch>
				<Route path = '/' component = { Login } exact />
				<Route path = '/menu' component = { Menu } exact />
				{/* <Route component = { Page404 } /> */}
			</Switch>
		</BrowserRouter>
	</App>
	)
}

export default AppRoutes;