import axios from "axios";
import { GET_PRODUCTS_BY_SELL, GET_PRODUCTS_BY_ARRIVAL } from "./types";
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
