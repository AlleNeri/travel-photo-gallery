import { Link } from 'react-router-dom';

import HeartLogo from '../../assets/heart.svg';

import "./home.css"

const Home = () => {
	return <>
		<div className='home'>
			<div className='title-container'>
				<img src={HeartLogo} alt="heart SVG" className='svg-logo left-logo' />
				<h3 className='myTitle'>Le nostre vacanze assieme</h3>
				<img src={HeartLogo} alt="heart SVG" className='svg-logo right-logo' />
			</div>
			<ul>
				<li><Link to="/barcellona">Barcellona</Link></li>
				<li><Link to="/londra">Londra</Link></li>
			</ul>
		</div>
	</>;
};

export default Home;
