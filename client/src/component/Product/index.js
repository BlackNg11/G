import React from "react";
import PageTop from "../utils/page_top";
import { connect } from "react-redux";
import {
	getProductDetail,
	clearProductDetail,
} from "../../action/product_action";
import ProdNfo from "./prodNfo";
import ProdImg from "./prodimg";

class Product extends React.Component {
	componentDidMount() {
		const id = this.props.match.params.id;
		this.props.dispatch(getProductDetail(id)).then((response) => {
			if (!this.props.products.prodDetail) {
				this.props.history.push("/");
			}
		});
	}

	componentWillMount() {
		this.props.dispatch(clearProductDetail());
	}

	render() {
		return (
			<div>
				<PageTop title="Product detail" />
				<div className="container">
					{this.props.products.prodDetail ? (
						<div className="product_detail_wrapper">
							<div className="left">
								<div style={{ width: "500px" }}>
									<ProdImg
										detail={this.props.products.prodDetail}
									/>
								</div>
							</div>
							<div className="right">
								{
									<ProdNfo
										detail={this.props.products.prodDetail}
										addToCard={(id) =>
											this.addToCartHandler()
										}
									/>
								}
							</div>
						</div>
					) : (
						"Loading"
					)}
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		products: state.products,
	};
};

export default connect(mapStateToProps)(Product);
