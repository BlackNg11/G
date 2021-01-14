import React from "react";
import UserLayout from "../../hoc/user";
import MyButton from "../utils/button";

export class UserDashbord extends React.Component {
	render() {
		return (
			<UserLayout>
				<div>
					<div className="user_nfo_panel">
						<h1>User infomation</h1>
						<div>
							<span>name</span>
							<span>lastname</span>
							<span>email</span>
						</div>
						<MyButton
							type="default"
							title="Edit account info"
							linkTo="/user/user_profile"
						/>
					</div>
					<div className="user_nfo_panel">
						<h1>History pruchases</h1>
						<div className="user_product_block_wrapper">
							history
						</div>
					</div>
				</div>
			</UserLayout>
		);
	}
}

export default UserDashbord;
