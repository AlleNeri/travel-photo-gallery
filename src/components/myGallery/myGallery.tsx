import { useState } from 'react';
import PhotoAlbum, { Photo } from 'react-photo-album'
import Lightbox from 'yet-another-react-lightbox';
import { Captions, Fullscreen, Slideshow, Thumbnails, Zoom } from 'yet-another-react-lightbox/plugins';

import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import 'yet-another-react-lightbox/plugins/captions.css';

import './myGallery.css';

const MyGallery = (props: { photos: Photo[] }) => {
	const { photos } = props;
	const [index, setIndex] = useState(-1);

	return <>
		<div className='middle'>
			<PhotoAlbum
				photos={photos}
				layout='masonry'
				onClick={({ index }) => setIndex(index)}
			/>
		</div>
		<Lightbox
			slides={photos}
			open={index >= 0}
			index={index}
			close={() => setIndex(-1)}
			plugins={[ Captions, Fullscreen, Slideshow, Thumbnails, Zoom ]}
		/>
	</>;
};

export default MyGallery;
