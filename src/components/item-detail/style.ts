import * as Mui from "@material-ui/core";

export const useStyles = Mui.makeStyles({
	appBar: {
		margin: -5,
		width: "100vw",
	},
	backLabel: {
		fontWeight: "bold",
	},
	container: {
		margin: "20px auto",
		maxWidth: 1200,
	},
	imageContainer: {
		alignItems: "center",
		display: "flex",
		justifyContent: "center",
	},
	itemName: {
		fontWeight: "bold",
	},
});