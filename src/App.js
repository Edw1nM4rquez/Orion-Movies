import "./App.css";
import FooterC from "./components/Footer";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Redirect,
  useNavigate
} from "react-router-dom";
import routesPublic from "./views/public/Routes";
import routesPrivate from "./views/private/routes";
import { isAuthenticated } from "./core/Authentication";
import { Outlet } from "react-router-dom";
import userEvent from "@testing-library/user-event";

/**
 * Function to protect routes, login required
 * @param {*} param0 
 * @returns 
 */
const ProtectedRoute = ({ canActivate, redirectPath = "/" }) => {
  if (!canActivate) {
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
};

/**
 * App root
 * @returns 
 */
function App() {
  return (
    <>
      <Router basename="/">
        <Navbar />
        <div style={{ background: "white" }}>
          <Routes>

            {routesPublic.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
            <Route
              element={
                <ProtectedRoute
                  canActivate={isAuthenticated()}
                  redirectPath="/login"
                />
              }
            >
              {routesPrivate.map((route, index) => (
                <Route key={index} path={route.path} element={route.element} />
              ))}
            </Route>
            <Route path="*" element={<NotFoundPage></NotFoundPage>} />
          </Routes>
        </div>
        <FooterC />
      </Router>
    </>
  );
}

function NotFoundPage() {
const usenavigation = useNavigate();
usenavigation("/");
return (
  <div className="NotFound">
    <div className="container-not-found">
    <h2 className="title-notfound">Page not found</h2>
    <p >The page you are looking for does not exist.</p>
    <i className="fas fa-ban"></i>
    </div>
  </div>
);
}

export default App;
