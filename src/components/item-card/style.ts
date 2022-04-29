import * as Mui from "@material-ui/core"

export const useStyles = Mui.makeStyles((theme) => ({
	button: {
		color: "#fff",
		marginBottom: 10,
		width: 200,
	},
	buttonContainer: {
		bottom: 0,
		display: "flex",
		justifyContent: "center",
		position: "absolute",
		width: "100%",
	},
	card: {
		height: 250,
		position: "relative",
		width: 250,
	},
	cardContent: {
		display: "flex",
		flex: 1,
		flexDirection: "column",
		width: "100%",
	},
	footerText: {
		fontWeight: "bold",
		fontSize: 12,
	},
	itemContent: {
		backgroundColor: "#fff",
		position: "absolute",
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
	},
	name: {
		fontSize: 16,
		fontWeight: "bold",
		marginBottom: 16,
	},
	opacityContainer: {
		opacity: 0.75,
	},
}));