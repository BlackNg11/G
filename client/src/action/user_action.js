import axios from "axios";
import {
	LOGIN_USER,
	LOGOUT_USER,
	REGISTER_USER,
	AUTH_USER,
	ADD_TO_CART_USER,
	GET_CART_ITEMS_USER,
} from "./types";
import { USER_SERVER, PRODUCT_SERVER } from "../component/utils/misc";

export function registerUser(dataToSubmit) {
	const resquest = axios
		.post(`${USER_SERVER}/register`, dataToSubmit)
		.then((response) => response.data);

	return {
		type: REGISTER_USER,
		payload: resquest,
	};
}

export function loginUser(dataToSubmit) {
	const resquest = axios
		.post(`${USER_SERVER}/login`, dataToSubmit)
		.then((response) => response.data);

	return {
		type: LOGIN_USER,
		payload: resquest,
	};
}

export function auth() {
	const resquest = axios
		.get(`${USER_SERVER}/auth`)
		.then((response) => response.data);

	return {
		type: AUTH_USER,
		payload: resquest,
	};
}

export function logoutUser() {
	const resquest = axios
		.get(`${USER_SERVER}/logout`)
		.then((response) => response.data);

	return {
		type: LOGOUT_USER,
		payload: resquest,
	};
}

export function addToCart(_id) {
	const resquest = axios
		.post(`${USER_SERVER}/addToCart?productId=${_id}`)
		.then((response) => response.data);

	return {
		type: ADD_TO_CART_USER,
		payload: resquest,
	};
}

export function getCartItems(cartItems, userCart) {
	const resquest = axios
		.get(`${PRODUCT_SERVER}/articles_by_id?id=${cartItems}&type=array`)
		.then((response) => {
			console.log(response);
			userCart.forEach((item) => {
				response.data.forEach((k, i) => {
					if (item.id === k._id) {
						response.data[i].quantity = item.quantity;
					}
				});
			});
			return response.data;
		});

	return {
		type: GET_CART_ITEMS_USER,
		payload: resquest,
	};
}
