import React from "react";
import LightBox from "react-images";

class ImagelightBox extends React.Component {
	state = {
		lightboxIsOpen: true,
		currentImage: this.props.pos,
		images: [],
	};

	static getDerivedStateFormProps(props, state) {
		if (props.images) {
			const images = [];
			props.images.forEach((element) => {
				images.push({
					src: `${element}`,
				});
			});

			return (state = {
				images,
			});
		}

		return false;
	}

	closeLightbox = () => {
		this.props.onclose();
	};

	gotoPrevious = () => {
		this.setState({
			currentImage: this.state.currentImage - 1,
		});
	};

	gotoNext = () => {
		this.setState({
			currentImage: this.state.currentImage + 1,
		});
	};

	render() {
		return (
			<LightBox
				currentImage={this.state.currentImage}
				images={this.state.images}
				isOpen={this.state.lightboxIsOpen}
				onClickPrev={() => this.gotoPrevious()}
				onClickNext={() => this.gotoNext()}
				onClose={() => this.closeLightbox()}
			/>
		);
	}
}

export default ImagelightBox;
