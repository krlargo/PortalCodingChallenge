import React from "react";
import * as Mui from "@material-ui/core";
import { useStyles } from "./style";
import { ItemCard } from "../item-card";
import { getItems } from "../../data";
import { Item } from "../../model/Item";


export const ItemList: React.FC = () => {
	const classes = useStyles();
	const [items, setItems] = React.useState<Item[]>([])
	React.useEffect(() => {
		getItems(setItems);
	}, []);

	return (
		<div className={classes.container}>
			<Mui.Grid
				container
				direction="row"
				justifyContent="center"
				spacing={2}
			>
				{items.map((item) => (
					<Mui.Grid item key={item.id}>
						<ItemCard item={item} />
					</Mui.Grid>
				))}
			</Mui.Grid>
		</div>
	);
};