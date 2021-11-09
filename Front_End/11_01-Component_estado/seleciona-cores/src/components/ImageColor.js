import React from 'react';
import image from '../trybe.png'

class ImageColor extends React.Component {

	render() {
		const {imageColor, nameColor} = this.props;
		return (
			<figure style={{backgroundColor: imageColor}}> 
				<p>{nameColor}</p>
				<img src={image} alt="logo"/>
			</figure>   
    );
	}
}

export default ImageColor;
