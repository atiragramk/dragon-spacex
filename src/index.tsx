import ReactDOM from "react-dom/client";

import App from "./App";
import store from "./store";
import { Provider } from "react-redux";
import { GlobalStyle } from "./styled";
import { createTheme, ThemeOptions, ThemeProvider } from "@mui/material";
import "react-toastify/dist/ReactToastify.css";

const theme = createTheme({
  typography: {
    fontFamily: `"Kanit", sans-serif`,
    fontSize: 14,
    fontWeightLight: 100,
    fontWeightRegular: 300,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontSize: "50px",
      fontWeight: 500,
      "@media (min-width:600px)": {
        fontSize: "120px",
      },
      "@media (min-width:900px)": {
        fontSize: "200px",
      },
    },
    h4: {
      fontWeight: 500,
    },
  },
  palette: {
    primary: {
      main: "#FAFAFA",
      light: "#7986CB",
    },
    secondary: {
      main: "#FFCC80",
    },
    info: {
      main: "#006064",
    },
  },
} as ThemeOptions);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </Provider>
  </>
);
