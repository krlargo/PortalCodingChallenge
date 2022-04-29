import React from "react";
import * as Mui from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { ItemVariants } from "./item-variants";
import { useStyles } from "./style";
import { Item } from "../../model/Item";

interface Props {
	item: Item;
}

export const ItemCard: React.FC<Props> = (props) => {
	const { item } = props;
  	const classes = useStyles();
	const navigate = useNavigate();
	const [hovered, setHovered] = React.useState(false)

	const imageUrl = item.imageUrls[0].url;

	const handleClick = React.useCallback(() => {
		const url = `/items/${item.id}`;
		navigate(url);
	}, [navigate]);

	const renderItemContent = () => (
		<div className={classes.opacityContainer}>
			<Mui.Fade appear in={hovered}>
				<div className={classes.itemContent}>
					<Mui.CardContent className={classes.cardContent}>
						<Mui.Typography className={classes.name}>
							{item.name}
						</Mui.Typography>
						<ItemVariants variants={item.variants} />
					</Mui.CardContent>
					<div className={classes.buttonContainer}>
						<Mui.Button
							className={classes.button}
							color="primary"
							onClick={handleClick}
							variant="contained"
						>
							<Mui.Typography>Select</Mui.Typography>
						</Mui.Button>
					</div>
				</div>
			</Mui.Fade>
		</div>
	);

	return (
		<Mui.Grid
			alignItems="center"
			container
			direction="column"
			justifyContent="center"
			spacing={1}
		>
			<Mui.Grid item xs={12}>
				<Mui.Card
					className={classes.card}
					onMouseEnter={() => setHovered(true)}
					onMouseLeave={() => setHovered(false)}
				>
					<img src={imageUrl} />
					{renderItemContent()}
				</Mui.Card>
			</Mui.Grid>
			<Mui.Grid item xs={12}>
				<Mui.Typography className={classes.footerText}>
					{item.name}
				</Mui.Typography>
			</Mui.Grid>
		</Mui.Grid>
	);
};
