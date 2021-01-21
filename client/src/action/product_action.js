import axios from "axios";
import {
	GET_PRODUCTS_BY_SELL,
	GET_PRODUCTS_BY_ARRIVAL,
	GET_BRANDS,
	ADD_BRAND,
	GET_WOODS,
	ADD_WOOD,
	GET_PRODUCTS_TO_SHOP,
	ADD_PRODUCT,
	CLEAR_PRODUCT,
	GET_PRODUCT_DETAIL,
	CLEAR_PRODUCT_DETAIL,
} from "./types";
import { PRODUCT_SERVER } from "../component/utils/misc";

export async function getProductDetail(id) {
	const resquest = await axios.get(
		`${PRODUCT_SERVER}/articles_by_id?id=${id}&type=single`
	);

	return {
		type: GET_PRODUCT_DETAIL,
		payload: resquest.data[0],
	};
}

export function clearProductDetail() {
	return {
		type: CLEAR_PRODUCT_DETAIL,
		payload: "",
	};
}

export async function getProductsBySell() {
	//articles?sortBy=sold&order=desc&limit=100&skip=5
	const resquest = await axios.get(
		`${PRODUCT_SERVER}/articles?sortBy=sold&order=desc&limit=4`
	);

	return {
		type: GET_PRODUCTS_BY_SELL,
		payload: resquest.data,
	};
}

export async function getProductsByArrival() {
	//articles?sortBy=sold&order=desc&limit=100&skip=5
	const resquest = await axios.get(
		`${PRODUCT_SERVER}/articles?sortBy=createdAt&order=desc&limit=4`
	);

	return {
		type: GET_PRODUCTS_BY_ARRIVAL,
		payload: resquest.data,
	};
}

export function getProductsToShop(
	skip,
	limit,
	filters = [],
	previousState = []
) {
	const data = {
		limit,
		skip,
		filters,
	};

	const request = axios
		.post(`${PRODUCT_SERVER}/shop`, data)
		.then((response) => {
			let newState = [...previousState, ...response.data.articles];

			return {
				size: response.data.size,
				articles: newState,
			};
		});

	return {
		type: GET_PRODUCTS_TO_SHOP,
		payload: request,
	};
}

export async function addProduct(datatoSubmit) {
	const request = await axios.post(`${PRODUCT_SERVER}/article`, datatoSubmit);

	return {
		type: ADD_PRODUCT,
		payload: request.data,
	};
}

///////////////
//CATEGORIES
//////////////

export async function getBrands() {
	//articles?sortBy=sold&order=desc&limit=100&skip=5
	const resquest = await axios.get(`${PRODUCT_SERVER}/brand`);

	return {
		type: GET_BRANDS,
		payload: resquest.data,
	};
}

export function addBrand(dataToSubmit, existingBrands) {
	//articles?sortBy=sold&order=desc&limit=100&skip=5
	const resquest = axios
		.post(`${PRODUCT_SERVER}/brand`, dataToSubmit)
		.then((response) => {
			let brands = [...existingBrands, response.data.brand];

			return {
				success: response.data.succes,
				brands,
			};
		});

	return {
		type: ADD_BRAND,
		payload: resquest,
	};
}

export async function getWoods() {
	//articles?sortBy=sold&order=desc&limit=100&skip=5
	const resquest = await axios.get(`${PRODUCT_SERVER}/woods`);

	return {
		type: GET_WOODS,
		payload: resquest.data,
	};
}

export function addWood(dataToSubmit, existingWoods) {
	const request = axios
		.post(`${PRODUCT_SERVER}/wood`, dataToSubmit)
		.then((response) => {
			let woods = [...existingWoods, response.data.wood];
			return {
				success: response.data.success,
				woods,
			};
		});
	return {
		type: ADD_WOOD,
		payload: request,
	};
}

export async function clearProduct() {
	return {
		type: CLEAR_PRODUCT,
		payload: "",
	};
}
