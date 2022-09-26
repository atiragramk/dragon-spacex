import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import store from "./store";
import { Provider } from "react-redux";
import { GlobalStyle } from "./styled";
import { createTheme, ThemeOptions, ThemeProvider } from "@mui/material";

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
      "@media (min-width:500px)": {
        fontSize: "120px",
      },
      "@media (min-width:800px)": {
        fontSize: "200px",
      },
    },
  },
  palette: {
    primary: {
      main: "#9575CD",
      light: "#7986CB",
    },
    secondary: {
      main: "#e8eaf6",
      light: "#9FA8DA",
      dark: "#546E7A",
    },
    info: {
      main: "#5C6BC0",
    },
    priority: {
      low: "#AED581",
      normal: "#B0BEC5",
      high: "#FFB74D",
      critical: "#FF7043",
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
