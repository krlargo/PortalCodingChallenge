import { Variant } from "./Variant";

export interface Item {
	id: string;
	name: string;
	description: string;
	variants: Variant[];
	imageUrls: { url: string }[];
}