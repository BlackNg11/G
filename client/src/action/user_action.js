import axios from "axios";
import { LOGIN_USER, REGISTER_USER } from "./types";
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
