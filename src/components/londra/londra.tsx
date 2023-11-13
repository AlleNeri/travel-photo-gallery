import MyGallery from '../myGallery/myGallery';

import photos from './photos';

import MapLogo from '../../assets/globe.svg';

const Londra = () => {
	return <>
		<div className='title-container'>
			<h3 className='myTitle'>La sciagurata vacanza: Londra</h3>
			<img src={MapLogo} alt="heart SVG" className='svg-logo' />
		</div>
		<MyGallery photos={photos} />;
		<div className='text-container'>
			<p>PS: anche se sciagurata è stato bellissimo perchè eravamo assieme.</p>
		</div>
	</>;
};

export default Londra;
