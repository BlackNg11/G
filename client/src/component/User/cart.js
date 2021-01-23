import React from "react";
import { connect } from "react-redux";
import { getCartItems, removeCartItem } from "../../action/user_action";

import UserLayout from "../../hoc/user";
import UserProductBlock from "../utils/User/product_block";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faFrown from "@fortawesome/fontawesome-free-solid/faFrown";
import faSmile from "@fortawesome/fontawesome-free-solid/faSmile";

class UserCart extends React.Component {
	state = {
		loading: true,
		total: 0,
		showTotal: false,
		showSuccess: false,
	};

	componentDidMount() {
		let cartItems = [];
		let user = this.props.user;

		if (user.userData.card) {
			if (user.userData.card.length > 0) {
				user.userData.card.forEach((item) => {
					cartItems.push(item.id);
				});

				this.props
					.dispatch(getCartItems(cartItems, user.userData.card))
					.then(() => {
						if (this.props.user.cartDetail.length > 0) {
							this.calculateTotal(this.props.user.cartDetail);
						}
					});
			}
		}
	}

	calculateTotal = (cartDetail) => {
		let total = 0;

		cartDetail.forEach((item) => {
			total += parseInt(item.price, 10) * item.quantity;
		});

		this.setState({
			total,
			showTotal: true,
		});
	};

	showNoItemMessage = () => (
		<div className="cart_no_items">
			<FontAwesomeIcon icon={faFrown} />
			<div>You have no items</div>
		</div>
	);

	removeCart = (id) => {
		this.props.dispatch(removeCartItem(id)).then(() => {
			if (this.props.user.cartDetail.length <= 0) {
				this.setState({
					showTotal: false,
				});
			} else {
				this.calculateTotal(this.props.user.cartDetail);
			}
		});
	};

	render() {
		return (
			<UserLayout>
				<div>My Cart</div>
				<div className="user_cart">
					<UserProductBlock
						products={this.props.user}
						type="cart"
						removeItem={(id) => this.removeCart()}
					/>
					{this.state.showTotal ? (
						<div>
							<div className="user_cart_sum">
								<div>Total amount: $ {this.state.total}</div>
							</div>
						</div>
					) : this.state.showSuccess ? (
						<div className="cart_success">
							<FontAwesomeIcon icon={faSmile} />
							<div>Thank You </div>
							<div>You order is now complete</div>
						</div>
					) : (
						this.showNoItemMessage()
					)}
				</div>
				{this.state.showTotal ? (
					<div className="paypal_button_container">Paypal</div>
				) : null}
			</UserLayout>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		user: state.user,
	};
};

export default connect(mapStateToProps)(UserCart);
