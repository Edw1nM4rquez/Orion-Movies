import './App.css';
import FooterC from './components/Footer';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import routes from './views/public/Routes';
function App() {
  return (
    <>
    <Router>
    <Navbar />
    <div style={{background:'white'}}>
    <Routes>
     {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
     </Routes>
    </div>
     
     <FooterC />
    </Router>
    </>
  );
}

export default App;
