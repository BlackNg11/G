import {
	LOGIN_USER,
	LOGOUT_USER,
	REGISTER_USER,
	AUTH_USER,
	ADD_TO_CART_USER,
	GET_CART_ITEMS_USER,
} from "../action/types";

export default function (state = {}, action) {
	switch (action.type) {
		case LOGIN_USER:
			return { ...state, loginSucces: action.payload };
			break;
		case REGISTER_USER:
			return { ...state, register: action.payload };
			break;
		case AUTH_USER:
			return { ...state, userData: action.payload };
			break;
		case LOGOUT_USER:
			return { ...state };
			break;
		case ADD_TO_CART_USER:
			return {
				...state,
				userData: {
					...state.userData,
					cart: action.payload,
				},
			};
			break;
		case GET_CART_ITEMS_USER:
			return {
				...state,
				cartDetail: action.payload,
			};
		default:
			return state;
			break;
	}
}
