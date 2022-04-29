import { Item } from "../model/Item";

const itemsResourceUrl = "http://localhost:3001/items/";

export const getItems = (callback: (data: Item[]) => void) => {
	return fetch(itemsResourceUrl)
		.then((response) => response.json())
		.then((data) => callback(data));
};

export const getItem = (id: string, callback: (data: Item) => void) => {
	return fetch(itemsResourceUrl + id)
		.then((response) => response.json())
		.then((data) => callback(data));
};