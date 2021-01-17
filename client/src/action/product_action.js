import axios from "axios";
import {
	GET_PRODUCTS_BY_SELL,
	GET_PRODUCTS_BY_ARRIVAL,
	GET_BRANDS,
	GET_WOODS,
} from "./types";
import { PRODUCT_SERVER } from "../component/utils/misc";

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

export async function getWoods() {
	//articles?sortBy=sold&order=desc&limit=100&skip=5
	const resquest = await axios.get(`${PRODUCT_SERVER}/woods`);

	return {
		type: GET_WOODS,
		payload: resquest.data,
	};
}
