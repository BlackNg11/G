import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./component/Home";
import Layout from "./hoc/layout";
import RegisterLogin from "./component/Register_login";
import Register from "./component/Register_login/register";
import UserDashboard from "./component/User";

function Routes() {
	return (
		<Layout>
			<Switch>
				<Route path="/user/dashboard" exact component={UserDashboard} />
				<Route path="/register" exact component={Register} />
				<Route path="/register_login" exact component={RegisterLogin} />
				<Route path="/" exact component={Home} />
			</Switch>
		</Layout>
	);
}

export default Routes;
