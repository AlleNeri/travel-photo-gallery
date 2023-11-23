import { useState } from 'react';
import PhotoAlbum, { Photo } from 'react-photo-album'
import Lightbox from 'yet-another-react-lightbox';
import { Captions, Fullscreen, Slideshow, Thumbnails, Zoom } from 'yet-another-react-lightbox/plugins';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { ClipLoader } from 'react-spinners';

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
				renderPhoto={({ photo, layout }) => {
					const { src } = photo;
					const { width, height } = layout;
					return <div
						className='my-padding'
						onClick={()=> setIndex(layout.index)}
					>
						<LazyLoadImage
							placeholder={ <ClipLoader color='#fff' /> }
							src={src}
							width={width}
							height={height}
						/>
					</div>;
				}}
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
