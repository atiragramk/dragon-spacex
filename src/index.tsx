import ReactDOM from "react-dom/client";
import App from "./App";
import store, { persistor } from "./store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { GlobalStyle } from "./styled";
import {
  CircularProgress,
  createTheme,
  ThemeOptions,
  ThemeProvider,
} from "@mui/material";
import "react-toastify/dist/ReactToastify.css";

const theme = createTheme({
  typography: {
    fontFamily: `"Kanit", sans-serif`,
    fontSize: 14,
    fontWeightLight: 100,
    fontWeightRegular: 300,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    color: "#006064",
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
    text: {
      primary: "#000000de",
      secondary: "#006064",
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
        <PersistGate loading={<CircularProgress />} persistor={persistor}>
          <App />
        </PersistGate>
      </ThemeProvider>
    </Provider>
  </>
);
