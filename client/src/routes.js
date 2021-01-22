import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./component/Home";
import Layout from "./hoc/layout";
import RegisterLogin from "./component/Register_login";
import Register from "./component/Register_login/register";
import UserDashboard from "./component/User";
import Auth from "./hoc/auth";
import Shop from "./component/Shop";
import AddProduct from "./component/User/Admin/add_product";
import ManageCategories from "./component/User/Admin/manage_categori";
import ProductPage from "./component/Product";
import UserCart from "./component/User/cart";

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
					path="/user/cart"
					exact
					component={Auth(UserCart, true)}
				/>
				<Route
					path="/admin/add_product"
					exact
					component={Auth(AddProduct, true)}
				/>
				<Route
					path="/admin/manage_categories"
					exact
					component={Auth(ManageCategories, true)}
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
				<Route
					path="/product_detail/:id"
					exact
					component={Auth(ProductPage, null)}
				/>
				<Route path="/shop" exact component={Auth(Shop, null)} />
				<Route path="/" exact component={Auth(Home, null)} />
			</Switch>
		</Layout>
	);
}

export default Routes;
