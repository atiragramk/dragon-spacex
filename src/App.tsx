import { Layout } from "./components/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy } from "react";

const Home = lazy(() => import("./pages/Home"));
const DragonList = lazy(() => import("./pages/DragonList"));
const DragonItem = lazy(() => import("./pages/DragonItem"));

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/dragons" element={<DragonList />} />
            <Route path="/dragons/:routeId" element={<DragonItem />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
