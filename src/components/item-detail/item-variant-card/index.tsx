import React from "react";
import * as Mui from "@material-ui/core";
import { useStyles } from "./style";
import { Variant } from "../../../model/Variant";

interface Props {
    variant: Variant;
}

export const ItemVariantCard: React.FC<Props> = (props) => {
    const { variant } = props;
    const classes = useStyles();
    return (
		<Mui.Card className={classes.card}>
			<Mui.CardContent className={classes.cardContent}>
				<Mui.Typography className={classes.name}>
					{variant.name}
				</Mui.Typography>
				<Mui.Typography className={classes.description}>{variant.description}</Mui.Typography>
				<Mui.Typography className={classes.price}>
					${new Intl.NumberFormat("en-IN", {}).format(variant.price)}
				</Mui.Typography>
			</Mui.CardContent>
		</Mui.Card>
	);
}