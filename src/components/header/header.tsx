//create a header component
import { Link, Outlet } from 'react-router-dom';
import './header.css';

const Header = () => {
	return <>
		<header className='header'>
			<Link to='/' className='title-link'>
				<h1 className='title'>Album delle fotine</h1>
			</Link>
		</header>
		<Outlet />
	</>;
};

export default Header;
