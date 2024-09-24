import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Plan from "./pages/plan/CreatPlan";
function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/plan" element={<Plan />} />
      </Route>
    )
  );

  return (
    <div className="app">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
