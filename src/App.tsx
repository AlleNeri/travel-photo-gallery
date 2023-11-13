import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'

import Header from './components/header/header';
import Home from './components/home/home';
import Barcellona from './components/barcellona/barcellona';
import Londra from './components/londra/londra';

import './App.css';

const routes = createBrowserRouter([
	{ path: '/', element: <Navigate to="/home" /> },	//make inaccessible the / path
	{
		path: '/',
		element: <Header />,
		children: [
			{ path: '/home', element: <Home /> },
			{ path: '/barcellona', element: <Barcellona /> },
			{ path: '/londra', element: <Londra /> },
		],
	},
]);

function App() {
	return <>
		<RouterProvider router={routes} />
	</>;
}

export default App
