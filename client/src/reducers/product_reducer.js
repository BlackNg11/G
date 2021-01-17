import {
	GET_PRODUCTS_BY_SELL,
	GET_PRODUCTS_BY_ARRIVAL,
	GET_BRANDS,
	GET_WOODS,
} from "../action/types";

export default function (state = {}, action) {
	switch (action.type) {
		case GET_PRODUCTS_BY_SELL:
			return { ...state, bySell: action.payload };
			break;
		case GET_PRODUCTS_BY_ARRIVAL:
			return { ...state, byArrival: action.payload };
			break;
		case GET_BRANDS:
			return { ...state, brands: action.payload };
			break;
		case GET_WOODS:
			return { ...state, woods: action.payload };
			break;
		default:
			return state;
			break;
	}
}