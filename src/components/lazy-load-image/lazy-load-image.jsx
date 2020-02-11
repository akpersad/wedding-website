import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import PropTypes from "prop-types";

const MyImage = ({ image }) => (
	<div>
		<LazyLoadImage
			alt={image.alt}
			height={image.height}
			src={image.src} // use normal <img> attributes as props
			width={image.width}
		/>
		<span>{image.caption}</span>
	</div>
);

MyImage.propTypes = {
	image: PropTypes.object.isRequired
};

export default MyImage;
