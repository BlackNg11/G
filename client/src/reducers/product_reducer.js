import {
	GET_PRODUCTS_BY_SELL,
	GET_PRODUCTS_BY_ARRIVAL,
	ADD_BRAND,
	GET_BRANDS,
	ADD_WOOD,
	GET_WOODS,
	GET_PRODUCTS_TO_SHOP,
	ADD_PRODUCT,
	CLEAR_PRODUCT,
} from "../action/types";

export default function (state = {}, action) {
	switch (action.type) {
		case GET_PRODUCTS_BY_SELL:
			return { ...state, bySell: action.payload };
			break;
		case GET_PRODUCTS_BY_ARRIVAL:
			return { ...state, byArrival: action.payload };
			break;
		case GET_PRODUCTS_TO_SHOP:
			return {
				...state,
				toShop: action.payload.articles,
				toShopSize: action.payload.size,
			};
			break;
		case GET_BRANDS:
			return { ...state, brands: action.payload };
			break;
		case ADD_BRAND:
			return {
				...state,
				addBrand: action.payload.success,
				brands: action.payload.brands,
			};
			break;
		case GET_WOODS:
			return { ...state, woods: action.payload };
			break;
		case ADD_WOOD:
			return {
				...state,
				addWood: action.payload.success,
				woods: action.payload.woods,
			};
			break;
		case ADD_PRODUCT:
			return { ...state, addProduct: action.payload };
			break;
		case CLEAR_PRODUCT:
			return { ...state, addProduct: action.payload };
			break;
		default:
			return state;
			break;
	}
}
