import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./component/Home";
import Layout from "./hoc/layout";
import RegisterLogin from "./component/Register_login";
import Register from "./component/Register_login/register";
import UserDashboard from "./component/User";
import Auth from "./hoc/auth";
import Shop from "./component/Shop";

function Routes() {
	return (
		<Layout>
			<Switch>
				<Route
					path="/user/dashboard"
					exact
					component={Auth(UserDashboard, true)}
				/>
				<Route
					path="/register"
					exact
					component={Auth(Register, false)}
				/>
				<Route
					path="/register_login"
					exact
					component={Auth(RegisterLogin, false)}
				/>
				<Route path="/shop" exact component={Auth(Shop, null)} />
				<Route path="/" exact component={Auth(Home, null)} />
			</Switch>
		</Layout>
	);
}

export default Routes;
