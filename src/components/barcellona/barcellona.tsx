import MyGallery from '../myGallery/myGallery';

import photos from './photos';

import MapLogo from '../../assets/map.svg';

const Barcellona = () => {
	return <>
		<div className='title-container'>
			<h3 className='myTitle'>La nostra prima vacanza: Barcellona</h3>
			<img src={MapLogo} alt="heart SVG" className='svg-logo' />
		</div>
		<MyGallery photos={photos} />;
	</>;
};

export default Barcellona;
