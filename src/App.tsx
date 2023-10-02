import { createBrowserRouter,  RouterProvider } from 'react-router-dom'

import Header from './components/header/header';
import Barcellona from './components/barcellona/barcellona';

import './App.css';

const routes = createBrowserRouter([
	{
		path: '/',
		element: <Header />,
		children: [
			{ path: '/barcellona', element: <Barcellona /> },
		],
	},
]);

function App() {
	return <>
		<RouterProvider router={routes} />
	</>;
}

export default App
