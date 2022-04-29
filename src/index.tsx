import ReactDOM from "react-dom";
import * as Mui from "@material-ui/core";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ItemDetail, ItemList } from "./components";

const theme = Mui.createTheme({
	palette: {
		primary: {
			main: "#46ad78",
		},
	},
	typography: {
		fontSize: 12,
	},
});

ReactDOM.render(
	<Mui.ThemeProvider theme={theme}>
        <BrowserRouter>
            <Routes>
                <Route path="items/" element={<ItemList />} />
                <Route path="items/:id" element={<ItemDetail />} />
            </Routes>
        </BrowserRouter>
	</Mui.ThemeProvider>,
	document.getElementById("root"),
);
