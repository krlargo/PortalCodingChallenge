import React from "react";
import * as Mui from "@material-ui/core";
import { FiChevronLeft } from "react-icons/all";
import { useNavigate, useParams } from "react-router-dom";
import { useStyles } from "./style";
import { getItem } from "data";
import { ItemVariantCard } from "./item-variant-card";
import { Item } from "../../model/Item";


export const ItemDetail: React.FC = () => {
    const classes = useStyles();
	const params = useParams();
	const navigate = useNavigate();
	const [item, setItem] = React.useState<Item | null>(null)

	React.useEffect(() => {
		if (params && params.id) {
			getItem(params.id, setItem);
		}
	}, [params])

	if (!item) {
		return <Mui.CircularProgress />;
	} else {
		const renderNavigationBar = () => {
			return (
				<Mui.AppBar className={classes.appBar} position="static">
					<Mui.Toolbar variant="dense">
						<Mui.Button
							className={classes.backLabel}
							onClick={() => navigate("/")}
						>
							<>
								<FiChevronLeft size={24} /> Back to Marketplace
							</>
						</Mui.Button>
					</Mui.Toolbar>
				</Mui.AppBar>
			);
		};

		const renderImage = () => {
			const imageUrl = item.imageUrls[0].url;
			return <img src={imageUrl} />;
		};

		const renderInfo = () => {
			return (
				<>
					<Mui.Typography className={classes.itemName}>
						{item.name}
					</Mui.Typography>
					<Mui.Typography>{item.description}</Mui.Typography>
				</>
			);
		};

		const renderVariants = () => {
			return (
				<Mui.Grid container spacing={2}>
					{item.variants.map((variant) => (
						<Mui.Grid item xs={6} sm={4} md={3} lg={6} key={variant.id}>
							<ItemVariantCard variant={variant} />
						</Mui.Grid>
					))}
				</Mui.Grid>
			);
		};

		return (
			<>
				{renderNavigationBar()}
				<Mui.Grid container className={classes.container} spacing={4}>
					<Mui.Grid
						item
						sm={12}
						lg={5}
						className={classes.imageContainer}
					>
						{renderImage()}
					</Mui.Grid>
					<Mui.Grid container item sm={12} lg={7} spacing={2}>
						<Mui.Grid item xs={12}>
							{renderInfo()}
						</Mui.Grid>
						<Mui.Grid item xs={12}>
							{renderVariants()}
						</Mui.Grid>
					</Mui.Grid>
				</Mui.Grid>
			</>
		);
	}
}