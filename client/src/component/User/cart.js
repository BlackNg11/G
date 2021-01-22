import React from "react";
import { connect } from "react-redux";
import { getCartItems } from "../../action/user_action";

import UserLayout from "../../hoc/user";
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
		let cartItem = [];
		let user = this.props.user;

		if (user.userData.card) {
			if (user.userData.card.length > 0) {
				user.userData.card.forEach((item) => {
					cartItem.push(item.id);
				});

				this.props
					.dispatch(getCartItems(cartItem, user.userData.card))
					.then(() => {});
			}
		}
	}

	render() {
		return (
			<UserLayout>
				<div>Cart</div>
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
