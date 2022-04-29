import * as Mui from "@material-ui/core";

export const useStyles = Mui.makeStyles({
	card: {
		height: "100%",
		position: "relative",
	},
	cardContent: {
		display: "flex",
		flex: 1,
		flexDirection: "column",
	},
	description: {
		marginBottom: 30,
	},
	name: {
		fontWeight: "bold",
	},
	price: {
		bottom: 0,
		color: "#46ad78",
		fontSize: 30,
		fontWeight: "bold",
		position: "absolute",
	},
});