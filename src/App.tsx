import { Layout } from "./components/Layout";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { lazy, useEffect } from "react";
import { useSelector } from "react-redux";
import { authStateSelector } from "./store/auth/selectors/auth";
import { ToastContainer } from "react-toastify";

const Home = lazy(() => import("./pages/Home"));
const DragonList = lazy(() => import("./pages/DragonList"));
const DragonItem = lazy(() => import("./pages/DragonItem"));
const Register = lazy(() => import("./pages/Register"));
const Login = lazy(() => import("./pages/Login"));
const Profile = lazy(() => import("./pages/Profile"));

const Page404 = lazy(() => import("./pages/404"));

function App() {
  const { user } = useSelector(authStateSelector);

  useEffect(() => {
    const saveToken = () => {
      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
      }
    };

    window.addEventListener("beforeunload", saveToken);

    return () => {
      window.removeEventListener("beforeunload", saveToken);
    };
  }, [user]);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/dragons" element={<DragonList />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />

            <Route
              path="/login"
              element={
                localStorage.getItem("user") ? <Navigate to="/" /> : <Login />
              }
            />
            <Route path="/dragons/:routeId" element={<DragonItem />} />
            <Route path="*" element={<Page404 />} />
          </Route>
        </Routes>
      </Router>
      <ToastContainer
        hideProgressBar
        position="top-center"
        autoClose={3000}
        theme="light"
      />
    </>
  );
}

export default App;
