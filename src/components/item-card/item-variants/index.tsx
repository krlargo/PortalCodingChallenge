import React from "react";
import * as Mui from "@material-ui/core";
import { Variant } from "../../../model/Variant";


interface Props {
    variants: Variant[];
  }
  
  export const ItemVariants: React.FC<Props> = (props) => {
	const { variants } = props;
	return (
		<>
			{variants.slice(0, 4).map((variant, index) => (
				<Mui.Typography key={variant.id}>{`Item ${index + 1} - ${
					variant.name
				}`}</Mui.Typography>
			))}
			{variants.length > 4 && (
				<Mui.Typography>{`... plus ${
					variants.length - 4
				} more`}</Mui.Typography>
			)}
		</>
	);
  };