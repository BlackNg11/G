import axios from "axios";
import { LOGIN_USER, LOGOUT_USER, REGISTER_USER, AUTH_USER } from "./types";
import { USER_SERVER } from "../component/utils/misc";

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
