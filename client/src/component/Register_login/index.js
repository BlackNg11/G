import React from "react";
import MyButton from "../utils/button";
import Login from "./login";

function RegisterLogin() {
	return (
		<div className="page_wrapper">
			<div className="container">
				<div className="register_login_container">
					<div className="left">
						<h1>New Customers</h1>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing
							elit. Magnam quasi consequuntur temporibus
							laudantium quidem sint, minus animi cumque rem.
							Quisquam fugiat natus, adipisci cum dolores
							repudiandae tenetur quae culpa quis!
						</p>
						<MyButton
							type="default"
							title="Create an account"
							linkTo="/register"
							addStyle={{
								margin: "10px 0 0 0",
							}}
						/>
					</div>
					<div className="right">
						<h2>Registered customers</h2>
						<p>If you have an anccount please log in</p>
						<Login />
					</div>
				</div>
			</div>
		</div>
	);
}

export default RegisterLogin;
